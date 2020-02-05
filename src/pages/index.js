import React from "react"
import { FaBookOpen, FaClock, FaCoins, FaRandom, FaAngleDoubleDown } from "react-icons/fa"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{width: '100vw', height: '100vh', maxHeight: '100vh', overflow: 'hidden'}}> 
      <Image />
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
    </div>
    <div style={{width: '100vw', height: '85vh', maxheight: '70vh', display: 'flex'}}>
      <div style={{width: '50vw', padding: '9vw', textAlign: 'justify', color: 'rgb(94, 185, 180)'}}>
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
      <div style={{width: '50vw', paddingTop: '3vw', paddingLeft: '8vw', paddingRight: '8vw', display: 'flex', flexDirection: 'column'}}>
      <h2 style={{height: '3vw', color: 'rgb(94, 185, 180)'}}>Vraag vrijblijvend een offerte aan</h2>
      <ContactForm />
      </div>
    </div>
      
  </Layout>
)

export default IndexPage
