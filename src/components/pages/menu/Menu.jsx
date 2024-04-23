import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/footer/Footer'
import MenuDrinks from './MenuDrinks'
import MenuFoods from './MenuFoods'
import MenuAtHomeCoffee from './MenuAtHomeCoffee'
import MenuMerchandise from './MenuMerchandise'
import ModalViewItem from './ModalViewItem'


const Menu = () => {
  const [menuTab, setMenuTab] = React.useState('drinks');
  const [isModalShow, setModalShow] = React.useState(false); // state
  const [subItem, setSubItem] = React.useState([]); // container of data in the subItem
  const handleChangeMenu = (menu) => {
    setMenuTab(menu)
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="grid grid-cols-[20%_1fr] gap-5 my-20">
          <aside>
            <ul className='space-y-5'>
              <li><button onClick={() => handleChangeMenu("drinks")}>Drinks</button></li>
              <li><button onClick={() => handleChangeMenu("food")}>Foods</button></li>
              <li><button onClick={() => handleChangeMenu("ahcoffee")}>At Home Coffee</button></li>
              <li><button onClick={() => handleChangeMenu("merchandise")}>Merchandise</button></li>
            </ul>
          </aside>
          <main>
            <h2>Menu</h2>
            {menuTab === "drinks" && <MenuDrinks setModalShow={setModalShow} setSubItem={setSubItem}/>} // the setter
            {menuTab === "food" && <MenuFoods/>}
            {menuTab === "ahcoffee" && <MenuAtHomeCoffee/>}
            {menuTab === "merchandise" && <MenuMerchandise/>}
            
            
          </main>
        </div>
      </div>
      
      <Footer/>
      {isModalShow && <ModalViewItem setModalShow={setModalShow} subItem={subItem}/> } // the data of the subitem
    </div>
  )
}

export default Menu