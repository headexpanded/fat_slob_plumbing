// define CustReviewCard properties
type CustReviewCardProps ={
    content:string;
    customer: string;
}

// define CustReviewCard component
export const CustReviewCard=({content, customer}:CustReviewCardProps) => {
    return(
        <>
        <div className="col-lg px-5 mt-1 mb-1 custReviewCard">
            <p>{content}</p>
            <p>- {customer}</p>
        </div>
        <style jsx>{`
            
            .custReviewCard {
                background-color: var(--solidBrown);
                border: 2px solid #CCB209;
                border-radius: 10px;
                height: auto;
                text-align: left;
                transition: color 0.15s ease, border-color 0.15s ease;
            }

            .custReviewCard p {
                color: var(--hintOfBrown);
                font-size: 1.25rem;
                font-style: italic;
                font-weight:bold;
                margin: 1rem 0 1rem 0;

            }
        
        `}</style>
        
        
        
        </>
    )
}
