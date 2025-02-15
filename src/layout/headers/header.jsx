import Link from "next/link";
import React, { useState } from "react";
import SearchPopup from "../../components/common/popup-modal/search-popup";
import OffCanvas from "../../components/common/sidebar/off-canvas";
import useSticky from "../../hooks/use-sticky";
import HeaderTopLeft from "../headers/component/header-top-left";
import HeaderTopRight from "../headers/component/header-top-right";
import MainMenu from "../headers/component/main-menu";

const Header = ({ header_style, no_top_bar, disable_full_width }) => {
  const { sticky } = useSticky();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`edu-header header-style-${
          header_style ? header_style : "1"
        } ${
          disable_full_width ? "disbale-header-fullwidth" : "header-fullwidth"
        } ${no_top_bar ? "no-topbar" : ""}`}
      >
        {!no_top_bar && (
          <div className="header-top-bar">
            <div className="container-fluid">
              <div className="header-top">
                <div className="header-top-left">
                  <HeaderTopLeft />
                </div>
                <div className="header-top-right">
                  <HeaderTopRight />
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="edu-sticky-placeholder"></div>
        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container-fluid">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href={"/"}>
                    <img
                      className="logo-light"
                      src="/assets/images/logo/logo-white.png"
                      alt="logo"
                      style={{ height: "120px" }}
                    />
                    <img
                      className="logo-dark"
                      src="/assets/images/logo/logo-dark.png"
                      alt="logo"
                      style={{ height: "120px", filter: "invert(1)" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <MainMenu />
                </nav>
              </div>
              <div className="header-right">
                <ul className="header-action">
                  <li className="search-bar">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button className="search-btn" type="button">
                        <i className="icon-2"></i>
                      </button>
                    </div>
                  </li>
                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button
                      className="hamberger-button"
                      onClick={() => setIsOpen(true)}
                    >
                      <i className="icon-54"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </header>
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
