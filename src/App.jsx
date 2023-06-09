import { useState,useNavigate,useEffect } from 'react'
import data from './assets/data.json'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Nav/>
      <Home data={data}/>
      <Footer/>
      



    </div>
  )
}

export default App
