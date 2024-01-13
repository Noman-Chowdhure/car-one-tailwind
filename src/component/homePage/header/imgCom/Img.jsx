import React from 'react'
import one from '../../../../img/one.png'
import From from '../fromCom/From'
const Img = () => {
  return (
    <div className="parent sm:flex justify-around">
        <div>
        <img src={one} alt="one" />
        </div>

        <div>
          <From></From>
        </div>
    </div>
  )
}

export default Img
