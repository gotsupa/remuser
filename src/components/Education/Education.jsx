import React from 'react'

import * as Styled from './Education.styled'

function Education() {
  return (
    <Styled.Education>
      <div className='header'>
        <h1>Education</h1>
        <div className='rectangle' />
      </div>

      <div className='content'>
        <ul className='all-school-year'>
          <li className='school-year'>
            <div className='wrap-year'>
              <h2>2016</h2>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div className='circle'>
                  <div className='fill' />
                </div>
                <div className='line' />
              </div>
              <div>
                <h2>Bachelor's Degree</h2>
                <ul>
                  <li>
                    King Mongkut's University of Technology Thonburi (KMUTT)
                  </li>
                  <li>Electrical Engineering (four-year)</li>
                  <li>GPAX 3.25 (Second-class honors)</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='school-year'>
            <div className='wrap-year'>
              <h2>2013</h2>
              <div className='circle'>
                <div className='fill' />
              </div>
              <div>
                <h2>High Schools</h2>
                <ul>
                  <li>Phrapathom Witthayalai School</li>
                  <li>GPAX 3.90</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='school-year'>
            <div className='wrap-year'>
              <h2>2010</h2>
              <div className='circle'>
                <div className='fill' />
              </div>
              <div>
                <h2>Secondary Schools</h2>
                <ul>
                  <li>Phrapathom Witthayalai School</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Styled.Education>
  )
}

export default Education
