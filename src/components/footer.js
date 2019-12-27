import React from "react"
import PropTypes from "prop-types"
import { FaPhone, FaEnvelope, FaRegCopyright } from "react-icons/fa"

const Footer = ({
  compName,
  compDescription,
  compPhone,
  compEmail,
  authorName,
  authorWebsite,
}) => (
  <footer>
    <div className="name">
      <div>{compName}</div>
      <div>{compDescription}</div>
    </div>
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        <li>
          <FaPhone />
          <span />
          {compPhone}
        </li>
        <li>
          <FaEnvelope />
          <span />
          {compEmail}
        </li>
      </ul>
    </div>
    <div className="copyright">
      <FaRegCopyright />
      <span /> {new Date().getFullYear()}
      <span />
      <a href={authorWebsite}>{authorName}</a>
    </div>
  </footer>
)

Footer.propTypes = {
  compName: PropTypes.string,
  compDescription: PropTypes.string,
  compPhone: PropTypes.string,
  compEmail: PropTypes.string,
  authorName: PropTypes.string,
  authorWebsite: PropTypes.string,
}
Footer.propTypes = {
  compName: "",
  compDescription: "",
  compPhone: "",
  compEmail: "",
  authorName: "",
  authorWebsite: "",
}

export default Footer
