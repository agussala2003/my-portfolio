"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "./theme-switch";
import { siteConfig } from "@/config/site";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = siteConfig.navItems;

  return (
    <Navbar
      className="bg-[#DBE2EF] dark:bg-[#141617] sm:w-5/6 sm:mx-auto sm:mt-4 py-3 sm:rounded-xl transition-all duration-300 ease-in-out"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarContent justify="start" className="hidden sm:flex">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                className="text-[#112D4E] dark:text-[#fff] dark:hover:text-violet-300 dark:active:text-violet-300"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="center" className="sm:hidden w-full">
          <p
            color="foreground"
            className="text-xl text-center text-[#112D4E] dark:text-[#fff] dark:hover:text-violet-300 dark:active:text-violet-300"
          >
            {siteConfig.fullName}
          </p>
        </NavbarContent>
        <NavbarContent justify="end" className="sm:flex">
          <ThemeSwitch />
        </NavbarContent>
      </NavbarContent>
      <NavbarMenu className="bg-[#DBE2EF] dark:bg-[#141617] d-flex justify-center items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-2xl text-[#112D4E] dark:text-[#fff] dark:hover:text-violet-300 dark:active:text-violet-300"
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
