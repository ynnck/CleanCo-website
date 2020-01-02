import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import global from "../components/global.css"
import Image from "../images/achtergrond_roos.jpeg"
import TextContact from "../components/textContact"
import ContactForm from "../components/contactform"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="divKolom">
      <TextContact />
      <ContactForm />
    </div>
  </Layout>
)
IndexPage.propTypes = {
  compName: PropTypes.string,
}
IndexPage.defaultProps = {
  compName: "",
}

export default IndexPage
