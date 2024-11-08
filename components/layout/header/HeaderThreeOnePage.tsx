"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo-light.svg";
import one from "@/public/images/menu/home1-image.jpg";
import two from "@/public/images/menu/home2-image.jpg";
import three from "@/public/images/menu/home3-image.jpg";
import four from "@/public/images/menu/home4-image.jpg";
import OffCanvasThreeOnePage from "./OffCanvasThreeOnePage";

const HeaderThreeOnePage = () => {
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
          " header-area header-three-area"
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
                    <Link href="#about-three">About</Link>
                  </li>
                  <li>
                    <Link href="#case-three">Case</Link>
                  </li>
                  <li>
                    <Link href="#pricing-three">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#testimonial-three">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="#blog-section">Blog</Link>
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
            <div className="d-none d-lg-inline-block">
              <Link href="contact" className="btn-one">
                Get A Quote <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
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
      <OffCanvasThreeOnePage
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

export default HeaderThreeOnePage;
