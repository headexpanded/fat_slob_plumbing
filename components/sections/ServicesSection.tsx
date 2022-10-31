// define Services section

import { Cards } from "../cards";
import { Typography } from "../typography";

export type foodAndDrink = {
  edible: string;
  id: string;
};
type ServicesSectionProps = {
  data: Array<foodAndDrink>;
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
                content="Select the foods and drinks your Fat Slob Plumber will consume before visiting your home:"
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-space-between px-4 pb-2">
          <div className="row gap-3">
            <div className="col-lg">
              <Cards.BeforeCard data={data}></Cards.BeforeCard>
            </div>
            <div className="col-lg">
              <Cards.AfterCard></Cards.AfterCard>
            </div>
          </div>
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphC
                content="Included with all selections: air-freshener, toilet paper, reading material."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
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
