import AppStore from "/AppStore.svg"
import GooglePlay from "/GooglePlay.svg"
import { urlClick } from "../../../assets/js/script"
import "../../../assets/style/footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="wrap">
                    <div className="contactBlock">
                        <div className="findUs">
                            <p>Find us on</p>
                            <div className="socialMedia">
                                <a onClick={() => urlClick("https://www.facebook.com/hfmpeople")}>
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a onClick={() => urlClick("https://x.com/hfmbroker")}>
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a onClick={() => urlClick("https://telegram.org/")}>
                                    <i className="fa-brands fa-telegram"></i>
                                </a>
                                <a onClick={() => urlClick("https://www.instagram.com/hfmpeople")}>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a onClick={() => urlClick("https://www.youtube.com/@hfmbroker")}>
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a onClick={() => urlClick("https://www.linkedin.com/company/hfmbroker/")}>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a onClick={() => urlClick("https://www.hfeu.com/en/")}>
                                    <i className="fa-regular fa-chart-bar"></i>
                                </a>
                            </div>
                        </div>
                        <div className="downloadApp">
                            <p>Download HFM App</p>
                            <div className="stores">
                                <img src={AppStore} alt="AppStore" onClick={() => urlClick("https://apps.apple.com/cy/app/hfm-online-trading/id1097517968")} />
                                <img src={GooglePlay} alt="GooglePlay" onClick={() => urlClick("https://play.google.com/store/apps/details?id=com.hotforex.www.hotforex&hl=en")} />
                            </div>
                        </div>
                    </div>
                    <div className="riskBlock">
                        <p>Risk Warning</p>
                        <p className="disclaimer">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
