"use client";

/** @jsxImportSource @emotion/react */

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// emtion
import { css } from "@emotion/react";

// hamburger
import { Squash as Hamburger } from "hamburger-react";

const DesktopNavLinkStyle = css`
  display: block;
  padding: 1.2rem 1rem;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:hover {
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #da0027;
      z-index: -1;
      transform: skewX(-10deg);
    }
  }
`;

function Header() {
  const [isOpen, setOpen] = useState(false);

  const navigation = [
    { link: "/", text: "خانه" },
    { link: "/shop", text: "فروشگاه" },
    { link: "/download-install", text: "دانلود و نصب" },
    { link: "/rules", text: "قوانین" },
    { link: "/contactus", text: "ارتباط باما" },
    { link: "/aboutus", text: "درباره ما" },
  ];

  return (
    <header className="flex justify-between items-center py-4 sm:py-0 px-8 relative">
      <div id="first-section" className="text-[0]">
        <Link href="/">
          <Image
            className="rounded-full block"
            src="/images/logo.png"
            alt="کاروگیمز رول پلی"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div id="second-section">
        <div id="desktop-haeader-nav" className="hidden sm:flex items-baseline">
          <ul className="flex">
            {navigation.map((nav) => (
              <li key={nav.text}>
                <Link href={nav.link} css={DesktopNavLinkStyle}>
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
          <div id="server-status" className="mr-2 hidden md:block">
            <span className="font-semibold text-primary">سرور: آفلاین</span>
          </div>
        </div>

        <div id="mobile-header-nav" className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />

          <div id="mobie-menu" className={isOpen ? "block" : "hidden"}>
            <ul className="absolute right-0 my-4 w-full z-10 bg-[#171717] opacity-90">
              {navigation.map((nav) => (
                <li
                  onClick={() => setOpen(false)}
                  className="border-t mx-8"
                  key={nav.text}
                >
                  <Link href={nav.link} className="block py-3">
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
