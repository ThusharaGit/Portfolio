import React from 'react'
import "./contact.css"
function Contacts() {
  return (
    <div className='contactPg grow'>
      <h1 className='contactHeading'>Contact Me</h1>
      <form action="">
        <textarea placeholder='Enter your message here...' className='textArea' name="Text1" cols="100" rows="20"></textarea>
        <button className='contactBtn'><ion-icon name="send"></ion-icon></button>
      </form>
      <div className='Infobox'>
        <div className='InfoIcon Ibox'>
          <ion-icon style={{color:'rgb(47, 151, 116)'}} name="call"></ion-icon>
          <ion-icon style={{color:'rgb(192, 40, 111)'}}name="location"></ion-icon>  
          <ion-icon style={{color:'rgb(25, 77, 146)'}}name="logo-linkedin"></ion-icon>
          <ion-icon style={{color:'rgb(92, 93, 95)'}}name="mail"></ion-icon>
          <ion-icon style={{color:'rgb(4, 127, 165)'}}name="logo-facebook"></ion-icon>
       </div>
        <div className='Infodesc Ibox'>
           <h2>+49 0111 123456789</h2>
           <h2>Main Street, Munich</h2>
           <h2>abcabc@gmail.com</h2>
           <h2>https://www.aaaaaa.com</h2>
           <h2>abcdef.com</h2>
           
        </div>
      </div>

    </div>
  )
}

export default Contacts