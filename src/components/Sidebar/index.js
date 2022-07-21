import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedinIn, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {

    return <>
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img className="img-logo" src={LogoS} alt="logo" />
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/shaka-mardiev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} color="4d4d4e" />
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/shaka-mardiev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTelegram} color="4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shaka-mardiev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} color="4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    </>
}

export default Sidebar