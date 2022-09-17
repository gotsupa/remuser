import React from 'react'

import * as Styled from './Experience.styled'

function Experience() {
  return (
    <Styled.Experience>
      <div className='header'>
        <h1>Experience</h1>
      </div>

      <div className='content'>
        <div className='wrap-year'>
          <h2>October 2021 - Present</h2>
          <div>
            <h3>Magicbox Solutions</h3>
            <ul>
              <li>
                Technician Mobile Application that could track repaired device
                area. The application has been developed by using React native
                framework and Recoil for state management.
              </li>
              <li>
                Backoffice webapp that could track repairing tasks, monitoring
                all tasks, as well as managing technicians to do a task.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Styled.Experience>
  )
}

export default Experience
