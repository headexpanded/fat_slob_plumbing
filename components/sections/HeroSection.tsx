// define Intro Section properties
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Spacer } from "./Spacer";
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
          <Spacer />
          <Row>
            <Col>
              <Typography.Hero content="can" color="var(--solidBrown)" />
              <Typography.HeroEM content="your " color="var(--solidBrown)" />
              <Typography.Hero
                content="lav take a big load?"
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
          <Spacer />
          <Row>
            <Col>
              <Typography.ParaC
                content="Imagine it."
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography.ParaC
                content="Friends visiting - suddenly your lav blocks up."
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography.ParaC
                content="You don't need that."
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography.ParaC
                content="So hire us - we'll stress test it for you!"
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography.ParaC
                content="Not sure? Here's what our customers say..."
                color="var(--solidBrown)"
              />
            </Col>
          </Row>
          <Row className="justify-content-center pt-2 pb-5">
            <Col xs={6} md={3}>
              <Button variant="outline-secondary">MAKE A BOOKING</Button>
            </Col>
            <Col xs={6} md={3}>
              <Button variant="outline-secondary">BUY A FRANCHISE</Button>
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
