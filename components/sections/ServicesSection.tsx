// define div to hold Services Cards
import { Cards } from "../cards";
import { Typography } from "../typography";

export type nightBefore = {
  edible: string;
  id: string;
  price?: string;
  title?: string;
};

type ServicesSectionProps = {
  data: Array<nightBefore>;
};

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  return (
    <>
      <section id="services" className="servicesSection">
        <div className="servicesTitle">
          <Typography.SectionTitle
            content="Choose Your Service Level"
            color="var(--solidBrown)"
          />
        </div>

        <div className="container d-flex flex-row align-items-center justify-content-center px-4 pb-2">
          <div className="row gap-3">
            {data?.map(({ id, ...other }) => {
              return (
                <div className="col-lg" key={id}>
                  <Cards.ServicesCard {...other} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        .servicesSection {
          background-color: var(--coffee);
          color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 40px 0px;
        }
        .servicesTitle {
          padding: 0px 0px 0px 0px;
        }
      `}</style>
    </>
  );
};
