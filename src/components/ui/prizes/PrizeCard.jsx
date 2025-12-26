function prizeCard({imgSrc, price, tag}) {
    return (
        <>
            <div className="card">
                <img src={imgSrc} alt="Icon" />
                <p className="price">{price}</p>
                <p className="tag">{tag}</p>
            </div>
        </>
    )
}

export default prizeCard