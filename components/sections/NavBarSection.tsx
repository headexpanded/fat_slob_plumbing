// define NavBar properties
import { NavLink } from "../typography/NavLink";

export type navLink = {
  navLinkName: string;
  navLink: string;
  id: string;
  color?: string;
};

type NavBarSectionProps = {
  data: Array<navLink>;
};

export const NavBarSection = () => {
  return (
    <>
      <section className="navBarSection">
        <a href="#">Home</a>

        <a href="">Services</a>

        <a href=""></a>

        <a href="">Franchises</a>

        <a href="">T-shirts</a>

        <a href="">Partners</a>
      </section>
      <style jsx>{`
        .navBarSection {
        }
      `}</style>
    </>
  );
};
