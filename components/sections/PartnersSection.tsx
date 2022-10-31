// define About Us section
import { Typography } from "../typography";

type PartnersSectionProps = {};

export const PartnersSection = () => {
  return (
    <>
      <section id="partners" className="partners">
        <div className="partnersTitle">
          <Typography.SectionTitle
            content="Our Valued Partners"
            color="var(--solidBrown)"
          />
        </div>
      </section>
      <style jsx>{`
        .partners {
          background-color: var(--coffee);
          padding: 40px 0px 20px 0px;
          min-height: 100vh;
        }

        .partnersTitle {
          padding: 0px 0px 40px 0px;
        }
      `}</style>
    </>
  );
};
