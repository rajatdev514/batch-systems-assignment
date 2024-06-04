import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className='hero'>
    <div className='textcontainer'>

    <h1>Make The Best <br />Financial Decisions</h1>
    <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet <br /> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
    <div className='buttons'>
        <div className='button1'>
        <button className="but1">Get Started <img src="/arrow.png" alt="arrow" /></button>
    </div>
    <div className='button1'>
    <button className="but2"><img className='img2' src="/play.png" alt="play" />Watch Video</button>
    </div>
    </div>
    <div>
        <img className='imgh1' src="/h1.png" alt="" />
    </div>
    </div>





    <div className='imagecontainer'>
    <div className="container">
      <div className="rings">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
      <div className="phones">
        <div className="phone phone1">
          <img src="/phone1.png" alt="Phone 1" />
        </div>
        <div className="phone phone2">
          <img src="/phone2.png" alt="Phone 2" />
        </div>
        <div className="phone phone3">
          <img src="/phone3.png" alt="Phone 3" />
        </div>
      </div>
      {/* <div className="red-patch"></div> */}
    </div>
    </div>
    </div>
    </>
  )
}

export default Hero