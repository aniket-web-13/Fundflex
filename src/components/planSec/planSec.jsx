
import { PlanCircleBtn } from "../cardComponents/shared/buttons.jsx";
import { PlanCard } from "../cardComponents/shared/card.jsx";
import { Centertitle } from "../cardComponents/shared/titles.jsx";


export function PlanSec() {

//     let myPlan = document.getElementById("myPlan");
// let myPlanBTn = document.getElementById("myPlanBtn");

// myPlan.addEventListener("click", () => {
//     myPlanBTn.style.display = "none"
// })

let planBtn = () => {
   let roundBtn = document.getElementById("plantBtn");
   console.log(roundBtn);
     
}





    return(
        <>
            <header>
                <div className="head-bg-img">
                    <div className="header-padding">
                        <div className="container">
                            <div className="head-plan-count">
                                <div className="head-top">
                                    <Centertitle 
                                        ceneterTitle={"Choose your Plan"}
                                    />                                    
                                </div>
                                <div className="head-plan-md">
                                    <p>Monthly</p>
                                    <div className="my-plan" id="myPlan" onClick={planBtn}>
                                        <PlanCircleBtn id={"plantBtn"}/>
                                    </div>
                                    <p>Yearly</p>
                                </div>
                                <div className="head-btm-plan">
                                    <PlanCard />
                                    <div className="pop position-pop"><p>Popular</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}