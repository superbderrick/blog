import React from "react"

import config from "../../../content/data/siteConfig.json"

const Feedback: React.FC = () => {
  const { userLinks } = config
  const [twitter] = userLinks.filter(link => link.label === "Twitter")

  return (
    <section className="section modular-features offset-box">

    </section>
  )
}

export default Feedback
