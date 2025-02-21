import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { Avatar, Tabs } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { IoHeartOutline, IoCartOutline, IoSearch } from "react-icons/io5";
import React from "react";
import { InputGroup } from "./ui/input-group";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { MdLogout } from "react-icons/md";

const Navbar = ({ value = "home" }) => {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-between !py-6 !px-20 !border-b-1">
      <img src="/logo.svg" alt="logo" />
      <div>
        <Tabs.Root value={value} variant="plain" className="!gap-5">
          <Tabs.List className="">
            <Tabs.Trigger value="home" asChild>
              <Link className="!text-lg" to="/">
                Home
              </Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="contact" asChild>
              <Link className="!pl-14 !text-lg" to="/contact">
                Contact
              </Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="about" asChild>
              <Link className="!pl-14 !text-lg" to="#about">
                About
              </Link>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>
      <div className="flex items-center gap-9">
        {user ? (
          <>
            <InputGroup flex="1" endElement={<IoSearch size={20} />}>
              <Input placeholder="Find your products" className="!w-[20vw]" />
            </InputGroup>
            <IoHeartOutline size={28} className="cursor-pointer" />
            <IoCartOutline size={28} className="cursor-pointer" />
            <MenuRoot>
              <MenuTrigger asChild>
                <FaRegUserCircle size={28} className="cursor-pointer" />
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="signup">
                  <Link to={"/signup"} className="outline-none !m-auto">
                    <Avatar.Root >
                      <Avatar.Fallback name="Test User" />
                    </Avatar.Root>
                  </Link>
                </MenuItem>
                <MenuItem value="login">
                  <Link to={"/login"} onClick={logout} className="outline-none !text-lg !font-semibold !text-amber-700 flex items-center gap-3">
                    Logout
                    <MdLogout fill="oklch(0.555 0.163 48.998)" size={28}/>
                  </Link>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </>
        ) : (
          <>
            <InputGroup flex="1" endElement={<IoSearch size={20} />}>
              <Input placeholder="Find your products" className="!w-[20vw]" />
            </InputGroup>
            <IoHeartOutline size={28} className="cursor-pointer" />
            <IoCartOutline size={28} className="cursor-pointer" />
            <MenuRoot>
              <MenuTrigger asChild>
                <FaRegUserCircle size={28} className="cursor-pointer" />
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="signup">
                  <Link to={"/signup"} className="outline-none">
                    Sign Up
                  </Link>
                </MenuItem>
                <MenuItem value="login">
                  <Link to={"/login"} className="outline-none">
                    Login
                  </Link>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
