import { TestCard } from "../cardComponents/shared/testimonialCard"
import { TestHead } from "../cardComponents/shared/testimonialCard"

export const Testimoni = () => {
    let Testimonial = [
        {
            para: "“I love how easy it is to track my spending with this app! It's helped me stick to my budget.”",
            src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e29c3d33e6153d58f82cf8_Frame%20838.svg",
            name: "Sarah",
            comName: "GlOBALNOMADS",
        },
        {
            para: "“Transaction management has never been easier! This app has saved me so much!”",
            src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d79adbe89fc253b16_Frame%201000000839.svg",
            name: "Emily",
            comName: "CYBERLEAP",
        },
        {
            para: "“The advanced analytics feature is a game-changer! It's helped me identify areas!”",
            src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d480fcf4762d10b8d_Frame%20836.svg",
            name: "John",
            comName: "GlOBALNOMADS",
        },
        {
            para: "I couldn’t be happier with the outcome.The skill involved was truly impressive.",
            src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58df94d5b39d67311c4_Frame%20950.svg",
            name: "Michael",
            comName: "CYBERLEAP",
        },
        {
            para: "“I can't imagine managing my finances without this app. It's become an essential part!”",
            src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d34354537cbecb4a3_Frame%20950%20(1).svg",
            name: "Leonel",
            comName: "FLOCLIPS",
        },
        {
            para: "“I couldn't be happier with the outcome. Prowess and creativity helped me a lot.”",
            src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d85dabd9a8e98ac69_Frame%20837.svg",
            name: "Melanie",
            comName: "CYBERLEAP",
        },
    ]
    return (
        <section>
            <div className="section-padding">
                <div className="container">
                    <div className="testimonial-main-count">
                        <div className="test-top">
                            <TestHead />
                        </div>
                        <div className="test-btm-out">
                            <div className="test-btm">
                                {Testimonial.map((value, i) => {
                                    return (
                                        <>
                                            <TestCard para={value.para} src={value.src} name={value.name} comName={value.comName} inedx={i} />
                                        </>
                                    )
                                })}
                                <div className="vert-line line-1"></div>
                                <div className="vert-line line-2"></div>
                                <div className="hor-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}