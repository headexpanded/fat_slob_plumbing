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

type ParagraphCProps ={
    content: string;
    color: string;
}

// define Paragraph component
export const ParagraphC =({content, color}:ParagraphCProps) =>{
    //  const textColor = color.solidBrown;
    return (
        <>
        <p>{content}</p>
        <style jsx>{`
            p {
                color: ${color??"#804d00"};
                font-size: 1.25rem;
                font-weight: bold;
                text-align: center;
            }
        `}</style>
        </>
    )
}