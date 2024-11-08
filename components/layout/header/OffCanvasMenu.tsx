"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import svgLogo from "@/public/images/logo/logo.svg";
import one from "@/public/images/menu/home1-image.jpg";
import two from "@/public/images/menu/home2-image.jpg";
import three from "@/public/images/menu/home3-image.jpg";
import four from "@/public/images/menu/home4-image.jpg";

const OffCanvasMenu = ({ toggleMenu, handleToggleMenu }: any) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " drop-active" : " ";
  };

  return (
    <div
      id="targetElement"
      className={(toggleMenu ? " " : " sidebar__hide") + " sidebar-area"}
    >
      <div className="sidebar__overlay"></div>
      <Link href="/" className="logo mb-40">
        <Image src={svgLogo} alt="logo" />
      </Link>
      <div className="sidebar__search mb-30">
        <input type="text" placeholder="Search..." />
        <i className="fa-regular fa-magnifying-glass"></i>
      </div>
      <div className="mobile-menu overflow-hidden">
        <nav className="mean-nav">
          <ul>
            <li className="has-megamenu">
              <a
                className={`drop ${isSubMenuButton("home")}`}
                onClick={() => handleSubmenu("home")}
              >
                Home
              </a>
              <ul
                className={`sub-menu mega-menu menu-image ${isSubMenuOpen(
                  "home"
                )}`}
              >
                <li>
                  <div className="image text-center">
                    <Image src={one} alt="Image" priority />
                    <div className="btn__group">
                      <Link href="/" className="btn-one">
                        Multi Page
                      </Link>
                      <Link href="index-one-page" className="btn-one mt-2">
                        One Page
                      </Link>
                    </div>
                    <h6 className="text-white">Home Page 01</h6>
                  </div>
                  <div className="image text-center">
                    <Image src={two} alt="Image" priority />
                    <div className="btn__group">
                      <Link href="index-2" className="btn-one">
                        Multi Page
                      </Link>
                      <Link href="index-2-one-page" className="btn-one mt-2">
                        One Page
                      </Link>
                    </div>
                    <h6 className="text-white">Home Page 02</h6>
                  </div>
                  <div className="image text-center">
                    <Image src={three} alt="Image" priority />
                    <div className="btn__group">
                      <Link href="index-3" className="btn-one">
                        Multi Page
                      </Link>
                      <Link href="index-3-one-page" className="btn-one mt-2">
                        One Page
                      </Link>
                    </div>
                    <h6 className="text-white">Home Page 03</h6>
                  </div>
                  <div className="image text-center">
                    <Image src={four} alt="Image" priority />
                    <div className="btn__group">
                      <Link href="index-dark" className="btn-one">
                        View Page
                      </Link>
                    </div>
                    <h6 className="text-white">Home Dark</h6>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <a
                className={`drop ${isSubMenuButton("services")}`}
                onClick={() => handleSubmenu("services")}
              >
                Services
              </a>
              <ul className={`sub-menu ${isSubMenuOpen("services")}`}>
                <li>
                  <Link href="service-solutions">IT Solutions</Link>
                </li>
                <li>
                  <Link href="service">IT Services</Link>
                </li>
                <li>
                  <Link href="service-details">Service Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`drop ${isSubMenuButton("pages")}`}
                onClick={() => handleSubmenu("pages")}
              >
                Pages
              </a>
              <ul className={`sub-menu ${isSubMenuOpen("pages")}`}>
                <li>
                  <Link href="case">Case Study 01</Link>
                </li>
                <li>
                  <Link href="case-2">Case Study 02</Link>
                </li>
                <li>
                  <Link href="case-details">Case Study Details</Link>
                </li>
                <li>
                  <Link href="team">Our Team</Link>
                </li>
                <li>
                  <Link href="team-details">Team Details</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="faq">FAQ&apos;s</Link>
                </li>
                <li>
                  <Link href="error">404 Error</Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`drop ${isSubMenuButton("blog")}`}
                onClick={() => handleSubmenu("blog")}
              >
                Blog
              </a>
              <ul className={`sub-menu ${isSubMenuOpen("blog")}`}>
                <li>
                  <Link href="blog">Blog Grid</Link>
                </li>
                <li>
                  <Link href="blog-standard">Blog Standard</Link>
                </li>
                <li>
                  <Link href="blog-details">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="info pt-40">
        <li>
          <i className="fa-solid primary-color fa-location-dot"></i>{" "}
          <Link href="/">example@example.com</Link>
        </li>
        <li className="py-2">
          <i className="fa-solid primary-color fa-phone-volume"></i>{" "}
          <Link href="tel:+880 1715-384539">+880 1715-384539</Link>
        </li>
        <li>
          <i className="fa-solid primary-color fa-paper-plane"></i>{" "}
          <Link href="/">helpline@leavesoft.com</Link>
        </li>
      </ul>
      <div className="social-icon mt-20">
        <Link href="/">
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-youtube"></i>
        </Link>
      </div>
      <button
        id="closeButton"
        className="text-white"
        onClick={() => handleToggleMenu(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default OffCanvasMenu;
