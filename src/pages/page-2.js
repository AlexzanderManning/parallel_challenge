import React from "react"
import { Link } from "gatsby"
import { useQueryParam } from "gatsby-query-params"

import Layout from "../components/layout"
import '../components/styles/products.css'
import SEO from "../components/seo"
import ProductInfo from '../components/product-components/product-info'
import products from '../components/product-components/product-object'

import EncodingLibrary from "../libraries/rfc4648";

const SecondPage = () => (
  <Layout>
    <SEO title="Parallel Dev Frontend Assessment" />
    <h1>Product Layout</h1>

    <div className="productLayout">
        {
          // replace this with the "real" products
          delete products.waffle,

          Object.keys(products).map( item => {
            return(
              <div className="productLayout__products">
                <ProductInfo product={item} key={item}/>
              </div>
            );
          })
        }
      </div>

    <div id="cta" style={{
      textAlign: 'center'
    }}>
      <h2>Thanks for your interest in working with us at {EncodingLibrary.decode(useQueryParam('company', 'UGFyYWxsZWw='))}</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
