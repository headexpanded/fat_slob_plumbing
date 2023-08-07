// define Franchises Section properties
import Image from 'next/image';
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';
import trishPhoto from '../../assets/img/trishPhoto-cr.png';
import { size } from '../../styles/breakpoints';
import LocationMapModal from '../modals/LocationMapModal';
import { useState } from 'react';

export type Franchise = {
  locationName: string;
  desc: string;
  price: string;
  latitude: number;
  longitude: number;
};

type FranchisesSectionProps = {
  data: Array<Franchise> | undefined;
};

export const FranchisesSection = ({ data }: FranchisesSectionProps) => {
  const [showLocations, setShowLocations] = useState(false);
  return (
    <>
      <section id="franchisesSection" className="franchisesSection">
        <Spacer />
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Buy A Franchise"
            color="var(--clr-text-primary)"
          />
        </div>
        <Typography.SubHeader content="Can YOU deliver on demand?" />
        <Spacer />
        <div className="franchiseImageAndTextBlock">
          <div className="franchiseText">
            <Typography.ParaL content="We're looking for people who can deliver value." />
            <Typography.ParaL content="People who can fill a bowl." />
            <Typography.ParaL content="Any time, any place." />
            <Typography.ParaL
              content="Does that sound like you?"
              color="var(--clr-text-primary)"
            />
            <Typography.ParaL content="Buy a Fat Slob Plumbing franchise today!" />
            <div className="locations">
              {!showLocations ? (
                <div className="locationButton">
                  <Spacer />
                  <button
                    className="button"
                    onClick={() => setShowLocations(true)}
                  >
                    LOCATIONS
                  </button>
                </div>
              ) : (
                <LocationMapModal
                  onClose={() => setShowLocations(false)}
                  data={data}
                />
              )}
            </div>
          </div>

          <div className="trish">
            <Image
              alt="Photo of Fat Slob Plumbing secretary"
              src={trishPhoto}
              width={5184}
              height={3456}
              priority
            />
          </div>
        </div>
        <Spacer />

        <div className="phoneTrish">
          <Typography.SubHeader content="Contact Trish, our friendly sales rep!" />
        </div>
        <Spacer />
      </section>
      <style jsx>{`
        .franchiseImageAndTextBlock {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .trish {
          width: clamp(320px, 90vw, 560px);
        }

        .franchiseText {
          padding: 0 1rem;
        }

        .locationButton {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        // change to grid for larger screens
        @media screen and (min-width: ${size.desktop}) {
          .franchiseImageAndTextBlock {
            display: grid;
            grid-template-areas: 'trish text';
            grid-template-columns: 2fr;
            grid-template-rows: 400px;
          }
          .trish {
            grid-area: trish;
          }
          .franchiseText {
            grid-area: text;
            padding: 0 1rem 0 0;
          }
          .phoneTrish {
            grid-column: 1/2;
            grid-row: 2;
            width: clamp(320px, 90vw, 960px);
          }
          .locationButton {
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
};
