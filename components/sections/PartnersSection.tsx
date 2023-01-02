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
              <div className="cardWrapper" key={id}>
                <Cards.PartnerCard {...other} />
              </div>
            );
          })}
        </div>
      </section>
      <style jsx>{`
        .partnerCards {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        @media screen and (min-width: 768px) {
          .partnerCards {
            flex-direction: row;
            flex-grow: 1;
            justify-content: space-evenly;
          }
        }

        
      `}</style>
    </>
  );
};
