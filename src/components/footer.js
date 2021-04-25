import React from "react"

import instagram from "../img/social/instagram.svg"
import facebook from "../img/social/facebook.svg"

const Footer = () => {
  return (
    <footer className="page-footer">
      <small>I'm a footer © {new Date().getFullYear()}</small>
      <ul>
        <li>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </li>
        <li>
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
