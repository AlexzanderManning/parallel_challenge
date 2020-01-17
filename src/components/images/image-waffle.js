import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WaffleImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "waffle.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `) 

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default WaffleImage
