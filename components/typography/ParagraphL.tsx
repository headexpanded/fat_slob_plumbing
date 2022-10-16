// define properties of paragraph texts

// define Paragraph type properties
type ParagraphLProps ={
    content: string;
    color: string;
}

// define Paragraph component
export const ParagraphL =({content, color}:ParagraphLProps) =>{
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