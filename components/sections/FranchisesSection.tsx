// define Franchises Section properties
import { Typography } from "../typography";
import { ProductCardElements } from "../productCardElements";

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
        </div>
        <div></div>
      </section>

      <style jsx>{`
        .franchisesSection {
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
        }
      `}</style>
    </>
  );
};
