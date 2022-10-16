// define properties of Italic texts
// color may change when palette is finalised.

// define Italic type properties
type SubHeaderProps = {
    content: string;
    color?: "#be9b0c";
}

// define Italic component. Use for sub-title slogans, customer reviews
export const SubHeader =({content}:SubHeaderProps) => {
    return(
        <>
        <h4>{content}</h4>
        <style jsx>{`
        h4 {
            color: var(--lemonCurry);
            font-size: 20px;
            text-align: center;
            font-style: italic;
            padding: 16px;
        }
        `}</style>
        </>
    )
}