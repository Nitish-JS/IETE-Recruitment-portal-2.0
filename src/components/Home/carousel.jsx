import React ,{useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Techcse from '../../images/4804443.jpg'
import './carousel.css'
import AlternateTimeline from './Timeline'


const Carousel_domain = () => {
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase: "linear",
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        
       
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    }

    return (
        <div className='Carousel-outer-div'>
          <h1 className='carousel-heading'>Domains</h1>
        <Slider {...settings}>
        <div className='card'>
          <div className="circle-card">
          <img src={Techcse}  className='card-img' alt="tech cse"  />
          </div>
          
          <h3 className='Domain-name' >Tech Cse</h3>
        
        </div>
        <div >
          
          <img src={Techcse}  className='card-img' alt="tech cse" />
          <h3 className='Domain-name' >Tech Cse</h3>
        </div>
        <div className='card'>
          
          <img src={Techcse}  className='card-img' alt="tech cse" />
          <h3 className='Domain-name' >Tech Cse</h3>
        </div>
        <div className='card'>
          <img src={Techcse}  className='card-img'  alt="tech cse" />
          <h3 className='Domain-name' >Tech Cse</h3></div>

        <div className='card'>
          <img src={Techcse}  className='card-img' alt="tech cse" />
          <h3 className='Domain-name' >Tech Cse</h3>
        </div>
        <div className='card' >
          <img src={Techcse}  className='card-img' alt="tech cse" />
          <h3 className='Domain-name' >Tech Cse</h3>
        </div>
        <div className='card'>
          <img src={Techcse}   className='card-img' alt="tech cse" />
        </div>
        <div className='card'>
          <img   className='card-img' src={Techcse} alt="tech cse" />
          <h3 className='Domain-name' >Tech Cse</h3>
        </div>
        <div className='card'>
          
          <img  className='card-img'src={Techcse} alt="tech cse"  />
          <h3 className='Domain-name' >Tech Cse</h3>
        </div>
      </Slider>
      <h1 className='timeline-heading'>Timeline</h1>
      <AlternateTimeline />
      </div>
    )
    
}

export default Carousel_domain
