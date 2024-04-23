import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './svg/Logo'

const Header = () => {
  return (
    <div>
        <header className='py-5 border-b border-gray-200 shadow-sm'>
            <div className='px-10'>
                <ul className='flex gap-10 items-center'>
                    <li>
                        <Link to="/home">
                            <Logo size="50px"/> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Menu</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Reward</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Gift Cards</Link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header

