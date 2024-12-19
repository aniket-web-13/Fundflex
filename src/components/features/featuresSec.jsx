import { FeatureCard } from "../cardComponents/shared/card.js"

const FeaturesSec = () => {
    const ftCard = [
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e269705968fdd3a0a8e1ce_wallet-check.svg",
            head:"Expense Tracking",
            para:"Easily track your expenses in real-time, categorize transactions, and set budget limits for different spending.",
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e26bf72d0e07bad1f6a533_chart.svg",
            head:"Advanced Analytics",
            para:"Gain valuable insights into your data with our advanced analytics tools. Track key metrics and visualize trends.",
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e26c3983fe01c1f864309d_moneys.svg",
            head:"Payment Reminders",
            para:"Never miss a bill payment again with automatic reminders and ensure all bills are paid on time avoiding penalties",
        },


    ];
    return(
        <section>
            <div className="section-padding">
                <div className="container">
                    <div className="features-main-count">
                        <div className="feat-top">
                            <h2>Our Cutting-Edge Features</h2>
                            <div className="ft-info-p">
                                <p>Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
                             </div>                           
                        </div>
                        <div className="feat-bottom">
                            {ftCard.map((value) =>{
                                return(
                                    <>
                                    <FeatureCard src={value.src} head={value.head} para={value.para}/>
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

export default FeaturesSec;