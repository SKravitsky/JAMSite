import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

class IndexPage extends React.Component {
  // const IndexPage = () => (
  render() {
    return (
      <Layout>
        <Seo title="Home" />
        <StaticImage
          src="../../static/img/logo.png"
          placeholder="blurred"
          quality={100}
          formats={["WEBP"]}
          alt="Out of Bounds"
        />
        {/* <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p> */}
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
