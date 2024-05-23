n// define Our Story section
import { SectionTitle, ParaC } from '@typography/index';
import { Spacer } from '@utils/index';

export const OurStorySection = () => {
  return (
    <>
      <section id="ourStorySection" className="ourStorySection">
        <Spacer />
        <SectionTitle content="Our Story" />
        <div className="ourStoryText">
          <ParaC
            content="Chatting at the pub one day, Ron & Dave agreed that most people don't test their toilets properly."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaC
            content="The landlord of The King's Seat confirmed he had NEVER had the pub's toilets tested. Not professionally, that is."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaC
            content="Indeed, NONE of their friends or work-mates had EVER hired a professional toilet tester!"
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaC
            content="Ron & Dave realised they could provide that service."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        
        <ParaC
          content="Personalised Toilet Tests"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <ParaC
            content="The market is huge! Millions of un-tested toilets!"
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
