// define properties of paragraph texts
// import {Palette} from "../palette/Palette"
// define Paragraph type properties
// type Palette ={
// hintOfBrown: "#fefceb",
// lagerYellow: "#f5d714",
// solidBrown: "#804d00",
// lemonCurry: "#be9b0c",
//
// }

type ParagraphCProps = {
  content: string;
  color?: string;
};

// define Paragraph component
export const ParagraphC = ({ content, color }: ParagraphCProps) => {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? ""};
          font-size: 1.4rem;
          text-align: center;
          margin: 20px 0px 0px 0px;
        }
      `}</style>
    </>
  );
};
