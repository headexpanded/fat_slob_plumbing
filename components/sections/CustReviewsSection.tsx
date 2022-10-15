// define div to hold Customer Review cards
import {FSPCards} from "../fspcards";
import {Typography} from "../typography";

type CustReviewsSectionProps ={

}

export const CustReviewsSection = () => {
    const custReviews = [
        {key: "1",
        content: "",
        customer:"Bill Skinner"
        },
        {key:"2",
        content: "",
        customer: "Vic Walker"},
    
        {key: "3",
        content: "",
        customer: "Noreen Davis"}
    ]
    return (
        <>
        <section className="custReviewsSection">
            <div className="custReviewsTitle"><Typography.MainTitle content="Customer Reviews"/></div>
            <div className="container px-4">
                <div className="row gap-5">
            {/*  extract key from custReviews, spread the rest into card component */}
                    {custReviews.map(({key, ...other}) =>{
                        return <FSPCards.CustReviewCard key={key} {...other}/>
                    })}
                </div>
            </div>
        </section>

        <style jsx>{`
        .custReviewsSection{
            background-color: #875E04;
            min-height: 500px;

        }
        
        
        
        `}</style>
        
        </>
    )
}