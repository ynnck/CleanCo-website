import React, { useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import global from "../components/global.css"
import Image from "../images/achtergrond_roos.jpeg"
import TextContact from "../components/textContact"
import ContactForm from "../components/contactform"
import SEO from "../components/seo"

import { loadReCaptcha } from "react-recaptcha-v3"

const IndexPage = () => {
  useEffect(() => {
    loadReCaptcha("6LcJd9IUAAAAAPqfw3WwDsOuoWouT96_UYn7WVL-")
  })

  return (
    <Layout>
      <div className="divKolom">
        <TextContact />
        <ContactForm />
      </div>
    </Layout>
  )
}
IndexPage.propTypes = {
  compName: PropTypes.string,
}
IndexPage.defaultProps = {
  compName: "",
}

export default IndexPage
