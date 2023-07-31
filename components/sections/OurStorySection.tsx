// define Our Story section
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';

export const OurStorySection = () => {
  return (
    <>
      <section id="ourStorySection" className="ourStorySection">
        <Typography.SectionTitle content="Our Story" />
        <div className="ourStoryText">
          <Typography.ParaC
            content="This is not actually a real business."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content=" It's just a site I made to practice CSS & React."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <Typography.ParaC
            content="And yes, I think it's funny."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="No CSS Framework"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="I had three main goals. First, to write pure CSS without using a framework such as Tailwind or Bootstrap."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content="I wanted to see how much I could do writing the CSS myself (that's why there are still a few niggly little things to fix up)."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="Cascading Styles"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="Secondly, to make the CSS cascade down through the HTML elements and match the semantics."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content="For example, set default styles for the html <section> element, then override as necessary."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="Custom Functions"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="Thirdly, to use custom functions like min(), max(), calc(), and clamp() for the responsive design, instead of media queries (where it made sense to do so)."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="More To Do"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="I'd like to use CSS modules instead of a single global style sheet, but for this site I'm not sure it's worth it"
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content="Also, CSS layers would be fun to learn, so maybe I'll do that sooner or later."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
      </section>

      <style jsx>{`
        .ourStoryText {
          display: flex;
          flex-direction: column;
          place-items: center;
          width: 90vw;
        }
      `}</style>
    </>
  );
};
