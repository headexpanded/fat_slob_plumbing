// define properties of Main Title
// color is #804D00 until project color palette is finalised

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
            h1 {
                color: ${color??"#804D00"};
                font-size: 4rem;
                line-height: 1.15;
                padding:12px;
                margin-top:8px;
                text-align: center;
            }
        `}</style>
        </>
    );
};