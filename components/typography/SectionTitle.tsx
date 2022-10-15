// define properties of Section Title text

// define Section Title type properties
type SectionTitleProps = {
    content: string;
}

export const SectionTitle = ({content}:SectionTitleProps) => {
    return (
        <>
        <h2>{content}</h2>
        <style jsx>{`
            h2 {
                font-style: italic;
                font-size: 2rem;
                font-weight: bold;
                line-height: 1.1;
                padding: 12px 4px 0px 4px;
                text-align: center;
            }
        `}</style>
        
        </>
    )
}
