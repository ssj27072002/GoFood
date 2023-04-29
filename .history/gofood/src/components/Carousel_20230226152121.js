import React from 'react'

function Carousel() {
  return (
    <div>
   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-caption d-none d-md-block">
  <form className="d-flex" >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700?burger" className="d-block w-100 " alt="burger"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?pizza" className="d-block w-100 " alt="pizza"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700?pasta" className="d-block w-100" alt="pasta"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
    }

export default Carousel
