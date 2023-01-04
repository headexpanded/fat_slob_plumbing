type HeroTextAnimationProps = {};

export const HeroTextAnimation = () => {
  const HeroText = "Stress Testing Domestic Sewage Systems since 2013".split(
    ""
    );
    console.log(HeroText);
  return (
    <>
      <div>
        {HeroText.map((text, index) => (
          <span className="byLine" key={index}>
            {text}
          </span>
        ))}
      </div>
      <style jsx>{`
        .byLine {
          animation-name: byLineAnimation;
          animation-delay: 1s;
          animation-duration: 0.25s;
          animation-fill-mode: both;
          animation-iteration-count: 1;
          animation-timing-function: linear;
          color: var(--defaultLight);
          // display: inline-block;
          font-size: clamp(.5rem, 20vw, 1.2rem);
          font-weight: 700;
          margin-top: 1rem;
          opacity: 0;
          text-align: center;
          text-transform: uppercase;
        }

        @keyframes byLineAnimation {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

/* const animation = keyframes`
0% {opacity:0; }
50% {opacity:.5;}
100% {opacity:1;}
`; */
