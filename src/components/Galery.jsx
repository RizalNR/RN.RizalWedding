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
            <img src="public/prew1.jpg" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="public/billa.jpg" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="public/rama.jpg" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="public/bgchina1.jpg" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="public/bgchina2.jpg" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="public/bgchina3.jpg" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img src="public/bgchina4.jpg" />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img src="public/bgchina5.jpeg" />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img src="public/bgduduk.jpg" />
            {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>

  )
}

export default Swipper