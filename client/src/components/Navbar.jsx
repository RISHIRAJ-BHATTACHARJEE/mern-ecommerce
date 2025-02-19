import { Link, Tabs } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { IoHeartOutline, IoCartOutline, IoSearch } from "react-icons/io5";
import React from "react";
import { InputGroup } from "./ui/input-group";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between !py-6 !px-20 !border-b-1">
      <img src="/logo.svg" alt="logo"/>
      <div>
        <Tabs.Root defaultValue="home" variant="plain" className="!gap-5">
            <Tabs.List className="">
            <Tabs.Trigger value="home" asChild>
                <Link unstyled className="!text-lg" href="/home">
                Home
                </Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="contact" asChild>
                <Link unstyled className="!pl-14 !text-lg" href="/contact">
                Contact
                </Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="about" asChild>
                <Link unstyled className="!pl-14 !text-lg" href="#about">
                About
                </Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="signup" asChild>
                <Link unstyled className="!pl-14 !text-lg" href="#signup">
                Sign Up
                </Link>
            </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
      </div>
      <div className="flex items-center gap-7">
        <InputGroup flex="1" endElement={<IoSearch size={20}/>}>
          <Input placeholder="Find your products" className="!w-full"/>
        </InputGroup>
        <IoHeartOutline size={28} className="cursor-pointer"/>
        <IoCartOutline size={28} className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
