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
          content="Our Partners"
          color="var(--defaultLight)"
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
          width: 90vw;
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          justify-content: space-evenly;
          margin-bottom: 4rem;
          place-items: center;
        }

         @media screen and (min-width: 768px) {
          .partnerCards {
            display:flex;
            flex-direction: row;
            flex-grow: 1;
          }
        }
        /* .cardWrapper {
          display: flex;
          flex-direction: column;
        } */
      `}</style>
    </>
  );
};
