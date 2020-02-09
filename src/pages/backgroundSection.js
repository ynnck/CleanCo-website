import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import PropTypes from "prop-types"
import { FaBookOpen, FaClock, FaCoins, FaRandom, FaAngleDoubleDown } from "react-icons/fa"
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "achtergrond_appelblauw_mirror.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {

      const imageData = data.desktop.childImageSharp.fluid

      const styleIcon = {
        fontSize: '2rem',
        margin: '10px'
      }
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className='textOpAchtergrond'>
          <p>Clean&Co is een groeiend en dynamisch bedrijf met oog voor kwaliteit. 
            Onze diensten zijn toegespitst op diverse professionele activiteiten, met een focus op de medische sector.</p>
          <p>Wij bieden een hoogwaardige schoonmaakservice aan en maken daarbij steeds gebruik van kwaliteitsvolle producten.
            Betrouwbaarheid en stiptheid dragen wij hoog in het vaandel. 
            Daarom kunnen wij u een onberispelijke kwaliteit verzekeren. 
            Met meer dan 20 jaar ervaring in de sector staat Clean&Co dan ook garant voor tevreden cliënten. 
            Op aanvraag bieden wij een lijst van onze referenties.</p>
          <p>Aarzel zeker niet om gratis een vrijblijvende offerte aan te vragen.</p>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '5vh'}}>
            <div className="icoon">
              <FaBookOpen style={styleIcon}/>
              <h3>Ervaren</h3>
            </div>

            <div className="icoon">
              <FaClock style={styleIcon}/>
              <h3>Betrouwbaar</h3>
            </div>
            <div className="icoon">
              <FaCoins style={styleIcon}/>
              <h3>Voordelig</h3>
            </div>
            <div className="icoon">
              <FaRandom style={styleIcon}/>
              <h3>Flexibel</h3>
            </div>
          </div>
          <div style={{alignSelf: 'flex-end', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '15vh'}}>
            <a href="#contactForm" style={{textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
              <h3 style={{marginBottom: '10px'}}>Meer informatie en offerteaanvraag</h3>
              <FaAngleDoubleDown style={styleIcon} />
            </a>
          </div>
        </div>
        </BackgroundImage>
      )
    }}
  />
)

BackgroundSection.propTypes = {
    className: PropTypes.string
  }
  
  BackgroundSection.defaultProps = {
    className: ``
  }

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection