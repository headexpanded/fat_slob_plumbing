// define NavBar properties

export const NavBar = () => {
  return (
    <>
      <nav className="navBar" role="navigation">
        <a href="#">Home</a>
        <a href="#franchisesSection">Franchises</a>
        <a href="#partnersSection">Partners</a>
        <a href="#faqSection">F.A.Q.</a>
      </nav>

      <style jsx>{`
        .navBar {
          align-items: center;
          background-color: var(--clr-bg-dark);
          display: flex;
          flex-grow: 1;
          height: 2rem;
          justify-content: space-evenly;
          position: fixed;
          width: 100%;
          z-index: 2000;
        }

        .navBar > a {
          color: var(--clr-text-light);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
        }

        .navBar > a:hover {
          transform: scale(1.05);
        }

        .navBar > a:hover::after,
        .navBar > a:focus::after {
          background-color: var(--clr-text-secondary);
          content: "";
          height: 2px;
        }
      `}</style>
    </>
  );
};
