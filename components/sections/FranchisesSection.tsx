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
          <div className="trish">
            <Image
              alt="Photo of Fat Slob Plumbing secretary"
              src={trishPhoto}
              width={5184}
              height={3456}
              priority
            />
          </div>
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
        </div>
        <Spacer />

        <div className="phoneTrish">
          <Typography.SubHeader
            content="Contact Trish, our friendly sales rep!"
          />
        </div>
        <Spacer />
      </section>

      <style jsx>{`
        .franchisesSection {
        }
        .franchisesTitle {
        }

        .franchiseImageAndTextBlock {
          display: flex;
          flex-direction: column;
          place-items: center;
        }

        .trish,
        .phoneTrish {
          //display: none;
        }

        .franchiseText {
          padding-left: 1.25rem;
          max-width: 90%;
        }

        @media screen and (min-width: ${size.mobile}) {
          .franchiseImageAndTextBlock {
            flex-direction: row;
            justify-content: space-between;
          }
          .trish {
            display: flex;
            width: 50%;
            height: auto;
          }
          .phoneTrish {
            display: flex;
            width: clamp(260px, 88vw + 20px, 680px);
          }
          .franchiseText {
            width: 50%;
          }
        }

        @media screen and (min-width: ${size.desktop}) {
          .franchiseText {
          }
          .trish {
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
};
