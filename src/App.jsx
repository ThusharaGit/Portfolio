import { useState} from 'react'
import data from './assets/data.json'

import Home from './components/Home'
import Nav from './components/Nav'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contacts from './components/Contacts'


function App() {
  const [count, setCount] = useState(0)
  


  return (
    <div className='app'>
      <Nav/>
      <Routes>
      <Route path='/' element = {<Home data={data}/>}/> 
      <Route path='/about' element = {<About/>}/> 
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/services' element = {<Services/>}/> 
      <Route path='/contacts' element = {<Contacts/>}/> 
  
      </Routes>
    </div>
  )
}

export default App
