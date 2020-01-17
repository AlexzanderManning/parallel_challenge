import React from "react"
import ImageHome from './images/image-home'
import ImageWaffle from './images/image-waffle'

const ImageLoader = ({imageToUse}) => {
  switch (imageToUse) {
    case 'Parallel':
      return <ImageHome />
    case 'waffle':
      return <ImageWaffle />
    default:
      return <ImageWaffle />
  }  
}

export default ImageLoader
