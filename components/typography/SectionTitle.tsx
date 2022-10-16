// define properties of Section Title Dark text

// define Section Title Dark type properties
type SectionTitleProps = {
    content: string;
    color?: string;
}

export const SectionTitle = ({content, color}:SectionTitleProps) => {
    return (
        <>
        <h2>{content}</h2>
        <style jsx>{`
            h2 {
                color: ${color??""};
                font-style: italic;
                font-size: 2rem;
                font-weight: bold;
                line-height: 1.1;
                padding: 24px 4px 12px 4px;
                text-align: center;
            }
        `}</style>
        
        </>
    )
}
