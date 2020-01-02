import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ContactForm = () => {
  const [naam, setNaam] = useState("")
  const [telefoon, setTelefoon] = useState("")
  const [email, setEmail] = useState("")
  const [details, setDetails] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = ev => {
    ev.preventDefault()
    if (naam != "" && email != "" && details != "") {
      const form = ev.target
      const data = new FormData(form)
      const xhr = new XMLHttpRequest()
      xhr.open(form.method, form.action)
      xhr.setRequestHeader("Accept", "application/json")
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        console.log("data", data, "xhr", xhr, "status", xhr.status)
        if (xhr.status === 200) {
          setNaam("")
          setTelefoon("")
          setEmail("")
          setDetails("")
          setStatus("SUCCESS")
        } else {
          setStatus("ERROR")
        }
      }
      xhr.send(data)
    } else {
      setStatus("ERROR")
    }
  }
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
      <form
        id="contactForm"
        onSubmit={handleSubmit}
        action="https://formspree.io/mayqakqe"
        method="POST"
      >
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
        {status === "SUCCESS" ? (
          <p className="statusMessage">
            Thank you! Your message has been sent. We will get in touch as soon
            as possible.
          </p>
        ) : (
          <input type="submit" value="Submit" className="button" />
        )}
        {status === "ERROR" && (
          <p className="statusMessage">
            Er heeft zich een fout voorgedaan. Gelieve na te kijken dat alle
            velden correct werden ingevuld
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
