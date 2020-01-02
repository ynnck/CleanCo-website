import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaPhone, FaEnvelope, FaAngleDoubleDown } from "react-icons/fa"
import Text from "../components/text"

const Header = ({ compName, compPhone, compEmail }) => (
  <header>
    <div className="divHeaderMenu">
      <h1 className="logo">{compName}</h1>
      <ul>
        <li>
          <FaPhone className="awesomeLogo" />
          <span />
          {compPhone}
        </li>
        <li>
          <FaEnvelope className="awesomeLogo" />
          <span />
          {compEmail}
        </li>
      </ul>
    </div>
    <Text />
    <a href="#contactForm">
      <div className="navigate">
        <h2 className="titelPijl">Meer informatie en offerteaanvraag</h2>
        <FaAngleDoubleDown className="arrowNavigate" />
      </div>
    </a>
  </header>
)

Header.propTypes = {
  compName: PropTypes.string,
  compEmail: PropTypes.string,
  compPhone: PropTypes.string,
}

Header.defaultProps = {
  compName: ``,
  compPhone: "",
  compEmail: "",
}

export default Header
