// define properties of Main Title

//  define MainTitle type properties
type MainTitleProps = {
    content: string;
    color?: "#804D00";
}

// define MainTitle component
export const MainTitle =({content, color="#804D00"}:MainTitleProps) =>{
    return (
        <>
        <h1>{content}</h1>
        <style jsx>{`
            h1{
                font-size: 4rem;
                color: ${color??"#804D00"}
                padding:12px;
                margin-top:8px;
            }
        `}</style>
        </>
    );
};