import React,{useEffect} from 'react'
import banner1 from './Images/banner.png'
import banner2 from './Images/banner2.png'
import banner3 from './Images/banner3.png'
import banner4 from './Images/banner4.jpg'
export default function Carousel() {
  useEffect(() => {
    // Ensure that Bootstrap's JS is initialized on the carousel after the component mounts
    const carouselElement = document.getElementById('carouselExampleSlidesOnly');
    const carousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 3000, // Change the slide every 1000 milliseconds
    });
  }, []);

  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    </div>
  );
}