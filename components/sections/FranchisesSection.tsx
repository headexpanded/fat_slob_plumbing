// define Franchises Section properties
import { Typography } from "../typography";

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
  return (
    <>
      <section className="franchisesSection">
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Franchises Available Now!"
            color="var(--defaultFontColor)"
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
