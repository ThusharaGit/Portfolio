import React from 'react'
import Project from './Project'


function Projects({ projects }) {
  return (
    <div className='grow projectsPg'>
      <h1 className='projectHeading' style={{fontSize:'2.5em', margin: '20px'}}>My Projects</h1>
      {
        projects.map(p => <Project key={p.name} project={p} />)
      }
    </div>
  )
}

export default Projects