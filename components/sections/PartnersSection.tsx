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
      <section id="partners" className="partners">
        <div className="partnersTitle">
          <Typography.SectionTitle
            content="Our Valued Partners"
            color="var(--solidBrown)"
          />
        </div>
        <div className="partnerCards">
          <div className="container d-flex flex-row align-items-center justify-content-center px-4 pb-2">
            <div className="row  gap-3">
              {/*  extract key from Partners, spread the rest into PartnerCard component */}

              {data?.map(({ id, ...other }) => {
                return (
                  <div className="col-lg" key={id}>
                    <Cards.PartnerCard {...other} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .partners {
          background-color: var(--coffee);
          padding: 40px 0px 40px 0px;
          min-height: 100vh;
        }

        .partnersTitle {
          padding: 0px 0px 40px 0px;
        }
      `}</style>
    </>
  );
};
