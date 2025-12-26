function Voucher({imgSrc, name, id, gain, prize}) {
    return (
        <>
            <div className="voucher">
                <div className="trophy">
                    <img src={imgSrc} alt="Trophy" />
                </div>
                <div className="details">
                    <p className="date">January Winner</p>
                    <p className="name">{name}</p>
                    <p className="id">{id}</p>
                    <p className="gain">TOTAL GAIN OF <span>{gain}%</span></p>
                </div>
                <div className="ribbon">
                    {prize}
                </div>
            </div>
        </>
    )
}

export default Voucher