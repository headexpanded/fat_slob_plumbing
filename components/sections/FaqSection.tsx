import { useState } from "react";
import { Spacer, Button, CalendarButton } from "@utils/index";
import { SectionTitle, ParaC, ParaL } from "@typography/index";

export const FaqSection = () => {
  const [showBookingsDiv, setShowBookingsDiv] = useState(false);
  return (
    <>
      <section id="faqSection" className="faqSection">
        <Spacer />
        <SectionTitle content="F.A.Q" />
        <div className="faqText">
          <ParaL
            color="var(--clr-text-primary)"
            content="Do you bring your own toilet paper?"
            fontSize="1.5rem"
            fontWeight="900"
          />

          <ParaC
            content="Yes! But we might run out so you should have a good supply handy."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaL
            color="var(--clr-text-primary)"
            content="What are your working hours?"
            fontSize="1.5rem"
            fontWeight="900"
          />

          <ParaC
            content="Between 8 and 10 in the morning is best."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaL
            color="var(--clr-text-primary)"
            content="Do you work on weekends?"
            fontSize="1.5rem"
            fontWeight="900"
          />

          <ParaC
            content="Yes! But there's a 50% surcharge on our normal price."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaL
            color="var(--clr-text-primary)"
            content="Do you clean up after yourselves?"
            fontSize="1.5rem"
            fontWeight="900"
          />

          <ParaC content="No." fontSize="1.5rem" fontWeight="700" />

          <ParaL
            color="var(--clr-text-primary)"
            content="What if I need the lav while you're working?"
            fontSize="1.5rem"
            fontWeight="900"
          />

          <ParaC
            content="You'll have to wait, or go round to the neighbour's."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <ParaL
            color="var(--clr-text-primary)"
            content="Is your 'block rate' a pricing strategy?"
            fontSize="1.5rem"
            fontWeight="900"
          />

          <ParaC
            content="No, the 'block rate' is how many toilets we block up as a percentage of toilets we test. Our block rate has been above 90% every year since 2013."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <div className="buttonWrapper">
          {!showBookingsDiv ? (
            <div className="heroButtons">
              <Button
                btnText="BOOK NOW"
                onClick={() => setShowBookingsDiv(true)}
              />
            </div>
          ) : (
            <div className="calendarBlocked animated fadeInUp">
              <ParaC
                content="Sorry mate. We're completely blocked up."
                color="var(--clr-text-light)"
              />
              <CalendarButton
                btnText="CLOSE"
                onClick={() => setShowBookingsDiv(false)}
              />
            </div>
          )}
        </div>
        <Spacer />
      </section>

      <style jsx>{`
        .faqText {
          display: flex;
          flex-direction: column;
          inline-size: 72vw;
          place-items: center;
        }

        .buttonWrapper {
          margin-top: 20px;
        }

        .heroButtons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .calendarBlocked {
          align-items: center;
          background: var(--clr-bg-secondary);
          border-radius: var(--borderRadius);
          display: flex;
          flex-direction: column;
          height: auto;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
          padding: 1.5rem;
          width: 80vw;
          z-index: 1000;
          position: fixed;
          top: 40%;
          left: 10%;
          transform: translateX(-50%);
        }

        .calendarBlocked > p {
          width: calc(100% - 2rem);
        }
      `}</style>
    </>
  );
};
