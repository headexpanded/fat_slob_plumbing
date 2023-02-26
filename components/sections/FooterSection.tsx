// define Footer section properties

import { Typography } from "../typography";

type FooterSectionProps = {
  content: string;
};

export const FooterSection = () => {
  return (
    <>
      <footer className="footerSection ">
        <p>
          We are not licenced plumbers. In case of emergency, you should contact
          a real plumber.
        </p>
      </footer>
      <style jsx>{`
        .footerSection {
          // background-color: var(--PVgold);
          display:flex;
          justify-content: center;
        }
        .footerSection p {
          color: var(--defaultDark);
          font-size: 0.5rem;
          margin: 0px;
          padding: 0.5rem 0;
        }
      `}</style>
    </>
  );
};
