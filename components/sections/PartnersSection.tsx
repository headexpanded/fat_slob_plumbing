// define About Us section

import { Cards } from "../cards";
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

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
      <section id="partnersSection" className="partnersSection">
        <Spacer />
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
        <Spacer />
      </section>
      <style jsx>{`
        .partnerCards {
          width: 90vw;
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          justify-content: center;
          margin-bottom: 4rem;
          place-items: center;
        }

        @media screen and (min-width: 640px) {
          .partnerCards {
            grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
            flex-grow: 1;
            
          }
        }
      `}</style>
    </>
  );
};
