import React from 'react'
import AboutSkills from './AboutSkills'

function About({ about }) {
  return (
    <div className='aboutPg grow'>
       <h1 className='aboutHeading'>About Me</h1>
      <div className='aboutDiv'>
     
        <div className='aboutDesc'>
          
          <p>{about.secondPageInfo}</p>
        </div>
        <div className='aboutImg'></div>
      </div>
      <h1 className='aboutSubHeading'>Technical skills</h1>
      <div className='skillsDiv'>
        {
          about.skills.map(s => <AboutSkills
            key={s.skill}
            color={s.color}
            skill={s.skill}
            percentage=''
          />)
        }
      </div>
    </div>
  )
}

export default About