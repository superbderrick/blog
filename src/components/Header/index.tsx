import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import config from "../../../content/data/siteConfig.json"

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState("light")

  const navOnScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

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

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const { headerLinks } = config

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html")[0]
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null
    if (currentTheme) {
      htmlEl.dataset.theme = currentTheme
      if (currentTheme !== theme) {
        setTheme(currentTheme)
      }
    }
    window.addEventListener("scroll", navOnScroll)
    return () => {
      window.removeEventListener("scroll", navOnScroll)
    }
  }, [])

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html")[0]
    localStorage.setItem("theme", theme)
    htmlEl.dataset.theme = theme
  }, [theme])

  return (
    <>
      <header id="header" className={scrolled ? "section scrolled" : "section"}>
        <section className="container grid-lg">
          <nav className="navbar">
            <section className="navbar-section desktop-menu">
              <nav className="dropmenu animated">
                <ul className="navigation">
                  {headerLinks.map(link => {
                    return (
                      <li key={link.url}>
                        <Link to={link.url} className="external">
                          {link.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </section>
            <section className="navbar-section toggle">
              <nav className="dropmenu animated">
                <ul className="navigation">
                  <li>
                    <label
                      className="switch"
                      htmlFor="toggle-dark"
                      onClick={toggleTheme}
                    >
                      <input
                        id="toogle-dark"
                        type="checkbox"
                        className="checkbox"
                        readOnly
                        checked={theme === "light"}
                      />
                      <div>
                        <span />
                      </div>
                    </label>
                  </li>
                </ul>
              </nav>
            </section>
          </nav>
        </section>
      </header>
      <div className="mobile-menu">
        <div
          className="button_container"
          id="toggle"
          onClick={mobileNavOnClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>
      </div>
    </>
  )
}

export default Header
