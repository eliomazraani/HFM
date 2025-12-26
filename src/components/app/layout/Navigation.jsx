import BR from "/BR.svg"
import DownloadApp from "/DownloadApp.svg"
import { urlClick } from "../../../assets/js/script"
import Logo from "/Logo.svg"
import { Navbar, Nav, Drawer, Menu, MenuItem } from 'rsuite'
import { Link } from "react-router-dom"
import RegistrationBtns from "../../ui/button/RegistrationBtns"
import "../../../assets/style/navigation.css"

function Navigation() {
    function scrollToFooter() {
        const footerElement = document.querySelector("footer");
        if (footerElement) {
            window.scrollTo({
                top: footerElement.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <>
            <header>
                <div className="wrap">
                    <div className="topBanner">
                        <p>Member of HF Markets Group</p>
                        <div className="links">
                            <a onClick={() => scrollToFooter()} className="downloadBtn">
                                <img src={DownloadApp} alt="Download App" />
                                Download App
                            </a>
                            <div className="contactLinks">
                                <a onClick={() => urlClick("https://www.hfeu.com/en/contact-us")}>
                                    Contact us
                                </a>
                                <a onClick={() => urlClick("https://www.hfeu.com/en/about/advantages")}>
                                    Partner with us
                                </a>
                                <img src={BR} alt="Language" />
                            </div>
                        </div>
                    </div>
                    <div className="bottomBanner">
                        <img src={Logo} alt="Logo" />
                        <div className="navigation">
                            <Navbar appearance="none" padding="0">
                                {/* Navigation content for large screens */}
                                <Navbar.Content showFrom="md" display="flex" justifyContent="space-between" gap="0" width="100%">
                                    <Nav gap="33px">
                                        <Link to="/">Markets</Link>
                                        <Link to="/">Trading</Link>
                                        <Link to="/">Investing</Link>
                                        <Link to="/">Tools & Education</Link>
                                        <Link to="/">Company</Link>
                                    </Nav>
                                    <RegistrationBtns />
                                </Navbar.Content>

                                {/* Drawer menu for small screens */}
                                <Navbar.Content hideFrom="md">
                                    <Navbar.Toggle aria-label="Toggle navigation" color="#EEEEEE" />
                                    <Navbar.Drawer placement="right" size="full" className="mobileNav">
                                        <Drawer.Header borderColor="#EEEEEE">
                                            <Drawer.Title>Menu</Drawer.Title>
                                        </Drawer.Header>
                                        <Drawer.Body>
                                            <Menu>
                                                <MenuItem><Link to="/">Markets</Link></MenuItem>
                                                <MenuItem><Link to="/">Trading</Link></MenuItem>
                                                <MenuItem><Link to="/">Investing</Link></MenuItem>
                                                <MenuItem><Link to="/">Tools & Education</Link></MenuItem>
                                                <MenuItem><Link to="/">Company</Link></MenuItem>
                                            </Menu>
                                            <RegistrationBtns />
                                        </Drawer.Body>
                                    </Navbar.Drawer>
                                </Navbar.Content>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navigation
