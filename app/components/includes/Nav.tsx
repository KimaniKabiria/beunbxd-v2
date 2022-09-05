import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "@remix-run/react";
import { LockOpenIcon, ChevronDownIcon, BriefcaseIcon, InformationCircleIcon } from "@heroicons/react/24/outline"

import Logo from "../../assets/images/logo-black.png"
 
export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-bold text-taran-blue hover:text-taran-orange"
      >
        <Link to="/about">Who are We?</Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-bold text-taran-blue hover:text-taran-orange"
      >
        <Link to="/design">Design</Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-bold text-taran-blue hover:text-taran-orange"
      >
        <a href="#" className="flex items-center">
          Develop
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-bold text-taran-blue hover:text-taran-orange"
      >
        <a href="#" className="flex items-center">
          Market
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="sticky top-0 z-50 max-w-full flex flex-wrap items-center justify-between mx-auto py-4 px-4 lg:px-8 bg-unbxd-bg bg-opacity-75 backdrop-filter backdrop-blur backdrop-saturate-150 shadow-xl border-none rounded-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <img
            className="block h-8 w-auto"
            src={Logo}
            alt="Workflow"
          />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:block">
          <Menu>
            <MenuHandler>
              <Button variant="gradient" className="flex flex-row px-4 py-1 mt-4 text-sm leading-none bg-gradient-to-r from-taran-orange to-taran-blue  text-white border-2 rounded-xl hover:border-transparent hover:text-white hover:bg-taran-blue lg:mt-0">
                <ChevronDownIcon className="flex -ml-1 mr-2 h-6 w-6" aria-hidden="true" />
                <p className="flex lg:block my-2 font-bold">LET&apos;S UNBX</p>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <div className="group inline-flex rounded-md items-center w-full text-base text-taran-blue hover:text-taran-orange">
                  <LockOpenIcon className="flex mr-2 h-6 w-6" aria-hidden="true" />
                  <p className="flex lg:block my-2 font-medium">Who we have unbxd.</p>                        
                </div>
              </MenuItem>
              <MenuItem>
                <div className="group inline-flex rounded-md items-center w-full text-base text-taran-blue hover:text-taran-orange">
                  <InformationCircleIcon className="flex mr-2 h-6 w-6" aria-hidden="true" />
                  <p className="flex lg:block my-2 font-medium">FAQs.</p>                        
                </div>
              </MenuItem>
              <MenuItem className="rounded-b-lg bg-gradient-to-r from-taran-blue to-taran-orange">
                <div className="text-white">
                    <a href="https://clienthub.beunbxd.com/getunbxd">
                    <div className="group flex rounded-md items-center w-full text-base ">
                        <BriefcaseIcon className="flex mr-2 h-6 w-6" aria-hidden="true" />
                        <p className="flex lg:block my-2 font-bold">Get a Quote.</p>                        
                    </div>   
                    </a>      
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="lg:hidden">
          <Menu>
            <MenuHandler>
              <Button variant="gradient" className="flex flex-row px-4 py-1 mt-4 text-sm leading-none bg-gradient-to-r from-taran-orange to-taran-blue  text-white border-2 rounded-xl hover:border-transparent hover:text-white hover:bg-taran-blue lg:mt-0">
                <ChevronDownIcon className="flex -ml-1 mr-2 h-6 w-6" aria-hidden="true" />
                <p className="flex lg:block my-2 font-bold">LET&apos;S UNBX</p>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <div className="group inline-flex rounded-md items-center w-full text-base text-taran-blue hover:text-taran-orange">
                  <LockOpenIcon className="flex mr-2 h-6 w-6" aria-hidden="true" />
                  <p className="flex lg:block my-2 font-medium">Who we have unbxd.</p>                        
                </div>
              </MenuItem>
              <MenuItem>
                <div className="group inline-flex rounded-md items-center w-full text-base text-taran-blue hover:text-taran-orange">
                  <InformationCircleIcon className="flex mr-2 h-6 w-6" aria-hidden="true" />
                  <p className="flex lg:block my-2 font-medium">FAQs.</p>                        
                </div>
              </MenuItem>
              <MenuItem className="rounded-b-lg bg-gradient-to-r from-taran-blue to-taran-orange">
                <div className="text-white">
                    <a href="https://clienthub.beunbxd.com/getunbxd">
                    <div className="group flex rounded-md items-center w-full text-base ">
                        <BriefcaseIcon className="flex mr-2 h-6 w-6" aria-hidden="true" />
                        <p className="flex lg:block my-2 font-bold">Get a Quote.</p>                        
                    </div>   
                    </a>      
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </MobileNav>
    </Navbar>
  );
}