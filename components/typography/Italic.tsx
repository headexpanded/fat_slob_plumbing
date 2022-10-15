// define properties of Italic texts

// define Italic type properties
type ItalicProps = {
    content: string;
    color?: "#804D00";
}

// define Italic component. Used for sub-title slogans, customer reviews
export const Italic =({content, color="#804D00"}:ItalicProps) => {
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