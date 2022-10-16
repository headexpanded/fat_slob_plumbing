// define properties of paragraph texts
// import {Palette} from "../palette/Palette"
// define Paragraph type properties
type Palette ={
    hintOfBrown?: "#fefceb",
    lagerYellow?: "#f5d714",
    solidBrown?: "#804d00" | "blue",
    lemonCurry?: "#be9b0c",

}

type ParagraphCProps ={
    content: string;
    color?: Palette;
}

// define Paragraph component
export const ParagraphC =({content, color}:ParagraphCProps) =>{
    return (
        <>
        <p>{content}</p>
        <style jsx>{`
            p {
                
                color: ${color?.solidBrown};
                font-size: 1.25rem;
                text-align: center;
            }
        `}</style>
        </>
    )
}