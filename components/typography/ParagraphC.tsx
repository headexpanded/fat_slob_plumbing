// define properties of paragraph texts
// color is #804D00 until project color palette is finalised

// define Paragraph type properties
type ParagraphCProps ={
    content: string;
    color?: "#804D00" | "black";
}

// define Paragraph component
export const ParagraphC =({content, color="#804D00"}:ParagraphCProps) =>{
    return (
        <>
        <p>{content}</p>
        <style jsx>{`
            p {
                color: ${color??"#804D00"};
                font-size: 1.25rem;
                text-align: center;
            }
        `}</style>
        </>
    )
}