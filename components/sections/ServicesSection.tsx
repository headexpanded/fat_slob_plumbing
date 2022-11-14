// define div to hold Services Cards
import { Cards } from "../cards";
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const ServicesSection = () => {
  const serviceCards = [
    {
      key: "1",
      title: "Regular",
      nightBeforeContent:
        "4x pints lager, 1x chicken vindaloo, 1x large bowl spicy cabbage soup.",
      price: "\u00a3199.95",
    },
    {
      key: "2",
      title: "Strong",
      nightBeforeContent:
        "All   Regular items, PLUS 2x pints lager, 2x rogan josh, 2x chili kebabs (w/ extra hot sauce), 1x pint Ron's homebrew.",
      price: "\u00a3299.95",
    },
    {
      key: "3",
      title: "Explosive",
      nightBeforeContent:
        "All Regular & Strong items, PLUS 2x pints lager, 2x pints Ron's homebrew, 2x Moong Dhal, 1x 350g jar Sauerkraut, 500ml prune juice",
      price: "\u00a3399.95",
    },
  ];
  return (
    <>
      {/*  extract key from serviceCards, spread the rest into card component */}
      <section className="servicesSection">
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
        .servicesTitle {
          padding: 0px 0px 0px 0px;
        }
      `}</style>
    </>
  );
};
