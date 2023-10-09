'use client'
import React, { useContext, useState } from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  Button, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection
} from "@nextui-org/react";
import Link from "next/link";

import { RiArrowDropDownLine, RiMenu5Fill } from 'react-icons/ri'
import { TbUsersGroup } from 'react-icons/tb'
import { FcFeedback, FcBusinessContact } from 'react-icons/fc'
import { useUserContext } from "@/app/auth/userContext/userContext";
import GitHubButton from 'react-github-btn'

export default function Nav() {
  const [openOffCanvas, setOpenOffCanvas] = useState(false)
  const HandleClick = () => {
    setOpenOffCanvas(!openOffCanvas)
  }
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const { user } = useUserContext();
  return (
    <>


      <Navbar isBordered maxWidth="2xl">
        <NavbarBrand as={Link} href={"/"} className="left-0">
          <h3 className="text-md lg:text-3xl">
            <span className="text-blue-600">L</span><span className="font-light">earnS</span><span className="font-thin">ource</span>
          </h3>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5 text-lg" justify="center">
          <NavbarItem>
            <Link href="/blogs">
              Internship/Courses
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/softwares">
              Softwares
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/udemy-free-courses">
              Udemy
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/hi"}>
              Be Contributor
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <span className="cursor-pointer flex items-center ">Menu <RiArrowDropDownLine /> </span>
              </DropdownTrigger>


              <DropdownMenu
                aria-label="Action event example"
              >
                <DropdownSection title="about qbytespace" showDivider>

                  <DropdownItem
                    key="new"
                    startContent={<TbUsersGroup className={iconClasses} />}
                  >
                    About Us
                  </DropdownItem>

                  <DropdownItem
                    key="new"
                    startContent={<FcBusinessContact className={iconClasses} />}
                  >
                    Contact
                  </DropdownItem>

                  <DropdownItem
                    key="new"
                    startContent={<FcFeedback className={iconClasses} />}
                  >
                    Write Feedback
                  </DropdownItem>


                </DropdownSection>
                {/* Policies */}
                <DropdownSection title="policies">

                  <DropdownItem
                    as={Link} href={'/disclaimer'}
                  >
                    Disclaimer
                  </DropdownItem>


                  <DropdownItem as={Link} href={'/terms-and-conditions'}
                  >
                    Terms and Conditions
                  </DropdownItem>



                  <DropdownItem
                  >
                    Privacy policy
                  </DropdownItem>

                </DropdownSection>



              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

        </NavbarContent>

        <NavbarContent justify="end" className="flex items-center">

          <GitHubButton href="https://github.com/mayurjadhav2002/next-application" data-color-scheme="no-preference: dark; light: dark; dark: light_high_contrast;" data-size="large" data-show-count="true" aria-label="Star mayurjadhav2002/next-application on GitHub">Star</GitHubButton>

          <RiMenu5Fill onClick={HandleClick} className='lg:hidden w-8 h-8 font-bold' />
        </NavbarContent>


      </Navbar>
      <div className={`fixed left-0 bg-white border-r-1 shadow-xl h-screen w-4/5 z-40 p-5 transition-transform duration-400 ease-in-out transform ${openOffCanvas ? 'translate-x-0' : '-translate-x-full'} ${openOffCanvas ? 'opacity-100' : 'opacity-0'} ${openOffCanvas ? 'block' : 'hidden'}`} onClick={HandleClick}>
      <ul className="space-y-2 font-medium">
  <li className="py-2 rounded-md hover:bg-blue-50">
    <Link href="/blogs">Internship/Courses</Link>
  </li>

  <li className="py-2 rounded-md hover:bg-blue-50">
    <Link href="/softwares">Softwares</Link>
  </li>

  <li className="py-2 rounded-md hover:bg-blue-50">
    <Link href="/udemy-free-courses">Udemy</Link>
  </li>

  <li className="py-2 rounded-md hover:bg-blue-50">
    <Link href="/hi">Be Contributor</Link>
  </li>

  <li className="py-2 rounded-md hover:bg-blue-50">
    <Dropdown>
      <DropdownTrigger>
        <span className="cursor-pointer flex items-center ">Menu <RiArrowDropDownLine /> </span>
      </DropdownTrigger>

      <DropdownMenu aria-label="Action event example">
        <DropdownSection title="about qbytespace" showDivider>
          <DropdownItem
            key="new"
            startContent={<TbUsersGroup className={iconClasses} />}
          >
            About Us
          </DropdownItem>

          <DropdownItem
            key="new"
            startContent={<FcBusinessContact className={iconClasses} />}
          >
            Contact
          </DropdownItem>

          <DropdownItem
            key="new"
            startContent={<FcFeedback className={iconClasses} />}
          >
            Write Feedback
          </DropdownItem>
        </DropdownSection>

        {/* Policies */}
        <DropdownSection title="policies">
          <DropdownItem as={Link} href={'/disclaimer'}>
            Disclaimer
          </DropdownItem>

          <DropdownItem as={Link} href={'/terms-and-conditions'}>
            Terms and Conditions
          </DropdownItem>

          <DropdownItem>
            Privacy policy
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  </li>
</ul>

      </div>
    </>
  );
}
