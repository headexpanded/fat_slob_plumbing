// define About Us section
import { Typography } from "../typography";
import { Cards } from "../cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export type ValuedPartner = {
  id: string;
  title: string;
  photo: string;
  desc: string;
};

type ValuedPartnerSectionProps = {
  data: Array<ValuedPartner>;
};

export const ValuedPartnersSection = ({ data }: ValuedPartnerSectionProps) => {
  return (
    <>
      <div className="valuedPartners">
        <div className="valuedPartnersTitle">
          <Typography.SectionTitle
            content="Our Valued Partners"
            color="var(--solidBrown)"
          />
        </div>
        <Container>
          <Row className="gap-3">
            {/*  extract key from ValuedPartners, spread the rest into PartnerCard component */}
            {data?.map(({ id, ...other }) => {
              return (
                <div className="col d-flex justify-content-center" key={id}>
                  <Cards.PartnerCard {...other} />
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
      <style jsx>{`
        .valuedPartners {
          background-color: var(--coffee);
          padding: 40px 0px 20px 0px;
          min-height: 100vh;
        }

        .valuedPartnersTitle {
          padding: 0px 0px 40px 0px;
        }
      `}</style>
    </>
  );
};
