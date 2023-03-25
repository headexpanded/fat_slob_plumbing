// define Our Story section
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

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
          content="It was a Saturday morning like any other..."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Ron woke up. Made a pot of tea. Flicked on the radio. And sat down on the toilet."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="He wasn't expecting much - after all, it hadn't been a big night, just the seven pints and two kebabs."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="But ten minutes later, Ron got the surprise of his life. The toilet was blocked! The stupid thing just wouldn't flush it away, no matter how much he pogo'd the scrubbing brush."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Ron tried everything. Boiling water. A litre of bleach. Paint thinner. But nothing worked."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Time was ticking by. Ron would be late for warm-up with the darts team at The King's Seat!"
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Four hours later, Ron finally got the toilet unblocked. Don't ask him how - he was beyond normal consciousness, past the point of psychic truth."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="What's worse, he'd missed opening time, missed the warm-up, and missed his usual morning full English."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Ron raised his eyes to the ceiling and let out an anguished cry of despair! Not just for himself. Not just for the darts team. But for the whole of humanity."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="For Ron had realised that he was not alone... No! Thousands, even millions of innocent people were living their lives at the risk of an unexpected toilet blockage."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="And it was then that Ron found his true calling. In that moment, Ron decided to devote his life to saving humanity from blocked toilets."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="Quickly Ron phoned his mate Dave."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="'Dave!', he said, 'Dave! I've got an idea.'"
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content="And Fat Slob Plumbing was born. The rest is history."
          color="var(--defaultFontColor)"
          fontWeight="700"
        />

        {/* {employees.map(({ id, ...other }) => {
          return (
            <div className="col-8" key={id}>
              {other.title}
            </div>
          );
        })} */}
      </section>

      <style jsx>{`
        .ourStorySection {
        }
      `}</style>
    </>
  );
};
