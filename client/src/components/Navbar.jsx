import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { useState } from "react";
import { Avatar, Tabs } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { IoHeartOutline, IoCartOutline, IoSearch } from "react-icons/io5";
import React from "react";
import { InputGroup } from "./ui/input-group";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { MdLogout } from "react-icons/md";
import AccountDropdownCard from "./ui/AccountDropdown";

const Navbar = ({ value = "home" }) => {
  //const { user, logout } = useAuth();
  const user = { name: "Manash", email: "xyz@example.com" };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };



  return (
    <div className="flex items-center justify-between !py-6 !px-20 !border-b-1">
      <img src="/logo.svg" alt="logo" />
      <div>
        <Tabs.Root value={value} variant="plain" className="!gap-5">
          <Tabs.List>
            <Tabs.Trigger value="home" asChild>
              <Link className="!text-lg" to="/">Home</Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="contact" asChild>
              <Link className="!pl-14 !text-lg" to="/contact">Contact</Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="about" asChild>
              <Link className="!pl-14 !text-lg" to="/about">About</Link>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>
      <div className="flex items-center gap-9">
        <InputGroup flex="1" endElement={<IoSearch className="cursor-pointer" size={20} />}>
          <Input placeholder="Find your products" className="!w-[20vw]" />
        </InputGroup>
        <Link to={"/cart"}>
        <IoCartOutline  size={28} className="cursor-pointer" />
        </Link>
        <Link to={"/wishlist"}>
        <IoHeartOutline size={28} className="cursor-pointer" />
        </Link>

        {user && (
          <MenuRoot>
            <div className="relative">
              <FaRegUserCircle onClick={toggleDropdown} size={28} className="cursor-pointer" />
              {isDropdownOpen && <AccountDropdownCard />}
            </div>

            <MenuContent>
              <MenuItem value="account">
                <Link to={"/account"} className="outline-none">
                  <Avatar.Root>
                    <Avatar.Fallback name={user.name || "User"} />
                  </Avatar.Root>
                </Link>
              </MenuItem>
              <MenuItem value="logout">
               ///<Link to={"/login"} className="outline-none !text-lg !font-semibold !text-amber-700 flex items-center gap-3">
               ///  Logout <MdLogout fill="oklch(0.555 0.163 48.998)" size={28} />
               ///</Link>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        )}
      </div>
    </div>
  );
};

export default Navbar;
