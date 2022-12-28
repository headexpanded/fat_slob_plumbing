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
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
        }
        .franchisesTitle {
          padding: 0px 0px 40px 0px;
        }
      `}</style>
    </>
  );
};
