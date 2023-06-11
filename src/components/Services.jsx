import React from 'react'
import { useNavigate } from 'react-router-dom';


function Services({ data }) {

  const navigate = useNavigate()

  return (
    <div className='grow servicesPg'>
      <h1 style={{fontSize:'2.5em'}}>My Services</h1>
      <div className='servicesDiv'>
        {data[4].map(({name, desc, color}) =>
          <div className='card' key={name} style={{ backgroundImage: `linear-gradient(45deg, ${color})` }} >
            <h2 style={{color:'white'}}>{name}</h2>
            <h4>{desc}</h4>
            <button className='serviceBtn' onClick={() => navigate('/contacts')}>Contact Me</button>
          </div>)}
      </div>

    </div>
  )
}

export default Services