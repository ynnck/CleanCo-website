import React, { useState } from "react"

const ContactForm = () => {
  const [naam, setNaam] = useState("")
  const [telefoon, setTelefoon] = useState("")
  const [email, setEmail] = useState("")
  const [details, setDetails] = useState("")

  const handleChange = e => {
    switch (e.target.name) {
      case "naam":
        setNaam(e.target.value)
        break
      case "telefoon":
        setTelefoon(e.target.value)
        break
      case "_replyto":
        setEmail(e.target.value)
        break
      case "details":
        setDetails(e.target.value)
        break
    }
  }
  return (
    <div className="contactForm">
      <a name="contactForm" className="anchorReposition">
        <h2>Vraag vrijblijvend een offerte aan</h2>
      </a>
      <form>
        <label htmlFor="naam">Naam</label>
        <input type="text" value={naam} name="naam" onChange={handleChange} />
        <label htmlFor="telefoon">Telefoon</label>
        <input
          type="tel"
          value={telefoon}
          name="telefoon"
          onChange={handleChange}
        />
        <label htmlFor="_replyto">E-mail</label>
        <input
          type="email"
          value={email}
          name="_replyto"
          onChange={handleChange}
        />
        <label htmlFor="details">Details</label>
        <textarea value={details} name="details" onChange={handleChange} />
        <input type="submit" value="Verzenden" className="button" />
      </form>
    </div>
  )
}

export default ContactForm
