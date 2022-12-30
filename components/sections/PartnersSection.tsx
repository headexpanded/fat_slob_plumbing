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
        <div className="partnersTitle">
          <Typography.SectionTitle
            content="Our Valued Partners"
            color="var(--defaultFontColor)"
          />
        </div>
        <div className="partnerCards">
          <div>
            <div>
              {/*  extract key from Partners, spread the rest into PartnerCard component */}

              {data.map(({ id, ...other }) => {
                return (
                  <div key={id}>
                    <Cards.PartnerCard {...other} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .partnersSection {
          
        }

        .partnersTitle {
        }
      `}</style>
    </>
  );
};
