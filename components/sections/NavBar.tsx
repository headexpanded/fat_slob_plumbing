// define NavBar properties


import { Typography } from '../typography';

export const NavBar = () => {

  return (
    <>
      <nav className="navBar" role="navigation">
        <a href="#">Home</a>
        <a href="#franchisesSection">Franchises</a>
        <a href="#partnersSection">Partners</a>
        <a href="#ourStorySection">Our Story</a>
      </nav>

      <style jsx>{`
        .navBar {
          align-items: center;
          border-bottom: 1px solid var(--defaultDark);
          box-shadow: 0px 1px 8px 0px var(--shadow);
          display: flex;
          flex-grow: 1;
          height: 2rem;
          justify-content: space-evenly;
          width: 100%;
          background-color: var(--clr-bg-light);
          position: fixed;
          z-index: 2;
        }

        .navBar > a {
          color: var(--clr-text-secondary);
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
          background-color: var(--clr-text-secondary);
        }
      `}</style>
    </>
  );
};
