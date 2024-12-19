import gainsImg from "../../assets/png/financial-gains-img-1.png";
import roundImg from "../../assets/svg/fiancial-gains.svg"

function FinancGains() {
    const fgList = [
        {
            icon:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e29393fb4093350e64e7cd__Checkbox%20base%20(2).svg",
            title:"Monitor investment performance",
        },
        {
            icon:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e29393fb4093350e64e7cd__Checkbox%20base%20(2).svg",
            title:"Visualize your financial data",
        },
        {
            icon:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e29393fb4093350e64e7cd__Checkbox%20base%20(2).svg",
            title:"Spending patterns and identify trends",
        },
    ]
    return(
        <>
          <section>
          <div className="section-padding">
                <div className="container">
                    <div className="gains-main-count">
                        <div className="gains-left">
                            <div className="gsec-img">
                                <img className="bgImg" src={gainsImg} alt="" />                                
                            </div>    
                            <img className="circleGr" src={roundImg} alt="" />                         
                         </div>                        
                        <div className="gains-right">
                            <div className="gr-heading">
                                <h2>Gain a deep insights into your financial health</h2>  
                             </div>   
                             <div className="gr-para">
                                <p>
                                Gain deep insights into your financial health with our advanced analytics tools. Track your spending patterns, identify trends, and visualize your financial data through interactive.
                                </p>
                             </div>
                             <div className="gr-list">
                                <ul>
                                    {fgList.map((value) =>{
                                        return(
                                            <>
                                            <li><img src={value.icon} alt="" /><p>{value.title}</p></li>
                                            </>
                                        )
                                    })}
                                </ul>
                             </div>
                         </div>                        
                     </div>
                 </div>
           </div>
          </section>          
        </>
    )
}

export default FinancGains;