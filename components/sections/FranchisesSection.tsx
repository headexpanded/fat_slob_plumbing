// define Franchises Section properties
import Image from 'next/image';
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';
import trishPhoto from '../../assets/img/trishPhoto.png';
import { size } from '../../styles/breakpoints';

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
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
            <Typography.ParaL
              content="People who can fill a bowl."
              color="var(--clr-text-primary)"
            />
            <Typography.ParaL content="Any time, any place." />
            <Typography.ParaL content="Does that sound like you?" />
            <Typography.ParaL content="Buy a Fat Slob Plumbing franchise today!" />
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
          }
          .phoneTrish {
            grid-column: 1/2;
            grid-row: 2;
            width: clamp(320px, 90vw, 960px);
          }
        }
      `}</style>
    </>
  );
};
