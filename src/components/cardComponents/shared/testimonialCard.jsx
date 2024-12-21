

export const TestCard = ({ para, src, name, comName, index }) => {
    return (
        <div className="test-card">
            <div className="t-card-top" key={index}>
                <p>{para}</p>
            </div>
            <div className="t-card-btm">
                <img src={src} alt="" />
                <div className="t-card-info">
                    <h2>{name}</h2>
                    <p>{comName}</p>
                </div>
            </div>
        </div>
    )
};