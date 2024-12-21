export const HeadTitle = () => {
    return(
        <>
        <div className="hl-info">
            <h1>Empowering Your Financial Journey.</h1>
        </div>
        <div>
            <p>Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
         </div>
        </>
    )
}

export const Centertitle = ({ceneterTitle}) => {
    return(
        <>
         <div className="feat-top">
             <h2>{ceneterTitle}</h2>
             <div className="ft-info-p">
                 <p>Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
              </div>                           
         </div>
        </>
    )
}


export const GainsTitle = ({hTitle, para}) =>{
    
    return(
        <>
            <div className="gr-heading">
                <h2>{hTitle}</h2>  
            </div>   
            <div className="gr-para">
                <p>{para}</p>
            </div>
            
            
        </>
    )
}

