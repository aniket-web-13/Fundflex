
import { FaqBtm } from "../cardComponents/shared/questions.jsx"
import { Centertitle } from "../cardComponents/shared/titles.jsx";

export const Faq = () => {
    const quest = [
        {
            id:"1",
            que:"How secure is my financial data?",
            ans:"Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
        },
        {
            id:"2",
            que:"Can I access my finacial data from multiple devices?",
            ans:"Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
        },
        {
            id:"3",
            que:"Is customer support available if I need assistance?",
            ans:"Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
        },
        {
            id:"4",
            que:"Is there a free trial available?",
            ans:"Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
        },
        {
            id:"5",
            que:"Can I customize the categories for my transaction",
            ans:"Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
        },
        
    ];
    return (
        <section>
            <div className="section-padding">
                <div className="container">
                    <div className="faq-main-count">                    
                         <Centertitle 
                           ceneterTitle={`Got Questions? We've Got Answers!`}
                         />                    
                        <div className="faq-btm">
                            {quest.map((value , num) => {
                                return(
                                    <>
                                        <FaqBtm que={value.que} ans={value.ans} id={value.id} index={num}/>
                                    </>                               
                                )
                            })}                        
                        </div>
                    </div>
                </div>
             </div>
        </section>
       
    )
}