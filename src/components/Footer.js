import React from 'react'
import logo from '../assets/logo.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import insta from '../assets/insta.png';
import bell from '../assets/bell.png';




export default function Footer() {
  return (
    <footer className='container text-white-100 mx-auto lg:px-8 px-5 font-poppins'>

      <hr className='hr'>
      </hr>


      <div className="lg:flex justify-between items-center py-16 gap-6 lg:space-y-0 space-y-8">
        <div>
          <img src={logo} alt='logo' className='lg:block flex mx-auto'></img>
        </div>

        <div className='lg:space-y-8 space-y-6'>

          <div className='text-center opacity-60'>
            <p>{new Date().getFullYear()}© IRR Group LTD | All Rights Reserved</p>
            <p>Ajeltake Road , Reg no: 118412 , Marshall Islands, info@billionair.com</p>
          </div>

          <ul className="text-md flex flex-wrap justify-center lg:gap-8 gap-6 items-center">
            <li><a href="/" className="font-semibold">Home</a></li>
            <li><a href="/about" className="font-semibold">Whitepaper</a></li>
            <li><a href="/destination" className="font-semibold">Win $500K</a></li>
            <li><a href="/contact" className="font-semibold">Refer to Earn</a></li>
            <li><a href="/blog" className="font-semibold">How to buy</a></li>
            <li><a href="/blog" className="font-semibold">Contact Us</a></li>
          </ul>

          <div className='text-center opacity-60'>
            <p>Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate.</p>
            <p>Profits may be subject to capital gains or other taxes applicable in your jurisdiction</p>
          </div>

        </div>

        <div className='flex items-center justify-center gap-x-6'>
          <a href='/'><img src={twitter} alt='logo'></img></a>
          <a href='/'><img src={telegram} alt='logo'></img></a>
          <a href='/'><img src={bell} alt='logo'></img></a>
          <a href='/'><img src={discord} alt='logo'></img></a>
          <a href='/'><img src={insta} alt='logo'></img></a>
        </div>
      </div>
    </footer>
  )
}
