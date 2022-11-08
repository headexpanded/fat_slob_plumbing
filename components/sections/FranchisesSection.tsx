// define Franchises Section properties
import { Typography } from "../typography";
import { ProductCard } from "../cards/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
  return (
    <>
      <section id="franchises" className="franchisesSection">
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Franchises Available Now!"
            color="var(--solidBrown)"
          />
        </div>
        <Container className="ps-3">
          <Row>
            <Col>Something goes here.</Col>
            <Col>Something goes here.</Col>
            <Col>Something goes here.</Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .franchisesSection {
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
        }
      `}</style>
    </>
  );
};
