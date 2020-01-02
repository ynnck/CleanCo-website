import React from "react"
import { FaClock, FaCoins, FaRandom, FaBookOpen } from "react-icons/fa"
const text = () => (
  <div className="divText">
    <p>
      Clean&Co is een groeiend en dynamisch bedrijf met oog voor kwaliteit. Onze
      diensten zijn toegespitst op diverse professionele activiteiten, met een
      focus op de medische sector.
    </p>
    <p>
      Wij bieden een hoogwaardige schoonmaakservice aan en maken daarbij steeds
      gebruik van kwaliteitsvolle producten. Betrouwbaarheid en stiptheid dragen
      wij hoog in het vaandel. Daarom kunnen wij u een onberispelijke kwaliteit
      verzekeren. Met meer dan 20 jaar ervaring in de sector staat Clean&Co dan
      ook garant voor tevreden cliënten. Op aanvraag bieden wij een lijst van
      onze referenties.
    </p>
    <p>Aarzel zeker niet om gratis een vrijblijvende offerte aan te vragen.</p>

    <div className="divIcons">
      <div className="divIconItem">
        <FaBookOpen className="awesomeIcon" />
        <h3>Ervaren</h3>
      </div>

      <div className="divIconItem">
        <FaClock className="awesomeIcon" />
        <h3>Betrouwbaar</h3>
      </div>
      <div className="divIconItem">
        <FaCoins className="awesomeIcon" />
        <h3>Voordelig</h3>
      </div>
      <div className="divIconItem">
        <FaRandom className="awesomeIcon" />
        <h3>Flexibel</h3>
      </div>
    </div>
  </div>
)
export default text
