import React, { useState } from 'react'
import Sidenav from '../sidebar/Sidenav';
import { MainHead } from '../header/MainHead';

const Main = ({...props}) => {
  return (
    <>
      <div className="main-wrapper">  
       <MainHead {...props}/>
      </div>
    </>
  )
}

export default Main;