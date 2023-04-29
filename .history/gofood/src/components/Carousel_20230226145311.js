import React from 'react'

function Carousel() {
  return (
    <div>
   <div id="carouselExampleFade" classNAme="carousel slide carousel-fade" data-bs-ride="carousel">
  <div classNAme="carousel-inner">
    <div classNAme="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700?pasta" classNAme="d-block w-100" alt="pasta"/>
    </div>
    <div classNAme="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?pizza" classNAme="d-block w-100" alt="pizza"/>
    </div>
    <div classNAme="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?burger" classNAme="d-block w-100" alt="burger"/>
    </div>
  </div>
  <button classNAme="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span classNAme="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classNAme="visually-hidden">Previous</span>
  </button>
  <button classNAme="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span classNAme="carousel-control-next-icon" aria-hidden="true"></span>
    <span classNAme="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
    }

export default Carousel
