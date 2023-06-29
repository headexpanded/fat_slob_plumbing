// define Franchises Section properties
import Image from "next/image";
import { Typography } from "../typography";
import { Spacer } from "./Spacer";
import trishPhoto from "../../assets/img/trishPhoto.png";
import { Cards } from "../cards";
import { ServicesCard } from "../cards/ServicesCard";

type FranchisesSectionProps = {};

export const FranchisesSection = () => {
  return (
    <>
      <section id="franchisesSection" className="franchisesSection">
        <Spacer />
        <div className="franchisesTitle">
          <Typography.SectionTitle
            content="Buy A Franchise"
            color="var(--defaultLight)"
          />
        </div>
        <Typography.SubHeader
          content="Can YOU deliver on demand?"
          color="var(--defaultLight)"
        />
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
            <Typography.ParaL
              content="Be your own boss."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="Get out and about."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="Make people happy."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="We're looking for people who can deliver value."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="People who can fill a bowl."
              color=""
              fontWeight="900"
            />
            <Typography.ParaL
              content="Any time, any place."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="Does that sound like you?"
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="Buy a Fat Slob Plumbing franchise today!"
              color="var(--defaultLight)"
              fontWeight="900"
            />
          </div>
        </div>
        <Spacer />

        <div className="phoneTrish">
          <Typography.SubHeader
            content="Contact Trish, our friendly sales rep!"
            color="var(--defaultLight)"
          />
        </div>
        <Spacer />
        {/* <div className="mapImage"><Cards.ServicesCard title= "London" price = "23,000"/></div> */}
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
          padding-left: 20px;
          max-width: 90%;
        }

        @media screen and (min-width: 640px) {
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

        @media screen and (min-width: 1028px) {
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
