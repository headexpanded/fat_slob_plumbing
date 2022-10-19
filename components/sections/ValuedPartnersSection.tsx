// define About Us section
import { Typography } from "../typography";

type AboutUsSectionProps = {};

export const ValuedPartnersSection = () => {
  return (
    <>
      <div className="valuedPartners">
        <div className="valuedPartnersTitle">
          <Typography.SectionTitle
            content="Our Valued Partners"
            color="var(--solidBrown)"
          />
        </div>
      </div>
      <style jsx>{`
        .valuedPartners {
          background-color: var(--coffee);
          padding: 40px 0px 20px 0px;
          min-height: 100vh;
        }

        .valuedPartnersTitle {
          padding: 0px 0px 40px 0px;
        }
      `}</style>
    </>
  );
};
