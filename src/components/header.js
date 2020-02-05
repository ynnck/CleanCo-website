import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaPhone, FaEnvelope} from "react-icons/fa"

const Header = ({ siteTitle, telephone, email }) => (
  <header style={{display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '5vw',
                  position: 'absolute',
                  width: '100vw',
                  height: '15vh',
                  zIndex: '1',
                  color: 'white', 
                  }}>
  <h1 style={{fontFamily: 'Playfair Display'}}>{siteTitle}</h1>
  <div style={{display: 'flex'}}>
    <div style={{display: 'flex',
                 alignItems: 'center',
                 marginRight: '2vw'}}>
        <FaPhone style={{marginRight: '10px', fontSize: '1.5rem'}}/>
        {telephone}
    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>
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
