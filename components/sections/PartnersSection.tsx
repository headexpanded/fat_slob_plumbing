// define About Us section

import { Cards } from '../cards';
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';

export type Partner = {
  title: string;
  id: string;
  desc: string;
  photo: string;
};

type PartnersSectionProps = {
  data: Array<Partner>;
};

export const PartnersSection = ({ data }: PartnersSectionProps) => {
  return (
    <>
      <section id="partnersSection" className="partnersSection">
        <Spacer />
        <Typography.SectionTitle
          content="Our Partners"
          color="var(--clr-text-primary)"
        />

        {/*  extract key from Partners, spread the rest into PartnerCard component */}

        <div className="partnerCards snaps-inline">
          {data.map(({ id, ...other }) => {
            return (
              <div key={id}>
                <Cards.PartnerCard {...other} />
              </div>
            );
          })}
        </div>
      </section>
      <style jsx>{`
        .partnerCards {
          inline-size: min(100% - 4rem, 90rem);
          display: grid;
          grid-auto-flow: column;
          gap: 2.5rem;
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          justify-content: flex-start;
          padding-bottom: 2rem;
        }

        .snaps-inline {
          scroll-snap-type: inline mandatory;
        }

        .snaps-inline > * {
          scroll-snap-align: center;
        }
      `}</style>
    </>
  );
};
