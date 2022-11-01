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
      <h2>{content}</h2>

      <style jsx>{`
        h2 {
          color: ${color ?? ""};
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.15rem;
          line-height: 1.1;
          padding: 48px 4px 60px 4px;
          text-align: center;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};
