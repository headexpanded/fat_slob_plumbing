// define NavBar properties

import { useState } from "react";
import { Typography } from "../typography";

export const NavBar = () => {
  const [showSoldOut, setShowSoldOut] = useState(false);

 
  return (
    <>
      <section className="navBar" role="navigation">
        <a href="#">Home</a>
        <a href="#franchisesSection">Franchises</a>
        <a href="#partnersSection">Partners</a>
        <a href="#ourStorySection">Our Story</a>
      </section>

      <style jsx>{`
        .navBar {
          align-items: center;
          border-bottom: 1px solid var(--defaultDark);
          box-shadow: 0px 1px 8px 0px var(--defaultDark);
          display: flex;
          flex-grow: 1;
          height: 2rem;
          justify-content: space-evenly;
          width: 100%;
        }

        .navBar > a {
          color: var(--defaultLight);
          text-decoration: none;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          flex-direction: column;
        }

        .navBar > a:hover {
          transform: scale(1.05);
        }

        .navBar > a:hover::after,
        .navBar > a:focus::after {
          content: '';
          height: 2px;
          background-color: var(--defaultLight);
        }

        .soldOut {
          background: red;
          box-shadow: var(--boxshadow);
          display: flex;
          justify-content: center;
          padding: 1.5rem;
          width: 100%;
        }
      `}</style>
    </>
  );
};
