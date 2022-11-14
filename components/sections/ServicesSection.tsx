// define Services section
import { createContext } from "react";
import { Cards } from "../cards";
import { ProductCard } from "../cards/ProductCard";
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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

        <Container>
          <Row className="gap-3">
            {serviceCards.map(({ key, ...other }) => {
              return (
                <div className="col-lg" key={key}>
                  <Cards.ServicesCard {...other} />
                </div>
              );
            })}
          </Row>
        </Container>
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
