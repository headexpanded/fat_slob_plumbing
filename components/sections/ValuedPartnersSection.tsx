// define About Us section
import { Typography } from "../typography";
import { Cards } from "../cards";


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
          <Typography.SectionTitle content="Our Valued Partners" />
        </div>

        <div className="partnerCards">
          {/*  extract key from ValuedPartners, spread the rest into PartnerCard component */}
          {data?.map(({ id, ...other }) => {
            return (
              <div key={id}>
                <Cards.PartnerCard {...other} />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .valuedPartners {
          // height: 100vh;
        }

        .valuedPartnersTitle {
        }

        .partnerCards {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
