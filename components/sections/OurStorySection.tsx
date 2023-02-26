// define Our Story section
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

/* type OurStorySectionProps = {
  data: Array<Lyric>;
}; */

export const OurStorySection = () => {
  const employees = [
    {
      id: "1",
      title: "Ron",
      content: "",
    },
    { id: "2", title: "Dave", content: "" },
    { id: "3", title: "Trish", content: "" },
  ];
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
          content="Woke up one morning and the toilet was blocked."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="We got tired of the nasty early morning surprises."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="So we decided to do something about it!, by starting a specialist domestic sewage system testing service."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Business was booming, so we hired Mark Hatherly to build us a web-site. We're so glad we did!"
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Mark's a great web dev, and  fantastic to work with! Firstly, he's a great guy. We get along really well: Mark's lived all over the world, met and worked with all kinds of different people, and it shows."
          color="var(--defaultFontColor)"
        />

        {employees.map(({ id, ...other }) => {
          return (
            <div className="col-8" key={id}>
              {other.title}
            </div>
          );
        })}
      </section>

      <style jsx>{`
        .ourStorySection {
        }
      `}</style>
    </>
  );
};
