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
          <div>
            <Typography.NavLink navLink="#" navLinkName="Back to Top" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .franchisesSection {
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
          position: relative;
        }

        .franchisesTitle {
          padding: 0px 0px 40px 0px;
        }
        .franchisesTitle > div {
          text-align: center;
          margin-top: -100px;
        }
      `}</style>
    </>
  );
};
