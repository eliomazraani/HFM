function PageSection({cls, children, ...props}) {
    return (
        <>
            <section className={cls} {...props}>
                {children}
            </section>
        </>
    )
}

export default PageSection