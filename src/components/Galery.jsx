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
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>

  )
}

export default Swipper