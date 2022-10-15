// define CustReviewCard properties
type CustReviewCardProps ={
    content:string;
    customer: string;
}

// define CustReviewCard component
export const CustReviewCard=({content, customer}:CustReviewCardProps) => {
    return(
        <>
        <div className="col px-5 mt-3 mb-5 custReviewCard"><p>{content}</p><p>- {customer}</p></div>
        <style jsx>{`
            
            .custReviewCard {
                border: 2px solid #804d00;
                border-radius: 10px;
                min-height: 300px;
                text-align: left;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            .custReviewCard h2 {
                font-size: 3rem;
                font-weight:bold;
            }

            .custReviewCard p {
                font-size: 1.25rem;
                font-style: italic;

            }
        
        
        
        `}</style>
        
        
        
        </>
    )
}
