import React from 'react'
import "./project.css"

function Project({ project }) {
    
    return (
        <>
           
            <div className='project'>
                <div>{project.name}</div>
                <a href={project.git}>Github</a>
                <br />
                <a href={project.netlify}>Netlify</a>
                <br />
                
            
            </div>
        </>

    )
}

export default Project