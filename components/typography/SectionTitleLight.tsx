// define properties of Section Title Light text

// define Section Title Light type properties
type SectionTitleLightProps = {
    content: string;
}

export const SectionTitleLight = ({content}:SectionTitleLightProps) => {
    return (
        <>
        <h2>{content}</h2>
        <style jsx>{`
            h2 {
                color: var(--hintOfBrown);
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
