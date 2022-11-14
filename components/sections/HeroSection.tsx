// define Intro Section properties
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { HeroTextAnimation } from "../animations/HeroTextAnimation";

type HeroSectionProps = {};

export const HeroSection = () => {
  return (
    <>
      <section className="heroSection">
        <Container>
          <Row>
            <Col>
              <Typography.Title content="Fat Slob Plumbing" />
            </Col>
          </Row>
          <Row>
            <Col>
              <HeroTextAnimation></HeroTextAnimation>
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography.Hero
                content="can your lav flush a big load?"
                color="var(--solidBrown)"
              />
            </Col>
          </Row>

          <Row className="justify-content-center p-5">
            <Col xs={6}>
              <Button variant="outline-secondary">MAKE A BOOKING</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .heroSection {
          background-image: linear-gradient(
            180deg,
            var(--hintOfBrown),
            var(--coffee)
          );
          margin-bottom: 0px;
          min-height: 100vh;
          padding: 120px 0px 0px 0px;
          position: relative;
          text-align: center;
        }
      `}</style>
    </>
  );
};
