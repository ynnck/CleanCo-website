import PropTypes from "prop-types"
import React from "react"
import { FaPhone, FaEnvelope} from "react-icons/fa"

const Header = ({ siteTitle, telephone, email }) => (
  <header>
  <h1 style={{fontFamily: 'Playfair Display'}}>{siteTitle}</h1>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex',
                 alignItems: 'center',
                 marginRight: '2vw'}}>
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
