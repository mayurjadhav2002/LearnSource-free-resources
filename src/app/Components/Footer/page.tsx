"use client"
import Link from "next/link";
import React from "react";
import { FiFacebook,FiInstagram,FiLinkedin} from 'react-icons/fi';
import {RiTwitterXLine} from 'react-icons/ri';

export default function Footer() {
  return (  
    <footer className="text-gray-500">
      <div className="bg-[rgba(119,189,178,0.17)]">

  <div className="container py-16 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-2/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-3xl mb-3 ">StoffSPot</h2>
        <h2 className="max-w-xs text-sm" style={{ fontFamily: 'AbeatbyKai' }}>
        StoffSpot is a one-stop shop for all things recycling clothes. Whether you're looking to buy or sell, StoffSpot has you covered. With a wide selection of clothes to choose from, you're sure to find something you love. And, because StoffSpot is committed to sustainability, you can feel good knowing that your clothes are being recycled and reused</h2>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-md mb-3">Other links:</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/home"} className="text-gray-600 hover:text-gray-800">Home</Link>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">About us</a>
          </li>
          <li>
            <Link href={"/contact"} className="text-gray-600 hover:text-gray-800">Contact us</Link>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Shop</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
        <nav className="list-none mb-10">
          <li className="">
            <a className="text-gray-600 hover:text-gray-800 flex "><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Mumbai, India</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 flex mt-2"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                StoffSpot.com</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 flex mt-2"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                +91 01234 56788</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-2/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label  className="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
    </div>
  </div>
      </div>
      
  <div className="bg-[rgba(63,84,105,255)] shadow-slate-800 ">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-white text-xl">StoffSpot</span>
      </a>
      <p className="text-sm sm:ml-6 text-white sm:mt-0 mt-4">© 2023 StoffSpot —
        <a href="/" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a  className="text-white">
        <FiFacebook className="text-white text-xl hover:text-blue-400 hover:fill-blue-800"/>
        </a>
        <a href="https://twitter.com/StoffSpot" className="ml-3 text-white">
        <RiTwitterXLine className="text-white text-xl hover:text-black hover:fill-black"/>
        </a>
        <a href="https://www.instagram.com/stoff_spot/?igshid=MWZjMTM2ODFkZg==" className="ml-3 text-white">
        <FiInstagram className="text-white text-xl hover:text-white hover:fill-pink-500"/>
          
        </a>
        <a href="https://www.linkedin.com/company/stoffspot-private-limited/" className="ml-3 text-white">
        <FiLinkedin className="text-white text-xl hover:text-white hover:fill-sky-500"/>
          
        </a>
      </span>
    </div>
  </div>
</footer>
  );
}
