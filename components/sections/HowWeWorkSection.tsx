// define How We Work Section
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type HowWeWorkSectionProps = {};

export const HowWeWorkSection = () => {
  return (
    <>
      <section className="howWeWorkSection">
        <div className="howWeWorkTitle">
          <Typography.SectionTitle
            content="How We Work"
            color="var(--solidBrown)"
          />
        </div>
        <Container>
          <Row>
            <Col>
              <Typography.ParaL
                content="We're experts in
                        stress-testing domestic sewage systems."
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Typography.ParaL
                content="Our experienced
                        professionals come to your home in the morning."
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography.ParaL
                content="By the time we
                        leave, you'll know for sure if your
                        system can take it - or not!"
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
        </Container>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParaL
                content="The night before your appointment, 
                    your Fat Slob Plumber ingests a carefully formulated blend of food and drink to ensure optimal performance."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParaL
                content=" 
                    We also consume a mix of supplementary nutriments on the morning of your appointment - like coffee, cigarettes, & Coke - to make sure there's no waiting around."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParaL
                content="The precise blend and quantity of solids and liquids 
                    consumed by Fat Slob Plumbing depends on the Service Level you choose: see below."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .howWeWorkSection {
          background-color: var(--coffee);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
        }

        .howWeWorkTitle {
        }
      `}</style>
    </>
  );
};
