import React from 'react'
import Project from './Project'


function Projects({ projects }) {
  return (
    <div className='grow projectsPg'>
      <h1>My Projects</h1>
      {
        projects.map(p => <Project project={p} />)
      }
    </div>
  )
}

export default Projects