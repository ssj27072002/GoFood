import React from 'react'

function Carousel() {
  return (
    <div>
   <div id="carouselExampleFade" cNlass="carousel slide carousel-fade" data-bs-ride="carousel">
  <div classN="carousel-inner">
    <div cNlass="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700?pasta" cNlass="d-block w-100" alt="pasta"/>
    </div>
    <div cNlass="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?pizza" cNlass="d-block w-100" alt="pizza"/>
    </div>
    <div cNlass="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?burger" cNlass="d-block w-100" alt="burger"/>
    </div>
  </div>
  <button cNlass="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span cNlass="carousel-control-prev-icon" aria-hidden="true"></span>
    <span cNlass="visually-hidden">Previous</span>
  </button>
  <button cNlass="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span cNlass="carousel-control-next-icon" aria-hidden="true"></span>
    <span cNlass="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
    }

export default Carousel
