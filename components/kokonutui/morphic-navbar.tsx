"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetHeader, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, ArrowRightIcon } from "lucide-react";
import ParticleButton from "./particle-button";

const navItems = {
  "/": {
    name: "home",
  },
  "/about-us": {
    name: "about-us",
  },
  "/services": {
    name: "services",
  },
  "/pricing": {
    name: "pricing",
  },
  "/case-studies": {
    name: "case-studies",
  },
  "/contact-us": {
    name: "contact-us",
  },
};

export function MorphicNavbar() {
  const [ activePath, setActivePath ] = useState("/");
  const [ isOpen, setIsOpen ] = useState(false);

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return activePath === "/";
    }
    return activePath.startsWith(path);
  };

  const handleNavClick = (path: string) => {
    setActivePath(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex mx-auto max-w-5xl px-4 py-2 items-center justify-center">
        <div className="glass flex items-center justify-between overflow-hidden rounded-lg">
          {Object.entries(navItems).map(([ path, { name } ], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            const prevPath = index > 0 ? array[ index - 1 ][ 0 ] : null;
            const nextPath =
              index < array.length - 1 ? array[ index + 1 ][ 0 ] : null;

            return (
              <Link
                className={clsx(
                  "flex items-center justify-center bg-primary p-1.5 px-4 text-md text-white transition-all hover:cursor-pointer duration-300 capitalize tracking-wider",
                  isActive
                    ? "mx-4 rounded-lg text-base tracking-wider"
                    : clsx(
                      (isActiveLink(prevPath || "") || isFirst) &&
                      "rounded-l-lg",
                      (isActiveLink(nextPath || "") || isLast) &&
                      "rounded-r-lg"
                    )
                )}
                href={path}
                key={path}
                onClick={() => handleNavClick(path)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className="block lg:hidden w-full px-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/assets/logo.png"
              width={150}
              height={150}
              className="max-h-10 object-contain"
              alt="Logo"
            />
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2" onClick={() => handleNavClick("/")}>
                    <Image
                      src="/assets/logo.png"
                      width={150}
                      height={150}
                      className="max-h-10 object-contain"
                      alt="Logo"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-2">
                {Object.entries(navItems).map(([ path, { name } ]) => {
                  const isActive = isActiveLink(path);
                  return (
                    <SheetClose asChild key={path}>
                      <Link
                        href="#"
                        onClick={() => handleNavClick(path)}
                        className={clsx(
                          "flex items-center justify-start px-4 py-3 rounded-lg text-base font-medium capitalize transition-all duration-200",
                          isActive
                            ? "bg-primary text-white"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="px-4">
                <SheetClose asChild>
                  <ParticleButton className="w-full text-sm tracking-wide uppercase h-10 px-8 py-2">
                    <Link href="/" className="flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRightIcon className="size-4 text-white" />
                    </Link>
                  </ParticleButton>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default MorphicNavbar;
