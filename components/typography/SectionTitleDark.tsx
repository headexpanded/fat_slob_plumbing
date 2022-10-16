// define properties of Section Title Dark text

// define Section Title Dark type properties
type SectionTitleDarkProps = {
    content: string;
}

export const SectionTitleDark = ({content}:SectionTitleDarkProps) => {
    return (
        <>
        <h2>{content}</h2>
        <style jsx>{`
            h2 {
                color: var(--solidBrown);
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
