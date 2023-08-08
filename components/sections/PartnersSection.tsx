// define Partners section

import { Cards } from '../cards';
import { SectionTitle } from '../typography';
import { Spacer } from '../utils';
import { size } from '../../styles/breakpoints';

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
        <SectionTitle
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
          gap: 1rem;
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

        @media screen and (min-width: ${size.mobile}) {
          .partnersSection ::-webkit-scrollbar-track {
            background-color: var(--clr-bg-light);
            border-radius: var(--borderRadius);
          }

          .partnersSection ::-webkit-scrollbar-thumb {
            background-color: var(--clr-bg-secondary);
            border-radius: var(--borderRadius);
            border: 0.05rem solid var(--clr-bg-light);
          }

          /* Firefox scrollbar styles: shows vertical too, but can't be helped */
          @supports (
            scrollbar-width: var(--clr-bg-secondary) var(--clr-bg-light)
          ) {
            .partnersSection {
              scrollbar-color: var(--clr-bg-secondary) var(--clr-bg-light);
              scrollbar-width: thin;
            }
          }
          .partnerCards {
            gap: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};
