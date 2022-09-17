import React from 'react'

import precise from '../../assets/icons/icon_precise_v2.png'
import responsive from '../../assets/icons/icon_responsive_v2.png'
import secure from '../../assets/icons/icon_secure_v2.png'

import * as Styled from './About.styled'

export default function About() {
  return (
    <Styled.About>
      <div className='header'>
        <h1>About</h1>
      </div>

      <div className='about-content'>
        <div className='content'>
          <h2>
            Dolor sit amet, consectetur adipiscing elit viverra tristique
            placerat in massa consectetur
          </h2>
          <p>test</p>
        </div>
        <div className='image'>
          <div>
            <img src={precise} alt='precise' />
            <p>PIXEL PRECISE</p>
          </div>
          <div>
            <img src={secure} alt='secure' />
            <p>SECURE</p>
          </div>
          <div>
            <img src={responsive} alt='responsive' />
            <p>RESPONSIVE</p>
          </div>
        </div>
      </div>
    </Styled.About>
  )
}
