import React from 'react'

function Carousel() {
  return (
    <div>
   <div id="carouselExampleFade" cNamelass="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div cNamelass="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700?pasta" cNamelass="d-block w-100" alt="pasta"/>
    </div>
    <div cNamelass="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?pizza" cNamelass="d-block w-100" alt="pizza"/>
    </div>
    <div cNamelass="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?burger" cNamelass="d-block w-100" alt="burger"/>
    </div>
  </div>
  <button cNamelass="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span cNamelass="carousel-control-prev-icon" aria-hidden="true"></span>
    <span cNamelass="visually-hidden">Previous</span>
  </button>
  <button cNamelass="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span cNamelass="carousel-control-next-icon" aria-hidden="true"></span>
    <span cNamelass="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
    }

export default Carousel
