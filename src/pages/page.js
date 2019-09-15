import React from "react"
import Layout from "../components/layout"

const PageTemplate = props => {
  // console.log(props.location.state.data)
  const title = props.location.state.title
  const data = props.location.state.data
  console.log(data)

  // const don = props.location.state.data
  //const d = Object.values(data)

  // console.log(d)

  return (
    <Layout>
      <p>Papier Feuille Ciseaux</p>
      <h3>{title}</h3>
      <p>{data}</p>
    </Layout>
  )
}

export default PageTemplate
