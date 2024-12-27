import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export const FaqBtm = ({que , ans, id, index}) => {
   
    return (
        <>
            <div className="que-count" key={index}>
                <div className="que">
                    <div className="ques">
                        <p>{id}. {que}</p>
                        <p><MdOutlineKeyboardArrowDown style={{fontSize:"1.5rem"}}/></p>
                    </div>
                    <div className="faq-hr"></div>
                </div>                 
                <div className="ans-count">
                    <div className="ans">
                        <p>{ans}</p>
                    </div>
                </div>
            </div>                  
        </>
    )
}

export const GainsLi = () => {
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
        </>
    )
}