// define NavBar properties

export const NavBar = () => {
  return (
    <>
      <section className="navBar">
        <a href="#">Home</a>

        <a href="">Bookings</a>

        <a href="">Franchises</a>

        <a href="">T-Shirts</a>

        <a href="#partners">Partners</a>
      </section>
      <style jsx>{`
        .navBar {
          height: 2rem;
          border-bottom: 1px solid var(--defaultDark);
          box-shadow: 0px 2px 4px 0px var(--defaultDark);
          display: flex;
          justify-content: space-evenly;
          flex-grow:1;
          align-items: center;
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
          content: "";
          height: 2px;
          background-color: var(--defaultLight);
        }
      `}</style>
    </>
  );
};
