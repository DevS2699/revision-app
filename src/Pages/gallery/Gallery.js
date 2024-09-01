import React from 'react'
import './Gallery.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

const Gallery = () => {
  const galleryLength = 15
  const gallery = []

  for (let i = 1; i <= galleryLength; i++) {
    gallery.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
        <Header title='Our Gallery' image={HeaderImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate amet voluptatibus veniam harum delectus, eligendi facere numquam repellat ipsam?
        </Header>
        <section className="gallery">
          <div className="container gallery_container">
           {gallery.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery image ${index+1}`} />
              </article>
           })}
          </div>
        </section>
    </>
  )
}

export default Gallery