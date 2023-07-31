// define Our Story section
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';

export const OurStorySection = () => {
  return (
    <>
      <section id="ourStorySection" className="ourStorySection">
        <Spacer />
        <Typography.SectionTitle content="Our Story" />

        <div className="ourStoryText">
          <Typography.ParaL content="This is not actually a real business." />
          <Typography.ParaL content="It's just a site I made for my teenage son and his friends." />
          <Typography.ParaL content="And yes, they think it's funny." />
        </div>

        <Typography.ParaC
          content="No CSS Framework"
          fontSize="3rem"
          fontWeight="900"
        />
        <Spacer />
        <div className="ourStoryText">
          <Typography.ParaL content="I had three main goals. First, to write pure CSS without using a framework such as Tailwind or Bootstrap." />
          <Typography.ParaL content="I wanted to see how much I could do writing the CSS myself (that's why there are still a few niggly little things to fix up)." />
        </div>
        <Spacer />

        <Typography.ParaC
          content="Cascading Styles"
          fontSize="3rem"
          fontWeight="900"
        />
        <Spacer />
        <div className="ourStoryText">
          <Typography.ParaL content="Secondly, to make the CSS cascade down through the HTML elements and match the semantics." />
          <Typography.ParaL content="For example, set default styles for the html <section> element, then override as necessary." />
        </div>
        <Spacer />

        <Typography.ParaC
          content="Custom Functions"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaL content="Thirdly, to use custom functions like min(), max(), calc(), and clamp() for the responsive design, instead of media queries (where it made sense to do so)." />
        </div>
        <Spacer />

        <Typography.ParaC
          content="More To Do"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaL content="I'd like to use CSS modules instead of a single global style sheet, but for this site I'm not sure it's worth it" />
          <Typography.ParaL content="Also, CSS layers would be fun to learn, so maybe I'll do that sooner or later." />
        </div>
        <Spacer />
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
