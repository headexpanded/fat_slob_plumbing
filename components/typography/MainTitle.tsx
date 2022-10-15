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
                color:#804D00;
                font-size: 5rem;
                font-weight: bold;
                line-height: 1.1;
                padding: 4px 4px 0px 4px;
                text-align: center;
            }
        `}</style>
        </>
    );
};