// define NavBar properties
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
    </>
  );
};
