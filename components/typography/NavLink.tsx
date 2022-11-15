// define properties of NavLink texts

// define NavBar type properties
type NavLinkProps = {
  navLinkName: string;
  navLink: string;
  color?: string;
};

// define NavLink component. Use for navigation links
export const NavLink = ({ navLinkName, navLink, color }: NavLinkProps) => {
  return (
    <>
      <a href={navLink}>
        <h4>{navLinkName}</h4>
      </a>

      <style jsx>{`
        h4 {
          color: ${color ?? ""};
          font-size: 0.9rem;
          padding: 20px 0px 8px 0px;
          text-transform: uppercase;
        }

        h4:hover {
          cursor: pointer;
          text-decoration: none;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};
