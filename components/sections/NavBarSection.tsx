// define NavBar properties
import { Typography } from "../typography";

type NavBarSectionProps = {};

export const NavBarSection = () => {
  return (
    <>
      <section className="navBarSection">
        <div className="container d-flex flex-row px-5 justify-content-around">
          <Typography.NavLink navLink="HOME" color="var(--solidBrown)" />
          <Typography.NavLink navLink="SERVICES" color="var(--solidBrown)" />
          <Typography.NavLink
            navLink="RESERVATIONS"
            color="var(--solidBrown)"
          />
          <Typography.NavLink navLink="FRANCHISES" color="var(--solidBrown)" />
          <Typography.NavLink navLink="T-SHIRTS" color="var(--solidBrown)" />
          <Typography.NavLink navLink="PARTNERS" color="var(--solidBrown)" />
        </div>
      </section>
      <style jsx>{`
        .navBarSection {
          font-size: 0.5rem;
        }
      `}</style>
    </>
  );
};
