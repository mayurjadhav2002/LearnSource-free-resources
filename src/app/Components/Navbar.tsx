"use client"
import { BsSearch,BsCart3 } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from "react"
import Tdcart from "./tdcart"

const Navbar = () => {

    const [togglenavbar, settogglenavbar] = useState(false)
    const [togglenav1, settogglenav1] = useState(false)
    const [togglenav2, settogglenav2] = useState(false)
    const [togglenav3, settogglenav3] = useState(false)
    const [toggleuser, settoggleuser] = useState(false)
    const [toggleliked, settoggleliked] = useState(false)

    function handleclicknav1() {
        if (togglenav1) {
            settogglenav1(false)
        } else {
            settogglenav2(false)
            settoggleuser(false)
            settogglenav3(false)
            settogglenav1(true)
            settoggleliked(false)

        }
    }
    function handleclicknav2() {
        if (togglenav2) {
            settogglenav2(false)
        } else {
            settogglenav1(false)
            settoggleuser(false)
            settogglenav3(false)
            settogglenav2(true)
            settoggleliked(false)

        }
    } 
    function handleclicknav3() {
        if (togglenav3) {
            settogglenav3(false)
        } else {
            settogglenav1(false)
            settogglenav2(false)
            settoggleuser(false)
            settogglenav3(true)
            settoggleliked(false)

        }
    }
    function handleclickuser() {
        if (toggleuser) {
            settoggleuser(false)
        } else {
            settogglenav1(false)
            settogglenav2(false)
            settogglenav3(false)
            settoggleuser(true)
            settoggleliked(false)

        }
    }
    function handleclickliked() {
        if (toggleuser) {
            settoggleliked(false)
        } else {
            settogglenav1(false)
            settogglenav2(false)
            settogglenav3(false)
            settoggleuser(false)
            settoggleliked(true)


        }
    }
    function handlenavbar() {
        if (togglenavbar) {
            settogglenavbar(false)
        } else {
            settogglenavbar(true)
        }
    }
// bg-[#558daf]
    const amount = 0
  const islogin = false
  
  const [open, setOpen] = useState(true);
  const [isMyComponentVisible, setIsMyComponentVisible] = useState(false);

  // Function to toggle the visibility of MyComponent
  const toggleMyComponent = () => {
    setIsMyComponentVisible(!isMyComponentVisible);
  };
  const hideTdcart = () => {
    setIsMyComponentVisible(false);
  };
    return (
        <nav className={`bg-[rgba(63,84,105,255)] w-full z-20 top-0 left-0 fixed shadow-slate-800`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">      
                <div className={`flex items-center ${togglenavbar ? "hidden" : "block"}`}>
                    <a href="/home"><span className="self-center md:text-2xl text-xl tracking-normal md:tracking-[.5em] whitespace-nowrap text-white heading">STOFFSPOT</span></a>
                </div>
                <div className={`flex ${togglenavbar ? "justify-between w-[100%]" : "block"} `}>
                    <div className='flex flex-wrap justify-center align-middle'>
                        <div className="h-full w-full flex flex-1 align-middle pt-1">
                            <BsSearch className='cursor-pointer mx-3 md:block hidden text-2xl font-extralight text-white' />
                        </div>
                        <div className="h-full w-full flex flex-1 align-middle pt-1">
                            <AiOutlineUser onClick={handleclickuser} className='cursor-pointer mx-3  text-2xl font-extralight text-white' />
                        </div>
                        <div className={`z-50 ${toggleuser ? "block" : "hidden"}  absolute mt-10 mx-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`} id="user-dropdown">
                            <div className="px-4 py-3 max-w-[35vw] min-w-[10vw] text-center md:max-w-[15vw] overflow-hidden">
                                {islogin ?
                                    <span className="block text-sm  text-gray-500 truncate"></span>
                                    : ""}
                            </div>
                            <ul className={"block py-2 text-center"} aria-labelledby="user-menu-button">
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</a>
                                </li>

                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Earnings</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Settings</a>
                                </li>
                                <li>{islogin ?
                                    <a href="/" className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 ">Logout</a>
                                    :
                                    <a href="/" className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 ">LogIn</a>
                                }
                                </li>
                            </ul>
                        </div>
                        <div className="h-full w-full flex flex-1 align-middle pt-1">
                            <AiOutlineHeart onClick={handleclickliked} className={` ${togglenavbar ? "block" : "hidden"} cursor-pointer mx-3 md:block text-2xl  font-extralight text-white`} />
                        </div>
                        <div className={`z-50 ${toggleliked ? "block" : "hidden"}  absolute mt-10 mx-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow `} id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        <div className="inline-flex items-center">
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        <div className="inline-flex items-center">
                                        </div>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <div className="h-full w-full flex flex-1 align-middle pt-1">
                                <button onClick={toggleMyComponent} className="cursor-pointer text-white md:text-lg text-xl mx-2"><span className="hidden md:flex"><BsCart3 className="cursor-pointer mx-3 md:block text-2xl  text-white"/> <span className="align-top relative -top-3 bg-red-500 text-xs rounded-full px-2 py-1 mx-1">
                                        {amount}
                                    </span></span><AiOutlineShoppingCart  className='cursor-pointer md:hidden flex mx-3 text-2xl font-extralight text-white'/>
                                    {isMyComponentVisible ? <Tdcart onClose={hideTdcart}/> : null}
                                </button>
                            </div>
                        </div>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" onClick={handlenavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true"  fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center md:-order-1   justify-between ${togglenavbar ? "block" : "hidden"} w-full md:flex md:w-auto`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <button id="dropdownNavbaraq" onClick={handleclicknav1} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded  md:p-0 md:w-auto ">Men
                                <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true"  fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div id="dropdownNavbar" className={`z-10 ${togglenav1 ? "block" : "hidden"} font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Kid</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button id="dropdownNavbara" onClick={handleclicknav2} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded  md:p-0 md:w-auto ">Women
                                <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true"  fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownNavbarq" className={`z-10 ${togglenav2 ? "block" : "hidden"} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Kid</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button id="dropdownNavbaraw" onClick={handleclicknav3} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded  md:p-0 md:w-auto ">Kids
                                <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true"  fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownNavbare" className={`z-10 ${togglenav3 ? "block" : "hidden"} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">Kid</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

