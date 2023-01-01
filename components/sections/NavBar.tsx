// define NavBar properties
import { NavLink } from "../typography/NavLink";

export type navLink = {
  navLinkName: string;
  navLink: string;
  id: string;
  color?: string;
};

type NavBarProps = {
  data: Array<navLink>;
};

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
          border-bottom: 1px solid var(--PVgold);
          display: flex;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  );
};
