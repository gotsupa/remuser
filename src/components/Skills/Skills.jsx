import React from 'react'

import Icons from '../../assets/icons'

import * as Styled from './Skills.styled'

function Skills() {
  return (
    <Styled.Skills>
      <div className='header'>
        <h1>Technical Skills</h1>
      </div>

      <div className='about-content'>
        <div className='content'>
          <h2>
            Dolor sit amet, consectetur adipiscing elit viverra tristique
            placerat in massa consectetur
          </h2>
          <p>test</p>
        </div>

        <div className='skill-sets'>
          <div>
            <div className='program-icon'>
              <div className='image-container'>
                <img src={Icons.TypeScript} alt='ts-icon' />
              </div>
              <div className='image-container'>
                <img src={Icons.Golang} alt='golang-icon' />
              </div>
            </div>
            <p>Programming Languages</p>
          </div>
          <div>
            <div className='program-icon'>
              <div className='image-container'>
                <img src={Icons.NodeJS} alt='nodejs-icon' />
              </div>
              <div className='image-container'>
                <img src={Icons.ExpressJS} alt='expressjs-icon' />
              </div>
              <div className='image-container'>
                <img src={Icons.Golang} alt='golang-icon' />
              </div>
              <div className='image-container'>
                <img src={Icons.MySQL} alt='mysql-icon' />
              </div>
            </div>
            <p>Backend Development techstacks</p>
          </div>
          <div>
            <div className='program-icon'>
              <div className='image-container'>
                <img src={Icons.React} alt='react-icon' />
              </div>
              <div className='image-container'>
                <img src={Icons.Recoil} alt='Recoil-icon' />
              </div>
            </div>
            <p>Frontend Development techstacks</p>
          </div>
        </div>
      </div>
    </Styled.Skills>
  )
}

export default Skills
