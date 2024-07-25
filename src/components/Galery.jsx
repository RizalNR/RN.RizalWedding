import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Swipper() {
  return (


    <div className='py-[30px] px-[50px]'>
      <Carousel
      autoPlay 
      infiniteLoop
      showStatus={false}
      >
        <div>
            <img src="/billa.jpg" alt="slide1"/> 
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="/rama.jpg" alt="slide2"/>
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="/prew1.jpg" alt="slide3"/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="/Frame 1.jpg" alt="slide4"/>
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="/Frame 2.jpg" alt="slide5"/>
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="/Frame 3.jpg" alt="slide6"/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="/Frame 4.jpg" alt="slide7"/>
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="/Frame 5.jpg" alt="slide8"/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="/Frame 6.jpg" alt="slide9"/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>

  )
}

export default Swipper