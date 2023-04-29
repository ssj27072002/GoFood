import React from 'react'

function Carousel() {
  return (
    <div>
     <div id="carouselExampleIndicators" classNAme="carousel slide" data-ride="carousel">
  <ol classNAme="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" classNAme="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div classNAme="carousel-inner">
    <div classNAme="carousel-item active">
      <img classNAme="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div classNAme="carousel-item">
      <img classNAme="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div classNAme="carousel-item">
      <img classNAme="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a classNAme="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span classNAme="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classNAme="sr-only">Previous</span>
  </a>
  <a classNAme="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span classNAme="carousel-control-next-icon" aria-hidden="true"></span>
    <span classNAme="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Carousel
