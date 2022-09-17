import React from 'react'

import MainImage from '../../assets/images/main_image.jpeg'
import ProfileImage from '../../assets/images/profile_image.jpeg'
import mySQL from '../../assets/icons/mysql.png'

import * as Styled from './Hero.styled'

export default function Hero() {
  return (
    <Styled.Hero>
      <div className='image-container'>
        {/* <img src={MainImage} /> */}
        <img src={ProfileImage} />
      </div>
      <div>
        <h1>
          Hello <br />
          I'm Supachai <br />
          Chanu
        </h1>
        <p>
          A full stack web developer who seek to find a challenge job that could
          improve technical skills and problem solving skills.
        </p>
      </div>
    </Styled.Hero>
  )
}
