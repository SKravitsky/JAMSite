import * as React from "react"
import PropTypes from "prop-types"
import "../styles/global.scss"

const Header = ({ siteTitle }) => (
  <header className="page-header">
    <h1>{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
