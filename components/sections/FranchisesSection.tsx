// define Franchises Section properties
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
  return (
    <>
      <section className="franchisesSection">
        <Spacer />
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Franchises"
            color="var(--defaultLight)"
          />
        </div>
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
