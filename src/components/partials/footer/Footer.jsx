import React from 'react'
import { Link } from 'react-router-dom'
import { footerInfo, footerLinks } from './links'


const Footer = () => {
  return (
    <footer className='container ml-auto'>
        <div className="grid grid-cols-5 w-[80%] gap-4 mb-10">

            {footerLinks.map((item, key) => {
                return (
                    <div className='footer-link' key={key}>
                        <h3 className='mb-10 text-lg'>{item.title}</h3>
                        <ul className='opacity-70 space-y-6'>
                            {item.links.map((link, key) => <li key={key}>
                                <Link to={`${link}`}>{link.label}</Link>
                            </li>)}
                        </ul>
                    </div>
                )
            })}
            
        </div>

        <div className='py-8 border-t-2'>
            <ul className="mb-6 flex gap-5 items-center">
                <li><Link to=""><i className="fa-brands fa-spotify text-3xl"></i></Link></li>
                <li><Link to=""><i className="fa-brands fa-facebook text-3xl"></i></Link></li>
                <li><Link to=""><i className="fa-brands fa-pinterest text-3xl"></i></Link></li>
                <li><Link to=""><i className="fa-brands fa-instagram text-3xl"></i></Link></li>
                <li><Link to=""><i className="fa-brands fa-youtube text-3xl"></i></Link></li>
                <li><Link to=""><i className="fa-brands fa-twitter text-3xl"></i></Link></li>
            </ul>
            <ul className='space-y-6 mb-7'>

                {footerInfo.map((item, key) => {
                    return (
                        <li className='footer_info' key={key}><Link to={`${item.link}`}>{item.title}</Link></li>
                    )
                })}

            </ul>
            <p className="text-sm opacity-70 ">© 2024 Starbucks Coffee Company. All rights reserved.</p>
        </div>


    </footer>
  )
}

export default Footer