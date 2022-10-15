// define properties of Italic texts
// color may change when palette is finalised.

// define Italic type properties
type SubHeaderProps = {
    content: string;
    color?: "#804D00";
}

// define Italic component. Use for sub-title slogans, customer reviews
export const SubHeader =({content, color="#804D00"}:SubHeaderProps) => {
    return(
        <style jsx>{`
        p {
            color: ${color??"#804D00"};
            font-size: 20px;
            text-align: center;
            font-style: italic;
        }
        `}</style>
    )
}