function SubmitBtn({ show = false, scroll = false }) {
    function scrollToForm() {
        const formElement = document.querySelector(".formElement");
        if (formElement) {
            window.scrollTo({
                top: formElement.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <div className="submitBtn">
            <button type="submit" onClick={scroll ? scrollToForm : undefined}>JOIN NOW</button>

            {show && <p>Terms and Conditions apply</p>}
        </div>
    );
}

export default SubmitBtn;