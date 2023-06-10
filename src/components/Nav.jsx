import React from 'react'
import { useState } from 'react';
import NavigateBtn from './NavigateBtn';

function Nav() {

  const [currentItem, setCurrentItem] = useState()


  return (
    <div className='nav'>

      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        item="Home"
        name="home"
        color="rgb(250, 117, 139)"
      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        item="About"
        name="person"
        color="rgb(86, 189, 175)"
      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        item="Projects"
        name="create"
        color="rgb(233, 170, 88)"
      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        item="Services"
        name="briefcase"
        color="rgb(80, 81, 82)"
      />
      <NavigateBtn
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        item="Contacts"
        name="chatbubble-ellipses"
        color="rgb(101, 176, 238)"
      />

    </div>

  )
}

export default Nav