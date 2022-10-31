// define Franchises Section properties
import { Typography } from "../typography";

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
  return (
    <>
      <section id="franchises" className="franchisesSection">
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Franchises Available Now!"
            color="var(--solidBrown)"
          />
          ;
        </div>
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
