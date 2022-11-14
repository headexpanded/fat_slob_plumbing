// define NavBar properties
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "../typography/NavLink";

type NavBarSectionProps = {};

export const NavBarSection = () => {
  return (
    <>
      <section className="navBarSection">
        <Navbar expand="lg">
          <Container>
            <Nav.Link href="#home">
              <NavLink navLink="HOME" color="var(--solidBrown)" />
            </Nav.Link>
            <Nav.Link>
              <NavLink navLink="SERVICES" color="var(--solidBrown)" />
            </Nav.Link>
            <Nav.Link>
              <NavLink navLink="BOOKINGS" color="var(--solidBrown)" />
            </Nav.Link>
            <Nav.Link>
              <NavLink navLink="FRANCHISES" color="var(--solidBrown)" />
            </Nav.Link>
            <Nav.Link>
              <NavLink navLink="T-SHIRTS" color="var(--solidBrown)" />
            </Nav.Link>
            <Nav.Link>
              <NavLink navLink="PARTNERS" color="var(--solidBrown)" />
            </Nav.Link>
          </Container>
        </Navbar>
      </section>
      <style jsx>{`
        .navBarSection {
          background-color: var(--coffee);
          font-size: 0.5rem;
        }
      `}</style>
    </>
  );
};
