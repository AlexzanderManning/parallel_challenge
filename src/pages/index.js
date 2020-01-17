import React from "react"
import { Link } from "gatsby"
import { useQueryParam } from "gatsby-query-params"

import Layout from "../components/layout"
import ImageLoader from "../components/image-loader"
import SEO from "../components/seo"

import EncodingLibrary from "../libraries/rfc4648";

const IndexPage = () => {

  // const name = EncodingLibrary.decode(useQueryParam('name', 'QWxleHphbmRlcg==')); // key, defaultValue
  // console.log(name); // log query param
  // console.log(getSearchParams()); // Log all parameters

  return (
    <Layout>
      <section className="text-center">
        <SEO title="Parallel Dev Frontend Assessment" />
        <h1>Hi there, {EncodingLibrary.decode(useQueryParam('name', 'QWxleHphbmRlcg=='))}!</h1>
        <div style={{ maxWidth: `300px`, margin: `0 auto 1.45rem` }}>
          <ImageLoader imageToUse={EncodingLibrary.decode(useQueryParam('company', 'UGFyYWxsZWw='))} />
        </div>

        {
          EncodingLibrary.decode(useQueryParam('company', 'null')) === 'Parallel' ?
            <p>Excellent! Continue to the 2nd task, please!</p> :
            <p>If you see a waffle, keep trying!</p>
        }

        <Link to="/page-2/">Go to page 2</Link>
      </section>
    </Layout>
  )
}

export default IndexPage
