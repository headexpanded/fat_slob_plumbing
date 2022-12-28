// define Services section

import { Cards } from "../cards";
import { Typography } from "../typography";

export type FoodAndDrink = {
  edible: string;
  price: string;
  title: string;
  id: string;
};

type ServicesSectionProps = {
  data: FoodAndDrink[];
};

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  console.log("Food and Drinks " + data);
  return (
    <>
      <section id="services" className="servicesSection">
        <div className="servicesTitle">
          <Typography.SectionTitle
            content="Choose Your Service Level"
            color="var(--solidBrown)"
          />
        </div>

        {/* {data.map(({ id, ...other }) => {
              return (
                <div className="col-lg" key={id}>
                  <Cards.ServicesCard {...other} />
                </div>
              );
            })} */}
      </section>
      <style jsx>{`
        .servicesSection {
          background-color: var(--coffee);
          color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 40px 0px;
        }
        .prodCards {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          padding: 40px 0px;
        }
      `}</style>
    </>
  );
};
