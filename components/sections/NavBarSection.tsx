// define NavBar properties
<<<<<<< HEAD
=======
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
>>>>>>> night-before
import { NavLink } from "../typography/NavLink";

export type navLink = {
  navLinkName: string;
  navLink: string;
  id: string;
};

type NavBarSectionProps = {
  data: Array<navLink>;
};

export const NavBarSection = ({ data }: NavBarSectionProps) => {
  return (
    <>
<<<<<<< HEAD
      <section className="NavBarSection">
        <div className="container d-flex flex-row px-5 justify-content-around">
          {data?.map(({ id, ...other }) => {
            return (
              <div key={id}>
                <NavLink {...other} />
              </div>
            );
          })}
        </div>
      </section>
=======
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
>>>>>>> night-before
    </>
  );
};
