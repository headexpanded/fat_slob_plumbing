// define Our Story section
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

export const OurStorySection = () => {
  
  return (
    <>
      <section id="ourStorySection" className="ourStorySection">
        <Spacer />
        <div className="ourStoryTitle">
          <Typography.SectionTitle
            content="Our Story"
            color="var(--defaultFontColor)"
          />
        </div>

        <Typography.ParaL
          content="This is not actually a real business..."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="It's just a site I made for my teenage son and his friends."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="And yes, they think it's funny."
          color="var(--defaultFontColor)"
        />

        <Spacer />

        <Typography.ParaC
          content="Pure CSS"
          color="var(--defaultLight)"
          fontSize="3rem"
          fontWeight="900"
        />

        <Spacer />

        <Typography.ParaL
          content="For the styling, I had three main objectives:"
          color="var(--defaultFontColor)"
        />

        <Typography.ParaC
          content="No Framework"
          color="var(--defaultLight)"
          fontSize="3rem"
          fontWeight="900"
        />

        <Typography.ParaL
          content="First, to write pure CSS without using a framework such as Tailwind or Bootstrap."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="I wanted to see how much I could do writing the CSS myself (that's why there are still a few niggly little things to fix up)."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaC
          content="Cascading Styles"
          color="var(--defaultLight)"
          fontSize="3rem"
          fontWeight="900"
        />

        <Typography.ParaL
          content="Secondly, to make the CSS cascade down through the HTML elements and match the semantics."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="For example, set default styles for the html <section> element, then override as necessary."
          color="var(--defaultFontColor)"
        />

        <Spacer />

        <Typography.ParaC
          content="Custom Functions"
          color="var(--defaultLight)"
          fontSize="3rem"
          fontWeight="900"
        />

        <Typography.ParaL
          content="Thirdly, to use custom functions like min(), max(), calc(), and clamp() instead of media queries where it made sense to do so."
          color="var(--defaultFontColor)"
        />

        <Spacer />

        <Typography.ParaC
          content="More To Do"
          color="var(--defaultLight)"
          fontSize="3rem"
          fontWeight="900"
        />

        <Typography.ParaL
          content="I'd like to use CSS modules instead of a single global style sheet, but for this site I'm not sure it's worth it"
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Also, CSS layers would be fun to learn, so maybe I'll do that sooner or later."
          color="var(--defaultFontColor)"
        />

        <Spacer />

      </section>

      <style jsx>{`
        .ourStorySection {
        }
      `}</style>
    </>
  );
};
