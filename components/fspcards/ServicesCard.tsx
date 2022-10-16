import { Typography } from "../typography";

// define ServicesCard properties
type ServicesCardProps = {
    content: string;
    price: string;
    title: string;
}

// define ServicesCard component
export const ServicesCard =({title, content, price}:ServicesCardProps) =>{
    return (
        <>
        <div className="px-1 mt-1 mb-1 servicesCard">
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h2>{title}</h2>
                        <Typography.ParagraphL content="The night before your appointment, we will consume:"/>
                        <div className="servicesInfo">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container d-flex flex-row align-items-center justify-content-center">
            <div className="row align-items-baseline justify-content-center">
                <div className="col p-0 m-0">
                    <Typography.SubHeader content ="ONLY"/>
                </div>
                <div className="col p-0">
                    <Typography.SectionTitle content = {price}/>
                </div>
            </div>
        </div>
        </div>
        <style jsx>{`
            .servicesCard{
                background-color:var(--hintOfBrown);
                border: 2px solid var(--solidBrown);
                border-radius: 10px;
                min-height: 400px;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            .servicesCard h2, p {
                color: var(--solidBrown);
                padding: 6px;
                
            }

            .servicesCard h2 {
                font-size: 2 rem;
                font-weight:bold;
                text-align: center;
            }
            
            .servicesCard p {
                font-size: 1.25rem
                margin: 0 0 1rem 0;
                
            }

            .servicesInfo{
                min-height:360px;
            }
        
        `}</style>
        </>
    );
}