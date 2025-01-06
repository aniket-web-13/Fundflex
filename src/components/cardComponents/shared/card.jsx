
import { NavBtn } from "./buttons";
import { BiSolidCheckCircle } from "react-icons/bi";


export function FeatureCard({src,head,para}){
    
    return(
        <>
        <div className="ft-card">
            <div className="ft-card-top">
                <div className="ft-icon">
                    <img src={src} alt="" />
                </div>
                <div className="ft-title">
                   <h2>{head}</h2>
                </div>
            </div> 
            <div className="ft-card-btm">
               <p>{para}</p>
            </div>
        </div>            
        </>
    )
    
}


export function PlanCard() {
  
  const pricingInfo =[
    {
      head:"Starter Plan",      
      price:49,      
      bg:"#E9E1FF"      
    },
    {
      head:"Standard Plan",      
      price:99,
      pop:"Popular",
      bg:"#FFEDE8"      
    },
    {
      head:"Premium Plan",      
      price:179,   
      bg:"#ECFAFF"      
    },
  ]

    return (
      <>
      <div className="plac-count">
          {pricingInfo.map((value , i) => {
            console.log(i);
            return(
              <>
                <div className="price-card" key={i} style={{backgroundColor:value.bg}}>
                    <div className="card-head">
                        <div className="ch-top">
                            <h2>{value.head}</h2>                        
                        </div>                
                        <p>For small companies.</p>
                    </div>
                    <div className="p-card-body">
                        <div className="pcb-top">
                            <div className="ch-top">
                                <small>$</small>
                                <h2>{value.price}</h2>  
                                <h3>USD</h3>                      
                            </div>                
                            <p>For small companies.</p>
                            <div className="hor-p-line"></div>
                        </div>
                        <div className="pcb-mid">
                            <ul>
                              <li><BiSolidCheckCircle style={{fontSize:"24px"}}/><p>Access to basic features</p></li>
                              <li><BiSolidCheckCircle style={{fontSize:"24px"}}/><p>Attend events</p></li>
                              <li><BiSolidCheckCircle style={{fontSize:"24px"}}/><p>Basic reporting + analytics</p></li>
                              <li><BiSolidCheckCircle style={{fontSize:"24px"}}/><p>Automatic updates</p></li>
                              <li><BiSolidCheckCircle style={{fontSize:"24px"}}/><p>Up to 10 individual users</p></li>
                            </ul>
                        </div>
                        <div className="pcb-btm">
                            <NavBtn navTitle={"Buy Plan"}/>
                        </div>                      
                    </div>
                </div>          
              </>                   
            )       
          })}  
      </div>        
      </>
    );

}



// export const PlanCard = () => {
    // const plan = [
    //     {
    //         title:"Starter Plan",
    //         pop:"",
    //         price:"49 USD",

    //     },
    //     {
    //         title:"Standard Plan",
    //         pop:"Popular",
    //         price:"99 USD",

    //     },
    //     {
    //         title:"Premium Plan",
    //         pop:"",
    //         price:"179 USD",

    //     },
    // ]
//     return(
//         <>
//           {plan.map((value, i) => {
//             return(
//                 <div className="plan-card"></div>
//             )
//           })}
//         </>
//     )
// }