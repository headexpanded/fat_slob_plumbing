// define Services section

import { Cards } from "../cards";
import { Typography } from "../typography";

export type nightBefore = {
  edible: string;
  id: string;
  price?: string;
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
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphC
                content="Select the foods and drinks you want your Fat Slob Plumber to consume before coming to your home:"
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-center px-4 pb-2">
          <div className="row gap-3">
            {data?.map(({ id, ...other }) => {
              return (
                <div className="col-lg" key={id}>
                  <Cards.BeforeCard {...other} />
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
      `}</style>
    </>
  );
};
