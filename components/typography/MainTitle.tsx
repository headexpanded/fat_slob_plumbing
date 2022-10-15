// define properties of Main Title
// color is black until project color palette is determined

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
                font-size: 3rem;
                color: ${color??"#804D00"}
                padding:12px;
                margin-top:12px;
            }
        `}</style>
        </>
    );
};