
import { GainsImg } from "../cardComponents/shared/imgSec";
import { GainsLi } from "../cardComponents/shared/questions";
import { GainsTitle } from "../cardComponents/shared/titles";

function FinancGains() {
   
    return(
        <>
          <section>
          <div className="section-padding">
                <div className="container">
                    <div className="gains-main-count">
                        <div className="gains-left">
                            <GainsImg />                       
                        </div>        
                        <div className="gains-right">
                            <GainsTitle 
                                 hTitle={"Gain a deep insights into your financial health"}
                                 para={"Gain deep insights into your financial health with our advanced analytics tools. Track your spending patterns, identify trends, and visualize your financial data through interactive."}     
                            />
                            <GainsLi />
                         </div>                        
                     </div>
                 </div>
           </div>
          </section>          
        </>
    )
}

export default FinancGains;