import { IoMdArrowForward } from "react-icons/io";


export const NavLinkBtn = ({data, link, index}) => {
    return(
        <>
           <a href={link} key={index}>{data}</a>
        </>
    )
}

export const NavBtn = ({navTitle, arrow}) => {
    return(
        <>
           <button className="nav-btn">{navTitle} {arrow}</button>
        </>
    )
}

export const MainBtn = () =>{
    return(
        <>
        <button className="head-btn-1">Get Started</button>
        <a href="#learMore" className="hl-link">Learn More <IoMdArrowForward style={{fontSize:"1.25rem"}}/></a>
        </>
    )
}


export const FootLinks1 = () => {
    const menu =[
        {
            fTitle:"Home",
            link:"/"
        },
        {
            fTitle:"About Us",
            link:"/"
        },
        {
            fTitle:"Pricing",
            link:"/"
        },
        {
            fTitle:"Contact Us",
            link:"/"
        },
    ]
    return(
        <>
        <div className="fm-link">
            <div className="fmlinkTop"><p>Menu</p></div>
            <div className="fm-links-div"> 
            {menu.map((value) =>{
            return(
                <a href={value.link}>{value.fTitle}</a>
            )
            })}
            </div>
        </div>
       
        </>
    )
}

export const FootLinks2 = () => {
    const info =[
        {
            fTitle:"Download",
            link:"/"
        },
        {
            fTitle:"Demos",
            link:"/"
        },
        {
            fTitle:"Support",
            link:"/"
        },
        {
            fTitle:"License",
            link:"/"
        },
    ]
    return(
        <>
        <div className="fm-link">
            <div className="fmlinkTop"><p>Info</p></div>
            <div className="fm-links-div"> 
            {info.map((value) =>{
            return(
                <a href={value.link}>{value.fTitle}</a>
            )
            })}
            </div>
        </div>
       
        </>
    )
}



export const FootInput = () => {
    return(
        <>
            <div className="foot-form">
                <form action="email" id="email">
                    <input type="email" id="email" placeholder="Enter your email"/>
                    <button type="submit" className="foot-btn">Send</button>
                </form>
            </div>
        </>
    )
}


export const SocialMedia = () => {
    const media = [
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e0309d1d529aef76acc2b6_Line.svg",
            link:"/",
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e0312036a3a147d860461a_Line.svg",
            link:"/",
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e031401d91a5342d9b7a5c_Social%20icon%20(9).svg",
            link:"/",
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e03169eef7493f4450f80e_Social%20icon%20(10).svg",
            link:"/",
        },
    ]
    return(
        <>
          <div className="sm-count">
            {media.map((val) => {
                return(
                    <>
                    <a href={val.link}><img src={val.src} alt="" /></a>
                    </>
                )
            })}
          </div>
        </>
    )
}


export const PlanCircleBtn = (id) => {
    return(
        <>
            <button className="my-circle" id={id}></button>
        </>
    )
}