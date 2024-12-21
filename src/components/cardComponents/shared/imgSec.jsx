import NavLogo from '../../../assets/svg/nav-logo.svg';
import hrBigImg from "../../../assets/png/header-right-big-img.png"
import hrSmallImg from "../../../assets/svg/header-right-small-img.svg"

export const NavImg = () => {
    return(
        <>
        <img src={NavLogo} alt="" />
        </>
    )
}

export const HeadImg = () => {
    return(
        <>
            <div className="hr-img-big">
                <img src={hrBigImg} alt="" />
            </div>
            <div className="hr-img-small">
                <img src={hrSmallImg} alt="" />
            </div>
        </>
    )
}

export const BrandImg = () => {
    const brandImgArr = [
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e181a8b01605aaefe2c2a1_Fictional%20company%20logo%20(8).svg"
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e181daa9c061e5c4481210_Fictional%20company%20logo%20(9).svg"
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e181f25149360dd24e144b_Fictional%20company%20logo%20(10).svg"
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e1822d82da51f0e4497936_Fictional%20company%20logo%20(11).svg"
        },
        {
            src:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e1820f8d842227d5780879_Fictional%20company%20logo%20(12).svg"
        },
    ]
    return(
        <>
         {brandImgArr.map((img) => {
            return(
                <img src={img.src} alt="" />
            )
           })}
        </>
    )
}

export const GainsImg = () => {
    const gainImg =[{
        img1:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e272a6c3dc81b4d30180a7_Feature%20Image-p-800.png",
        img2:"https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e272e7164b8e39c24b5562_Untitled-1%202.svg",
    }]
    return(
        <>
        {gainImg.map((value) => {
            return(
                <>
                    <div className="gsec-img">
                        <img className="bgImg" src={value.img1} alt="" />                                
                    </div>    
                     <img className="circleGr" src={value.img2} alt="" /> 
                </>
            )
        })}
         
        </>
    )
}