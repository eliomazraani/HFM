function IconText({cls, imgSrc, description}) {
    return (
        <>
            <div className={cls}>
                <img src={imgSrc} alt="Icon" />
                {description}
            </div>
        </>
    )
}

export default IconText