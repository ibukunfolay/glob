import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import { NavLink as Link } from "react-router-dom";
export default function Sidebar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <span>Capital Equity</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <Link className="a" to="/dashboard/home">
              <MdSpaceDashboard />
              <span> Dashboard</span>
            </Link>

            <Link className="a" to="/dashboard/fund-wallet">
              <RiDashboard2Fill />
              <span>Fund wallet</span>
            </Link>

            <Link className="a" to="/dashboard/investments">
              <FaAddressCard />
              <span> Investments</span>
            </Link>

            <Link className="a" to="/dashboard/loans">
              <GiTwirlCenter />
              <span> Loans</span>
            </Link>

            <Link className="a" to="/dashboard/transactions">
              <BsFillChatTextFill />
              <span> Transactions</span>
            </Link>

            <Link className="a" to="/dashboard/wallet">
              <IoSettings />
              <span> Wallet</span>
            </Link>

            <Link className="a" to="/dashboard/bank-info">
              <IoSettings />
              <span> Bank Info</span>
            </Link>

            <Link className="a" to="/dashboard/withdrawal">
              <IoSettings />
              <span> Withdrawal</span>
            </Link>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <Link className="a" to="/dashboard/home">
            <MdSpaceDashboard />
            <span> Dashboard</span>
          </Link>

          <Link className="a" to="/dashboard/fund-wallet">
            <RiDashboard2Fill />
            <span>Fund wallet</span>
          </Link>

          <Link className="a" to="/dashboard/investments">
            <FaAddressCard />
            <span> Investments</span>
          </Link>

          <Link className="a" to="/dashboard/loans">
            <GiTwirlCenter />
            <span> Loans</span>
          </Link>

          <Link className="a" to="/dashboard/transactions">
            <BsFillChatTextFill />
            <span> Transactions</span>
          </Link>

          <Link className="a" to="/dashboard/wallet">
            <IoSettings />
            <span> Wallet</span>
          </Link>

          <Link className="a" to="/dashboard/bank-info">
            <IoSettings />
            <span> Bank Info</span>
          </Link>

          <Link className="a" to="/dashboard/withdrawal">
            <IoSettings />
            <span> Withdrawal</span>
          </Link>
          <div className="logout">
            <a href="#">
              <FiLogOut />
              <span className="logout">Logout</span>
            </a>
          </div>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #23bab1;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #23bab1;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: flex-start;
      // padding: 2em;
      margin: 0.2em auto;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        color: white;
        padding: 0.6rem 2rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #23bab1;
          color: black;
        }
        &.active {
          background-color: #23bab1;
          color: black;
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: 100%;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    display: flex;
    margin-top: 3em;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;
    .a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      color: white;
      padding: 0.6rem 1rem;
      border-radius: 0.6rem;
      &:hover {
        background-color: #23bab1;
        color: black;
      }
      &.active {
        background-color: #23bab1;
        color: black;
      }
    }
  }
`;
