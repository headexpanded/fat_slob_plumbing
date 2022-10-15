
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
        <div className="col-sm px-5 mt-1 mb-1 servicesCard"><h2>{title}</h2><p>{content}</p><h2>{price}</h2></div>
        <style jsx>{`
            .servicesCard{
                background-color:#CCB209;
                border: 2px solid #804D00;
                border-radius: 10px;
                min-height: 400px;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            .servicesCard h2, p {
                color: #804d00;
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
        
        `}</style>
        </>
    );
}