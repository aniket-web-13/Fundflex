
import {NavLinkBtn , NavBtn} from "../cardComponents/shared/buttons.jsx"
import { NavImg } from "../cardComponents/shared/imgSec.jsx";

const Nav = () => {
    const navLink =[
        {
            nav:"All Page",
            link:"/",
        },
        {
            nav:"Pricing",
            link:"/pricing-page"
        },
        {
            nav:"About",
            link:""
        },
        {
            nav:"Contact Us",
            link:""
        },
    ]
    
return(
   <nav>
        <div className="nav-padding">
            <div className="container">
                <div className="nav-main-count">
                    <div className="nav-left">
                        <NavImg />
                    </div>
                    <div className="nav-mid">
                        {navLink.map((value , i) => {
                            return(
                                <NavLinkBtn data={value.nav} link={value.link} index={i}/>
                            )
                        })}
                    </div>
                    <div className="nav-right">
                        <NavBtn navTitle={"Get started"} arrow={""}/>
                    </div>
                 </div>
             </div>      
         </div>        
   </nav>
)
};

export default Nav;