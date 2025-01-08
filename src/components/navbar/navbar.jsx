
import { NavLinkBtn, NavBtn } from "../cardComponents/shared/buttons.jsx"
import { NavImg } from "../cardComponents/shared/imgSec.jsx";

const Nav = () => {
    const navLink = [
        {
            nav: "All Page",
            link: "/",
        },
        {
            nav: "Pricing",
            link: "/pricing-page"
        },
        {
            nav: "About",
            link: ""
        },
        {
            nav: "Contact Us",
            link: ""
        },
    ]

    const hamBtn = () => {
        /* this function use for Sub Nav link box show and hide */
        let subLink = document.getElementById("subLInk");
        subLink.classList.toggle("hamShow");
        
        


      
      
        
    }

    return (
        <nav>
            <div className="nav-padding">
                <div className="container">
                    <div className="nav-main-count">
                        <div className="nav-left">
                            <NavImg />
                        </div>
                        <div className="nav-mid">
                            {navLink.map((value, i) => {
                                return (
                                    <NavLinkBtn data={value.nav} link={value.link} index={i} />
                                )
                            })}
                        </div>
                        <div className="nav-right">
                            <div className="navbar-btn">
                                <NavBtn navTitle={"Get started"} arrow={""} />
                            </div>
                            <div className="ham-count" onClick={hamBtn}>
                                <div id="hamLine1"></div>
                                <div id="hamLine2"></div>
                                <div id="hamLine3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-link-count" id="subLInk">
                <div className="sub-in-box">
                    {navLink.map((value, i) => {
                        return (
                            <NavLinkBtn data={value.nav} link={value.link} index={i} />
                        )
                    })}
                </div>

            </div>
        </nav>
    )
};

export default Nav;