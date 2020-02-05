import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ContactForm = ( ) => {
  const [name, setName] = useState("")
  const [organization, setOrganization] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      console.log("data", data, "xhr", xhr, "status", xhr.status)
      if (xhr.status === 200) {
        setName("")
        setOrganization("")
        setEmail("")
        setMessage("")
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }
  const handleChange = e => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        break
      case "organization":
        setOrganization(e.target.value)
        break
      case "email":
        setEmail(e.target.value)
        break
      case "message":
        setMessage(e.target.value)
        break
    }
  }
  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit}
      action="https://formspree.io/xgeoazgj"
      method="POST"
      style={{display: 'flex', flexDirection: 'column', width: '100%', color: 'rgb(94, 185, 180)'}}
    >
      <label style={{marginTop: '20px'}} htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
        className="textbox"
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px'}}
      />
      <label style={{marginTop: '20px'}} htmlFor="organization">Organization</label>
      <input
        type="text"
        name="organization"
        id="organization"
        value={organization}
        onChange={handleChange}
        className="textbox"
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px'}}
      />
      <label style={{marginTop: '20px'}} htmlFor="email">E-mail</label>
      <input
        type="email"
        name="_replyto"
        id="email"
        value={email}
        onChange={handleChange}
        className="textbox"
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px'}}
      />
      <label style={{marginTop: '20px'}} htmlFor="message">Enter your message</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px', minHeight: '200px'}}
      />
      {status === "SUCCESS" ? (
        <p className="statusMessage">
          Thank you! Your message has been sent. We will get in touch as soon as
          possible.
        </p>
      ) : (
        <input type="submit" value="Submit" className="button" style={{border: '1px solid rgb(94, 185, 180)',color: 'rgb(94,185,180)', background: 'white', borderRadius: '5px', marginTop: '20px'}} />
      )}
      {status === "ERROR" && (
        <p className="statusMessage">
          An error has occured. Please make sure all fields have been filled in
          correctly.
        </p>
      )}
    </form>
  )
}

export default ContactForm
