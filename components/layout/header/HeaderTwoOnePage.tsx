"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo-light.svg";
import one from "@/public/images/menu/home1-image.jpg";
import two from "@/public/images/menu/home2-image.jpg";
import three from "@/public/images/menu/home3-image.jpg";
import four from "@/public/images/menu/home4-image.jpg";
import OffCanvasTwoOnePage from "./OffCanvasTwoOnePage";

const HeaderTwoOnePage = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // search toggle
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <header
        className={
          (scrolled ? " aniamted menu-fixed" : " ") +
          " header-area header-two-area"
        }
      >
        <div className="container header__container">
          <div className="header__main">
            <Link href="/" className="logo">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  <li className="has-megamenu">
                    <Link href="/">Home</Link>
                    <ul className="sub-menu mega-menu menu-image">
                      <li>
                        <div className="image text-center">
                          <Image src={one} alt="Image" priority />
                          <div className="btn__group">
                            <Link href="/" className="btn-one">
                              Multi Page
                            </Link>
                            <Link
                              href="index-one-page"
                              className="btn-one mt-2"
                            >
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
                            <Link
                              href="index-2-one-page"
                              className="btn-one mt-2"
                            >
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
                            <Link
                              href="index-3-one-page"
                              className="btn-one mt-2"
                            >
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
                    <Link href="#about-two">About</Link>
                  </li>
                  <li>
                    <Link href="#service-two">Services</Link>
                  </li>
                  <li>
                    <Link href="#team-two">Team</Link>
                  </li>
                  <li>
                    <Link href="#faq-two">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#blog-two">Blog</Link>
                  </li>
                  <li className="ml-20 d-none d-lg-block">
                    <a className="search-trigger" onClick={handleSearch}>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_307_344)">
                          <path
                            d="M16.0375 14.9381L12.0784 11.0334C13.0625 9.86621 13.6554 8.36744 13.6554 6.73438C13.6554 3.02103 10.5925 0 6.82774 0C3.0629 0 0 3.02103 0 6.73438C0 10.4475 3.0629 13.4683 6.82774 13.4683C8.4834 13.4683 10.0031 12.8836 11.1865 11.913L15.1456 15.8178C15.2687 15.9393 15.4301 16 15.5915 16C15.7529 16 15.9143 15.9393 16.0375 15.8178C16.2839 15.5748 16.2839 15.181 16.0375 14.9381ZM1.26142 6.73438C1.26142 3.70705 3.75845 1.24414 6.82774 1.24414C9.89695 1.24414 12.3939 3.70705 12.3939 6.73438C12.3939 9.76146 9.89695 12.2241 6.82774 12.2241C3.75845 12.2241 1.26142 9.76146 1.26142 6.73438Z"
                            fill="#ffffff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_307_344">
                            <rect width="16.2222" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-none d-xl-flex gap-4">
              <Link href="contact" className="btn-one">
                Get A Quote <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
              <div className="about-three__left-item d-flex flex-wrap gap-2 align-items-center">
                <div className="about-call-icon">
                  <span>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_918_1337)">
                        <path
                          d="M5.41667 4.33337H9.75L11.9167 9.75004L9.20833 11.375C10.3685 13.7275 12.2725 15.6315 14.625 16.7917L16.25 14.0834L21.6667 16.25V20.5834C21.6667 21.158 21.4384 21.7091 21.0321 22.1154C20.6257 22.5218 20.0746 22.75 19.5 22.75C15.2742 22.4932 11.2885 20.6987 8.2949 17.7051C5.3013 14.7115 3.5068 10.7258 3.25 6.50004C3.25 5.9254 3.47827 5.3743 3.8846 4.96798C4.29093 4.56165 4.84203 4.33337 5.41667 4.33337Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 7.58337C16.8246 7.58337 17.3757 7.81165 17.7821 8.21798C18.1884 8.6243 18.4167 9.1754 18.4167 9.75004"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 3.25C17.9739 3.25 19.6272 3.93482 20.8462 5.15381C22.0652 6.37279 22.75 8.02609 22.75 9.75"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath>
                          <rect width="26" height="26" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="info">
                  <span className="sm-font fw-600 text-white">Call Us Now</span>
                  <h5 className="text-white">+208-555-0112</h5>
                </div>
              </div>
            </div>
            <div className="bars d-block d-lg-none">
              <i
                id="openButton"
                className="fa-solid fa-bars"
                onClick={handleToggleMenu}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasTwoOnePage
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />

      <div
        className={(searchToggle ? " open" : " ") + " search-wrap"}
        onClick={closeSearch}
      >
        <div className="search-inner">
          <i
            className="fas fa-times search-close"
            id="search-close"
            onClick={closeSearch}
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTwoOnePage;
