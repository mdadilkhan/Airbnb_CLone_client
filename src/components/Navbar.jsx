import React from "react";
import AirbnbLogo from "../assets/AirbnbLogo.png";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from "./Container";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm ">
      <div className="py-4 border-b-[1px] ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* logo */}
            <img
              src={AirbnbLogo}
              alt="Logo"
              className="hidden md:block cursor-pointer"
              height="100"
              width="100"
            />
            {/* search functionality */}
            <Search />
            {/* user menu */}
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
