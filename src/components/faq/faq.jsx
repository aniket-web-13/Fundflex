import { FaqHead } from "../cardComponents/shared/questions"
import { FaqBtm } from "../cardComponents/shared/questions"

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
        <div className="section-padding">
            <div className="container">
                <div className="faq-main-count">
                    <div className="faq-top">
                        <FaqHead />
                    </div>
                    <div className="faq-btm">
                        {quest.map((data , num) => {
                            <FaqBtm />
                        })}                        
                    </div>
                </div>
            </div>
        </div>
    )
}