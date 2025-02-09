// define Franchises Section properties
import { useState, Suspense } from "react";
import Image from "next/image";

import { SectionTitle, SubHeader, ParaL } from "@typography/index";
import { Spacer, Button, Spinner } from "@utils/index";
import { size } from "@styles/breakpoints";
import trishPhoto from "@assets/img/trishPhoto-cr.png";
import LocationMapModal from "@modals/LocationMapModal";

export type Franchise = {
  locationName: string;
  desc: string;
  price: string;
  latitude: number;
  longitude: number;
};

export const FranchisesSection = () => {
  const [showLocations, setShowLocations] = useState(false);

  const dataURL = process.env.NEXT_PUBLIC_BLURDATA_URL;

  return (
    <>
      <section id="franchisesSection" className="franchisesSection">
        <Spacer />
        <SectionTitle
          content="Buy A Franchise"
          color="var(--clr-text-primary)"
        />
        <SubHeader content="Can YOU deliver on demand?" />
        <Spacer />
        <div className="franchiseImageAndTextBlock">
          <div className="franchiseText">
            <ParaL content="We're looking for people who can deliver value." />
            <ParaL content="People who can fill a bowl." />
            <ParaL content="Any time, any place." />
            <ParaL
              content="Does that sound like you?"
              color="var(--clr-text-primary)"
            />
            <ParaL content="Buy a Fat Slob Plumbing franchise today!" />
            <div className="locations">
              {!showLocations ? (
                <div className="locationButton">
                  <Spacer />
                  <Button
                    btnText="LOCATIONS"
                    onClick={() => setShowLocations(true)}
                  />
                </div>
              ) : (
                <LocationMapModal onClose={() => setShowLocations(false)} />
              )}
            </div>
          </div>
          <div className="trish">
            <Suspense fallback={<Spinner />}>
              <Image
                alt="Photo of Fat Slob Plumbing secretary"
                src={trishPhoto}
                width={5184}
                height={3456}
                loading="lazy"
              />
            </Suspense>
          </div>
        </div>
        <Spacer />
        <div className="phoneTrish">
          <SubHeader content="Contact Trish, our friendly sales rep!" />
        </div>
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
            grid-template-areas: "trish text";
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
