import React from 'react'

function AboutSkills({color, skill, percentage }) {
  return (
    <div>
        <div className='circle' style={{ border: `15px  solid ${color}` }}>
            <h2>{skill}</h2>
            <h3>{percentage}</h3>
        </div>
    </div>
  )
}

export default AboutSkills