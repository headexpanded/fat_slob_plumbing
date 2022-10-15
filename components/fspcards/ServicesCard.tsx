
// define ServicesCard properties
type ServicesCardProps = {
    content: string;
    title: string;
}

// define ServicesCard component
export const ServicesCard =({title, content}:ServicesCardProps) =>{
    return (
        <>
        <div className="col servicesCard"><h2>{title}</h2><p>{content}</p></div>
        <style jsx>{`
            .servicesCard{
                background-color:#CCB209;
                border: 2px solid #804D00;
                border-radius: 10px;
                height: 300px;
                
                
                
                text-align:left;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            .servicesCard h2, p {
                color: #804d00;
                padding: 6px;
                margin: 0 0 1rem 0;
                
            }

            .servicesCard h2 {
                font-size: 2 rem;
                font-weight:bold;
                text-align: center;
            }
            
            .servicesCard p {
                font-size: 1.25rem
                margin: 0 0 1rem 0;
                padding: 6px;
            }
        
        `}</style>
        </>
    );
}