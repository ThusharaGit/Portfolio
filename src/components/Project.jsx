import React from 'react'
import "./project.css"

function Project({ project }) {
    return (
        <div className='project'>
            <div>{project.name}</div>
            <div className='projectBtn'>
                <a href={project.git}><div className='Gimgdiv' /></a>
                <a href={project.netlify}><div className='Nimgdiv' /></a>
            </div>
        </div>
    )
}

export default Project