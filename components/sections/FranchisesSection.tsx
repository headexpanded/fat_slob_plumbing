// define Franchises Section properties
import { Typography } from "../typography";
import { FSPForm } from "../cards/FSPForm";

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
  return (
    <>
      <section className="franchisesSection">
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Franchises Available Now!"
            color="var(--solidBrown)"
          />
        </div>

        <FSPForm></FSPForm>
      </section>

      <style jsx>{`
        .franchisesSection {
          height: 100vh;
        }
        .franchisesTitle {
        }
      `}</style>
    </>
  );
};
