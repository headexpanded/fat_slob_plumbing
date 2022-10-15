// define properties of Section Title text

// define Section Title type properties
type SectionTitleProps = {
    content: string;
}

export const SectionTitle = ({content}:SectionTitleProps) => {
    return (
        <>
        <div>{content}</div>
        <style jsx>{`
            h2 {
                font-style: italic;
                font-size: 1.25rem;
                font-weight: bold;
                text-align: center;
            }
        `}</style>
        
        </>
    )
}
