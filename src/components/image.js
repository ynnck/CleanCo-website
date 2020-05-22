import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaBookOpen, FaClock, FaCoins, FaRandom, FaAngleDoubleDown } from "react-icons/fa"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ className}) => {
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "achtergrond_appelblauw_mirror.jpeg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div style={{width: '40vw',position: 'absolute', left: '50vw',top: '35vh', color: 'white', background: 'rgb(255,255,255,0)', textAlign: 'justify'}}>
          <p>Clean&Co is een groeiend en dynamisch bedrijf met oog voor kwaliteit. 
            Onze diensten zijn toegespitst op diverse professionele activiteiten, met een focus op de medische sector.</p>
          <p>Wij bieden een hoogwaardige schoonmaakservice aan en maken daarbij steeds gebruik van kwaliteitsvolle producten.
            Betrouwbaarheid en stiptheid dragen wij hoog in het vaandel. 
            Daarom kunnen wij u een onberispelijke kwaliteit verzekeren. 
            Met meer dan 20 jaar ervaring in de sector staat Clean&Co dan ook garant voor tevreden cliënten. 
            Op aanvraag bieden wij een lijst van onze referenties.</p>
          <p>Aarzel zeker niet om gratis een vrijblijvende offerte aan te vragen.</p>
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '5vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <FaBookOpen style={{fontSize: '2rem', margin: '10px'}}/>
              <h3>Ervaren</h3>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <FaClock style={{fontSize: '2rem', margin: '10px'}}/>
              <h3>Betrouwbaar</h3>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <FaCoins style={{fontSize: '2rem', margin: '10px'}}/>
              <h3>Voordelig</h3>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <FaRandom style={{fontSize: '2rem', margin: '10px'}}/>
              <h3>Flexibel</h3>
            </div>
          </div>
        </div>
        </BackgroundImage>
      )
    }}
    />
}

Image.propTypes = {
  className: PropTypes.string
}

Image.defaultProps = {
  className: ``
}

const StyledImageSection = styled(Image)`
width: 100%;
height: 100%;
background-position: bottom center;
background-repeat: repeat-y;
background-size: cover;
`

export default StyledImageSection
