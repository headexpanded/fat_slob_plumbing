// define properties of paragraph texts
// color is black until project color palette is determined

// define Paragraph type properties
type ParagraphProps ={
    content: string;
    color?: "black"
}

// define Paragraph component
export const Paragraph =({content, color="black"}:ParagraphProps) =>{
    return (
        <>
        <p>{content}</p>
        <style jsx>{`
            p {
                color: ${color??"black"};
                font-size: 16px;
                padding: 8px;
            }
        `}</style>
        </>
    )
}