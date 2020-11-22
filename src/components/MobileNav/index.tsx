import React from "react"

import { Link } from "gatsby"

import config from "../../../content/data/siteConfig.json"

const MobileNav: React.FC = () => {
  const mobileNavOnClick = () => {
    document.getElementById("toggle").classList.toggle("active")
    document.getElementById("overlay").classList.toggle("open")
    document.body.classList.toggle("mobile-nav-open")
  }

  const handleKeyDown = ev => {
    // M key
    if (ev.keyCode === 77) {
      mobileNavOnClick()
    }
  }

  const { headerLinks } = config
  return (
    <div className="mobile-container">
      <div className="overlay" id="overlay">

        <nav className="overlay-menu">
          <ul className="tree treemenu treemenu-root">
            {headerLinks.map(link => {
              return (
                <li className="tree-empty" key={link.url}>
                  <Link
                    to={link.url}
                    className="external"
                    onClick={mobileNavOnClick}
                    onKeyDown={handleKeyDown}
                    role="button"
                  >
                    {link.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
