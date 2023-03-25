// define Footer section properties

import { Typography } from "../typography";

type FooterSectionProps = {
  content: string;
};

export const FooterSection = () => {
  return (
    <>
      <footer className="footerSection ">
        <Typography.ParaC
          color="var(--defaultDark)"
          content="We are not licenced plumbers."
          fontSize="1rem"
          fontWeight="500"
        />
        <Typography.ParaC
          color="var(--defaultDark)"
          content="In case of emergency, you should contact
          a real plumber."
          fontSize="1rem"
          fontWeight="500"
        />
      </footer>
      <style jsx>{`
        .footerSection {
          background-color: var(--defaultLight);
          display: flex;
          flex-direction: column;
          padding: 0.5rem 0px;
          place-items: center;
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
