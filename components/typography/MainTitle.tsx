// define properties of Main Title

//  define MainTitle type properties
type MainTitleProps = {
    content: string;
    color?: "#875e04";
}

// define MainTitle component
export const MainTitle =({content, color="#875e04"}:MainTitleProps) =>{
    return (
        <>
        <h1>{content}</h1>
        <style jsx>{`
            h1{
                color: ${color??"#875e04"}
                font-size: 5rem;
                line-height: 1.15;
                padding:12px;
                margin-top:8px;
                text-align: center;
            }
        `}</style>
        </>
    );
};