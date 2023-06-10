import React from 'react'
import { useState } from 'react';
import NavigateBtn from './NavigateBtn';
import { useNavigate } from 'react-router-dom'


function Nav() {

  const [currentItem, setCurrentItem] = useState()
  const navigate = useNavigate()



  return (
    <div className='nav'>

      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        navigate={navigate}
        item="Home"
        name="home"
        color="rgb(250, 117, 139)"
        path='/'
        

      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        navigate={navigate}
        item="About"
        name="person"
        color="rgb(86, 189, 175)"
        path='/about'

      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        navigate={navigate}
        item="Projects"
        name="create"
        color="rgb(233, 170, 88)"
        path='/projects'
      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        navigate={navigate}
        item="Services"
        name="briefcase"
        color="rgb(80, 81, 82)"
        path='/services'
      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        navigate={navigate}
        item="Contacts"
        name="chatbubble-ellipses"
        color="rgb(101, 176, 238)"
        path='/contacts'
      />

    </div>

  )
}

export default Nav