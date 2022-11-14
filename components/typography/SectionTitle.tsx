import { NavLink } from "./NavLink";
// define properties of Section Titles

// define Section Title Dark type properties
type SectionTitleProps = {
  content?: string;
  color?: string;
};

export const SectionTitle = ({ content, color }: SectionTitleProps) => {
  return (
    <>
      <div className="sectionTitle">
        <h2>{content}</h2>
        <div className="topLink">
          <NavLink navLink="#" navLinkName="Back to Top" />
        </div>
      </div>

      <style jsx>{`
        h2 {
          color: ${color ?? ""};
          font-size: 3rem;
          font-weight: 800;
<<<<<<< HEAD
=======
          line-height: 1.1;
          padding: 48px 4px 80px 40px;
          text-align: center;
          font-size: 46px;
>>>>>>> night-before
          letter-spacing: -0.1rem;
          line-height: 1.1;
          padding: 48px 4px 60px 4px;
          text-align: center;
          text-transform: uppercase;
        }
        .topLink {
          text-align: center;
          margin-top: -84px;
          padding-bottom: 40px;
        }
      `}</style>
    </>
  );
};
