import React from "react"
import { Link } from "gatsby"

import data from "../data/datafr.json"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { element } from "prop-types"

const Datafor = data => {
  const dataFor = Object.values(data).map(elmnt => {
    return Object.values(elmnt[0]).map((el, i) => {
      const data = el
      const title = el.title
      const don = el.data
      console.log(don)
      return (
        <Link
          to="/page/"
          state={{
            title: `${title}`,
            data: `${don}`,
          }}
        >
          {/* <Link to="/page/" state={{ data: `${data}` }}> */}
          <li key={i}>{el.title}</li>
        </Link>
      )
    })
  })

  // console.log(dataFor)
  return <ul>{dataFor}</ul>
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>La citadelle des Musulmans</h1>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Datafor data={data} />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
