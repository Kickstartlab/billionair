import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header className=''>
      <div className="lg:flex hidden items-center justify-between font-poppins text-white-100 h-24">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 items-center">
            <li><a href="/" className="font-semibold">Home</a></li>
            <li><a href="/about" className="font-semibold">Whitepaper</a></li>
            <li><a href="/destination" className="font-semibold">Win $500K</a></li>
            <li><a href="/contact" className="font-semibold">Refer to Earn</a></li>
            <li><a href="/blog" className="font-semibold">How to buy</a></li>
            <li><a href="/blog" className="font-semibold">Contact Us</a></li>
          </ul>
        </nav>

        <div className="">
          <a href='/'>
            <button className="px-8 py-2 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
              Buy $AIRB
            </button>
          </a>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="/" className="logo w-1/2">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 left-0 p-2 w-3/4 overflow-y-auto font-poppins z-20 backdrop-blur-lg transition-all duration-75">
        <div className="p-2.5">
          <a href="/" className="">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className='gap-y-6 flex flex-col items-start mt-8'>
          <button onClick={() => setShow(!show)} className="px-2.5 font-medium">
            <a href="/" className="">Home</a>
          </button>

          <button onClick={() => setShow(!show)} className="px-2.5 font-medium">
            <a href="/about" className="">Whitepaper</a>
          </button>

          <button onClick={() => setShow(!show)} className="px-2.5 font-medium">
            <a href="/destination" className="">Win $500K</a>
          </button>

          <button onClick={() => setShow(!show)} className="px-2.5 font-medium">
            <a href="/contact" className="">Refer to Earn</a>
          </button>

          <button onClick={() => setShow(!show)} className="px-2.5 font-medium">
            <a href="/contact" className="">How to buy</a>
          </button>

          <button onClick={() => setShow(!show)} className="px-2.5 font-medium">
            <a href="/contact" className="">Contact Us</a>
          </button>

          <button onClick={() => setShow(!show)} className="w-full text-black-100 p-3 bg-pager rounded-lg text-left">
            <a href="/blog" className="">Buy $AIRB</a>
          </button>
        </div>

      </div> : null
      }


    </header >
  )
}
