import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { ReCaptcha } from "react-recaptcha-v3"

const ContactForm = () => {
  const [naam, setNaam] = useState("")
  const [telefoon, setTelefoon] = useState("")
  const [memo, setMemo] = useState("")
  const [details, setDetails] = useState("")
  const [status, setStatus] = useState("")
  const [spamcheck, setSpamcheck] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token")
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    if (
      naam != "" &&
      memo != "" &&
      details != "" &&
      name === "" &&
      email === ""
    ) {
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
          setMemo("")
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
      case "spamcheck":
        setSpamcheck(e.target.value)
        break
      case "naam":
        setNaam(e.target.value)
        break
      case "telefoon":
        setTelefoon(e.target.value)
        break
      case "_replyto":
        setMemo(e.target.value)
        break
      case "details":
        setDetails(e.target.value)
        break
      case "email":
        setEmail(e.target.value)
        break
      case "name":
        setName(e.target.value)
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
        <label class="honingveld" for="name"></label>
        <input
          class="honingveld"
          autocomplete="off"
          type="text"
          id="name"
          name="name"
          placeholder="Your name here"
          value={name}
          onChange={handleChange}
        />
        <label class="honingveld" for="email"></label>
        <input
          class="honingveld"
          autocomplete="off"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your e-mail here"
        />
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
          value={memo}
          name="_replyto"
          onChange={handleChange}
        />
        <label htmlFor="details">Details</label>
        <textarea value={details} name="details" onChange={handleChange} />
        <ReCaptcha
          sitekey="6LcJd9IUAAAAAPqfw3WwDsOuoWouT96_UYn7WVL-"
          action="contactform"
          verifyCallback={verifyCallback}
        />

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
