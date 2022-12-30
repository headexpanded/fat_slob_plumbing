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

        <a href="">Services</a>

        <a href=""></a>

        <a href="">Franchises</a>

        <a href="">T-shirts</a>

        <a href="">Partners</a>
      </section>
      <style jsx>{`
        .navBar {
        }
      `}</style>
    </>
  );
};
