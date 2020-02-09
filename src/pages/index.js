import React from "react"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import StyledImageSection from "./backgroundSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='containerPaginaFoto'> 
      <StyledImageSection/>
    </div>
    <div className="containerPaginaWit">
      <div className="textOpWit" style={{textAlign: 'justify', color: 'rgb(94, 185, 180)', margin: '5vw',}}>
        <p>Het onderhoud van kantoren en praktijken kan bestaan uit allerlei karweien. 
           Denk hierbij maar aan stofzuigen, het reinigen en luchten van bureaus, 
           het schoonmaken van de werkomgeving en de sanitaire ruimten. 
           Wat u ook wenst, het Clean&Co-team heeft ervaring met de meest uiteenlopende schoonmaakklussen.
        </p>
        <p>
           Uw kantoor of praktijk is uw visitekaartje naar klanten toe. 
           Het juiste schoonmaakbedrijf kiezen is dan ook van essentieel belang. 
           Bij Clean&Co gaan we daarom voluit voor een persoonlijke aanpak. 
           Daarom werken wij steeds een pakket uit op maat, dat past bij jouw noden. 
           Avondwerk of weekendwerk, met jaarcontract of occasioneel schoonmaakwerk, ’s morgensvroeg schoonmaken? 
           Geen enkel probleem, Clean&Co stelt zich graag flexibel op. Vertrouw op Clean&Co en maak indruk.
        </p>
        <p>
           We kijken uit naar een toekomstige samenwerking
        </p>
        <p>
           Het Clean&Co-team
        </p>
        </div>
      <div className="containerContactForm" style={{margin: '5vw', display: 'flex', flexDirection: 'column'}}>
        <a name='contactForm'/>
        <h2 style={{height: '5vh', color: 'rgb(94, 185, 180)'}}>Vraag vrijblijvend een offerte aan</h2>
        <ContactForm />
      </div>
    </div>
      
  </Layout>
)

export default IndexPage
