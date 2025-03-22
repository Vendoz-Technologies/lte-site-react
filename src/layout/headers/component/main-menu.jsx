import Link from "next/link";
import React from "react";
import menu_data from "../menu-data";

const MainMenu = () => {
  return (
    <ul className="mainmenu">
      {menu_data.map((menu, i) => (
        <li key={i} className="has-droupdown">
          <Link
            href={menu.link}
            className={!menu.submenus ? "no-dropdown" : ""}
          >
            {menu.title}
          </Link>

          {/* First-level dropdown */}
          {!menu.mega_menu && menu.submenus && (
            <ul className="submenu">
              {menu.submenus.map((nav, i) => (
                <li key={i} className="has-submenu">
                  <Link href={nav.link}>
                    {nav.title}
                    {nav?.hot && <span className="badge-1">hot</span>}
                    {nav?.new && <span className="badge">new</span>}
                  </Link>
                  {/* Second-level submenu */}
                  {nav.submenus && (
                    <ul className="mega-sub-menu-01">
                      {nav.submenus.map((subNav, i) => (
                        <li key={i} className="has-submenu">
                          <Link href={subNav.link}>
                            {subNav.title}
                            {subNav?.hot && (
                              <span className="badge-1">hot</span>
                            )}
                            {subNav?.new && <span className="badge">new</span>}
                          </Link>
                          {/* Third-level submenu */}
                          {subNav.submenus && (
                            <ul>
                              {subNav.submenus.map((nav, i) => (
                                <li key={i}>
                                  <Link href={nav.link}>
                                    {nav.title}
                                    {nav?.hot && (
                                      <span className="badge-1">hot</span>
                                    )}
                                    {nav?.new && (
                                      <span className="badge">new</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Mega Menu */}
          {menu.mega_menu && (
            <ul className="mega-menu">
              {menu.submenus.map((nav, i) => (
                <li key={i}>
                  <h6 className="menu-title">{nav.title}</h6>
                  <ul className="submenu mega-sub-menu-01">
                    {nav.mega_submenu.map((m, i) => (
                      <li key={i} className="has-submenu">
                        <Link href={m.link}>
                          {m.title}
                          {m?.hot && <span className="badge-1">hot</span>}
                          {m?.new && <span className="badge">new</span>}
                        </Link>
                        {/* Second-level in Mega Menu */}
                        {m.submenus && (
                          <ul>
                            {m.submenus.map((nav, i) => (
                              <li key={i} className="has-submenu">
                                <Link href={nav.link}>
                                  {nav.title}
                                  {nav?.hot && (
                                    <span className="badge-1">hot</span>
                                  )}
                                  {nav?.new && (
                                    <span className="badge">new</span>
                                  )}
                                </Link>
                                {/* Third-level in Mega Menu */}
                                {nav.submenus && (
                                  <ul>
                                    {nav.submenus.map((nav, i) => (
                                      <li key={i}>
                                        <Link href={nav.link}>
                                          {nav.title}
                                          {nav?.hot && (
                                            <span className="badge-1">hot</span>
                                          )}
                                          {nav?.new && (
                                            <span className="badge">new</span>
                                          )}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
