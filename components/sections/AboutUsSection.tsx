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
      <div className="aboutUs">
        <div className="aboutUsTitle">
          <Typography.SectionTitle
            content="About Us"
            color="var(--solidBrown)"
          />
        </div>
      </div>
      <style jsx>{`
        .aboutUs {
          background-color: var(--hintOfBrown);
          padding: 40px 0px 20px 0px;
          min-height: 100vh;
        }

        .aboutUsTitle {
          padding: 0px 0px 40px 0px;
        }
      `}</style>
    </>
  );
};
