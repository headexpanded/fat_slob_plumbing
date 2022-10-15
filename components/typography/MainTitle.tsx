// define properties of Main Title
// color is white until project color palette is finalised

//  define MainTitle type properties
type MainTitleProps = {
    content: string;
    color?: "white";
}

// define MainTitle component
export const MainTitle =({content, color="white"}:MainTitleProps) =>{
    return (
        <>
        <h1>{content}</h1>
        <style jsx>{`
            h1{
                color: ${color??"white"}
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