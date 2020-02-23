import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const ContactForm = ( ) => {

  const [name, setName] = useState("")
  const [organization, setOrganization] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const query = useStaticQuery(graphql`
  query SiteFormspreeQuery {
    site {
      siteMetadata {
          formspree
      }
    }
  }
`)

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
    <div className="kwes-form" style={{display: 'flex', flexDirection: 'column', width: '100%', color: 'rgb(94, 185, 180)'}}>
    <form
      id="contactForm"
      action={query.site.siteMetadata.formspree}
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
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px', width: '100%'}}
      />
      <label style={{marginTop: '20px'}} htmlFor="organization">Organization</label>
      <input
        type="text"
        name="organization"
        id="organization"
        value={organization}
        onChange={handleChange}
        className="textbox"
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px', width: '100%'}}
      />
      <label style={{marginTop: '20px'}} htmlFor="email">E-mail</label>
      <input
        type="email"
        name="e-mail"
        id="email"
        value={email}
        onChange={handleChange}
        className="textbox"
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px', width: '100%'}}
      />
      <label style={{marginTop: '20px'}} htmlFor="message">Enter your message</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        style={{border: '1px solid rgb(94, 185, 180)', borderRadius: '5px', minHeight: '200px', width: '100%'}}
      />
      <input type="submit" value="Submit" className="button" style={{border: '1px solid rgb(94, 185, 180)',color: 'rgb(94,185,180)', background: 'white', borderRadius: '5px', marginTop: '20px', width: '100%'}} />

    </form>
    </div>
  )
}

export default ContactForm
