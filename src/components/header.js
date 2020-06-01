import PropTypes from "prop-types"
import React from "react"
import { FaPhone, FaEnvelope} from "react-icons/fa"
import logo from "../images/kathari_wit.png"

const Header = ({ telephone, email }) => (
  <header>
  <img src={logo} style={{width: '6in', height: '1in'}}/>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex',
                 alignItems: 'center',
                 marginRight: '2vw', 
                 marginBottom: '15px'}}>
        <FaPhone style={{marginRight: '10px', fontSize: '1.5rem'}}/>
        {telephone}
    </div>
    <div style={{display: 'flex',
                 alignItems: 'center',
                 marginRight: '2vw'}}>
        <FaEnvelope style={{marginRight: '10px', fontSize: '1.5rem'}}/>
        {email}
    </div>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  telephone: PropTypes.string,
  email: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  telephone: ``,
  email: ``
}

export default Header
