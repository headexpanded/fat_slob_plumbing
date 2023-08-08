// define Our Story section
import { SectionTitle, ParaC } from '../typography';
import { Spacer } from '../utils/Spacer';

export const OurStorySection = () => {
  return (
    <>
      <section id="ourStorySection" className="ourStorySection">
        <Spacer />
        <SectionTitle content="Our Story" />
        <div className="ourStoryText">
          <ParaC
            content="This is not a real business."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <ParaC
            content=" It's a site I made to practice CSS & React."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaC
            content="I had three main goals:"
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <ParaC
          content="No CSS Framework"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <ParaC
            content="1/ design & build an entire responsive site with pure CSS."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <ParaC
            content="(no Tailwind, no Bootstrap)"
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <ParaC
          content="Re-usable Code"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <ParaC
            content="2/ build stuff I can copy from here & paste into another project."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <ParaC
            content="(typography, spacers, loaders, etc.)"
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <ParaC
          content="Have A Laugh"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <ParaC
            content="3/ Write some tight, rain-making copy."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <div className="ourStoryText">
          <ParaC
            content="You're only young once, but you can be immature forever."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <ParaC
          content="More To Do"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <ParaC
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
