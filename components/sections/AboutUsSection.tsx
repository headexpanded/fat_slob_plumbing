// define About Us section
import { Typography } from "../typography";

type AboutUsSectionProps = {};

export const AboutUsSection = () => {
  const employees = [
    {
      key: "1",
      title: "Ron",
      content: "",
    },
    { key: "2", title: "Dave", content: "" },
    { key: "3", title: "Trish", content: "" },
  ];
  return (
    <>
      <section id="about" className="aboutUs">
        <div className="aboutUsTitle">
          <Typography.SectionTitle
            content="About Us"
            color="var(--solidBrown)"
          />
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphC
                content="Our domestic sewage system always blocked up after a good night."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphC
                content="We got tired of the nasty early morning surprises. So we decided to do something about it."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .aboutUs {
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
        }
      `}</style>
    </>
  );
};
