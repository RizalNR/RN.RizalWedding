import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Swipper() {
  return (


    <div className='p-[20px]'>
      <Carousel
      autoPlay 
      infiniteLoop
      showStatus={false}
      >
        <div>
            <img src="/prew1.jpg" alt="slide1"/> 
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="/billa.jpg" alt="slide2"/>
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="/rama.jpg" alt="slide3"/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="/bgchina1.jpg" alt="slide4"/>
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="/bgchina2.jpg" alt="slide5"/>
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="/bgchina3.jpg" alt="slide6"/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="/bgchina4.jpg" alt="slide7"/>
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="/bgchina5.jpeg" alt="slide8"/>
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="/bgduduk.jpg" alt="slide9"/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>

  )
}

export default Swipper