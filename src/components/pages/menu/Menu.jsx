import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/footer/Footer'
import MenuDrinks from './MenuDrinks'
import MenuFoods from './MenuFoods'
import MenuAtHomeCoffee from './MenuAtHomeCoffee'
import MenuMerchandise from './MenuMerchandise'
import ModalViewItem from './ModalViewItem'
import ModalCart from './ModalCart'
import Toast from '../../partials/Toast'



const Menu = () => {
  const [menuTab, setMenuTab] = React.useState('drinks');
  const [isModalShow, setModalShow] = React.useState(false); // state
  const [isCartShow, setCartShow] = React.useState(false);
  const [subItem, setSubItem] = React.useState([]); // container of data in the subItem
  const [cartItem, setCartItem] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const handleChangeMenu = (menu) => {
    setMenuTab(menu)
  }

  return (
    <div>
      <Header setCartShow={setCartShow} cartItem={cartItem}/>
      <div className="container">
        <div className="grid grid-cols-[20%_1fr] gap-5 my-20">
          <aside>
            <ul className='space-y-5'>
              <li><button className={`font-bold ${menuTab === "drinks" ? "text-accent" : ""}`} onClick={() => handleChangeMenu("drinks")}>Drinks</button></li> 
              <li><button className={`font-bold ${menuTab === "food" ? "text-accent" : ""}`} onClick={() => handleChangeMenu("food")}>Foods</button></li>
              <li><button className={`font-bold ${menuTab === "ahcoffee" ? "text-accent" : ""}`} onClick={() => handleChangeMenu("ahcoffee")}>At Home Coffee</button></li>
              <li><button className={`font-bold ${menuTab === "merchandise" ? "text-accent" : ""}`} onClick={() => handleChangeMenu("merchandise")}>Merchandise</button></li>
            </ul>
          </aside>
          <main>
            <h2>Menu</h2>
            {menuTab === "drinks" && <MenuDrinks setModalShow={setModalShow} setSubItem={setSubItem}/>}
            {menuTab === "food" && <MenuFoods setModalShow={setModalShow} setSubItem={setSubItem}/>}
            {menuTab === "ahcoffee" && <MenuAtHomeCoffee setModalShow={setModalShow} setSubItem={setSubItem}/>}
            {menuTab === "merchandise" && <MenuMerchandise setModalShow={setModalShow} setSubItem={setSubItem}/>}
          </main>
        </div>
      </div>
      
      <Footer/>
      {isModalShow && <ModalViewItem setModalShow={setModalShow} subItem={subItem} setCartItem={setCartItem} cartItem={cartItem} setSuccess={setSuccess}/> }
      {isCartShow && <ModalCart setCartShow={setCartShow} cartItem={cartItem} setCartItem={setCartItem}/>}

      {success && <Toast setSuccess={setSuccess}/> }
      
    </div>
  )
}

export default Menu