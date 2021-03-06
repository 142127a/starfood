import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { CgFileAdd } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const width = navbarState ? "60%" : "0%";

  return (
    <>
      <section className="sidebar">
        <div className="top">
          <div className="brand">
            <span>Dashboard</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <AiOutlineMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Link to="/dashboard">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to="/dashboard/myorders">
                  <RiDashboard2Fill />
                  <span> My Orders</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div
        // state={navbarState}
        className={"responsive " + (navbarState && "show")}
        style={{ width: width }}
      >
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <Link to="/dashboard" onClick={() => setNavbarState(false)}>
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <Link
                to="/dashboard/myorders"
                onClick={() => setNavbarState(false)}
              >
                <RiDashboard2Fill />
                <span> My Orders</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
