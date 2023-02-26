// define Franchises Section properties
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
  return (
    <>
      <section id="franchisesSection" className="franchisesSection">
        <Spacer />
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Franchises"
            color="var(--defaultLight)"
          />
        </div>
        <Typography.ParaC
          content="Can YOU deliver on demand?"
          color="var(--defaultLight)"
        />
        <Spacer />
        <Typography.ParaL
          content="Be your own boss."
          color=""
          fontWeight="700"
        />
        <Typography.ParaL
          content="Get out and about."
          color=""
          fontWeight="700"
        />
        <Typography.ParaL
          content="Make people happy."
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content="We're looking for people who can deliver value. People who can fill a bowl under any cirumstances. "
          color=""
          fontWeight="700"
        />
      </section>

      <style jsx>{`
        .franchisesSection {
        }
        .franchisesTitle {
        }
      `}</style>
    </>
  );
};
