// define properties of paragraph texts
// color is #804D00 until project color palette is finalised

// define Paragraph type properties
type ParagraphProps ={
    content: string;
    color?: "#804D00";
}

// define Paragraph component
export const Paragraph =({content, color="#804D00"}:ParagraphProps) =>{
    return (
        <>
        <p>{content}</p>
        <style jsx>{`
            p {
                color: ${color??"#804D00"};
                font-size: 1.25rem;
                text-align: left;
            }
        `}</style>
        </>
    )
}