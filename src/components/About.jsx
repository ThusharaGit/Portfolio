import React from 'react'
import AboutSkills from './AboutSkills'

function About({ about }) {
  return (
    <div className='aboutPg grow'>
      <div className='aboutDiv'>
        <div className='aboutDesc'>
          <h1 className='aboutHeading'>About Me</h1>
          <p>{about.secondPageInfo}</p>
        </div>
        <div className='aboutImg'></div>
      </div>
      <h1 className='aboutSubHeading'>Technical skills</h1>
      <div className='skillsDiv'>
        <AboutSkills
          color='salmon'
          skill='Html'
          percentage=''
        />

        <AboutSkills
          color='rgb(88, 150, 150)'
          skill='CSS'
          percentage=''
        />

        <AboutSkills
          color='rgb(113, 115, 116)'
          skill='Js'
          percentage=''
        />

        <AboutSkills
          color='rgb(235, 92, 111)'
          skill='React'
          percentage=''
        />
        <AboutSkills
          color='rgb(57, 136, 110)'
          skill='Git'
          percentage=''
        />
        <AboutSkills
          color='rgb(226, 199, 126)'
          skill='UI/UX'
          percentage=''
        />
      </div>
    </div>
  )
}

export default About