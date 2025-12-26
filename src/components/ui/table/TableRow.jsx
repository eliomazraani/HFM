function RowTable({cls = "", name, gain}) {
    return (
        <>
            <div className={`row ${cls}`}>
                <p className="nameCol">{name}</p>
                <p className="gainCol">{gain}</p>
            </div>
        </>
    )
}

export default RowTable