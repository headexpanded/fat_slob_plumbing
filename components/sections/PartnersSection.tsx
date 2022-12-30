// define About Us section

import { Cards } from "../cards";
import { Typography } from "../typography";

export type Partner = {
  title: string;
  id: string;
  desc: string;
  photo: string;
};

type PartnersSectionProps = {
  data: Array<Partner>;
};

export const PartnersSection = ({ data }: PartnersSectionProps) => {
  return (
    <>
      <section id="partners" className="partnersSection">
        <Typography.SectionTitle
          content="Our Valued Partners"
          color="var(--defaultFontColor)"
        />

        {/*  extract key from Partners, spread the rest into PartnerCard component */}

        <div className="partnerCards">
          {data.map(({ id, ...other }) => {
            return (
              <div className="partnerCard" key={id}>
                <Cards.PartnerCard {...other} />
              </div>
            );
          })}
        </div>
      </section>
      <style jsx>{`
        .partnerCards {
          border: 2px solid red;
          display: flex;
          flex-direction: column;
          place-items: center;
        }

        .partnerCard {
          display: flex;
          flex-direction: column;
          border: 2px solid green;
          border-radius: var(--borderRadius);
          max-width: 400px;
          margin-bottom: 0px;
          place-items: center;
        }

        @media screen and (min-width: 550px) {
          .partnerCards {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
};
