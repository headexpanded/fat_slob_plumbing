// define properties of paragraph texts
// color is white until project color palette is determined

// define Paragraph type properties
type ParagraphProps ={
    content: string;
    color?: "white"
}

// define Paragraph component
export const Paragraph =({content, color="white"}:ParagraphProps) =>{
    return (
        <>
        <p>{content}</p>
        <style jsx>{`
            p {
                color: ${color??"white"};
                font-size: 16px;
                padding: 8px;
            }
        `}</style>
        </>
    )
}