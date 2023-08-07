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
            content="I had three main goals:"
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="No CSS Framework"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="Firstly, to write responsive CSS without using a framework such as Tailwind or Bootstrap."
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
          content="Re-usable Code"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="Secondly, to write components which I can copy from here & paste into another project."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content="For example, typography, spacers, loaders, etc."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="Have A Laugh"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="And thirdly, to write some tight copy for a business which might be quite difficult to promote in real life."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="More To Do"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="E-commerce: the world needs Fat Slob Plumbing hoodies"
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Spacer />
      </section>

      <style jsx>{`
        .ourStoryText {
          display: flex;
          flex-direction: column;
          inline-size: 72vw;
          place-items: center;
        }
      `}</style>
    </>
  );
};
