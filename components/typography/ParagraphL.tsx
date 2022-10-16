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
                color: ${color?? "#fefceb"};
                font-size: 1.25rem;
                font-weight: bold;
                text-align: left;
            }
        `}</style>
        </>
    )
}