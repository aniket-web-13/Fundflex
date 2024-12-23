import { Component } from "react";


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


class PlanCard extends Component {
    constructor(title,re) {
      super();      
      this.State = {
        head:title, 
        price:re,
    };   
    }      
    render() {     
      return (
        <>
          <h2>{this.state.title}</h2>
          <p>{this.state.re}</p>
        </>
      );
    }
  }
export {PlanCard} ;


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