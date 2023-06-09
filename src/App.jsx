import { useState,useNavigate,useEffect } from 'react'
import data from './assets/data.json'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Nav/>
      <div className='mainDiv'>
      <h1 className='welcome'>Hello<span className='exclamation'>!</span></h1>
      <h2 className='intro'>I'm <span className='fullName'>{data[1].fullName}</span> </h2>
      <h1 className='position'>Frontend Developer</h1>
      <p>{data[2].firstPageInfo}</p>
      </div>
      



    </div>
  )
}

export default App
