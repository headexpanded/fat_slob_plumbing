// define CustReviewCard properties
type CustReviewCardProps ={
    content:string;
    customer: string;
}

// define CustReviewCard component
export const CustReviewCard=({content, customer}:CustReviewCardProps) => {
    return(
        <>
        <div className="custReviewCard">cust review here</div>
        <style jsx>{`
            
            .custReviewCard {
                border: 2px solid #804d00;
                margin: 1rem;
                max-width: 300px;
                text-align: left;
            }
        .custReviewCard h3 {
            font-size: 3rem;
            font-weight:bold;
        }

        .custReviewCard p {
            font-size: 1.5rem;
            
        }
        
        
        
        `}</style>
        
        
        
        </>
    )
}
