import React, { useState } from 'react'
import upArrow from '../upArrow.png'
import '../styles/PartyInfo.css'
import Fields from './Fields';
function PartyInfo() {
  const [query,setQuery]=useState("Yes");
  const [a,setA]=useState(0);
  const toggle=(e)=>{
    setQuery(e.target.name)
  }
  const additional =()=>{
    setA(1)
  }
  return (
    <div className='party'>

      <div className='party-header'>
        <img src={upArrow}alt="no img" />
        Booking Party Info<span style={{marginLeft:"10px"}}><small>(Enter as soon as possible)</small></span>
      </div>
      <div className='details'>
        <div className='small-class'><small>Use information on account?</small></div>
        <div className={query==="Yes"?"green buttons":"red buttons"}>
          <button onClick={toggle} className={query==="Yes"?"sub-button green text-color-white":"sub-button back-color text-color"} name='Yes'>Yes</button>
          <button onClick={toggle} className={query==="No"?"sub-button red text-color-white":"sub-button white text-color-white"} name="No">No</button>
        </div>
      </div>
      <Fields/>
      <div style={{marginTop:"30px"}} className='party-header'>
        <img src={upArrow}alt="no img" />
        Opposition Party Information<span style={{marginLeft:"10px"}}><small>(Enter as soon as possible)</small></span>
      </div>
      <Fields/>
      {a===1?<Fields cancel={a}/>:""}
      <button className='party-btn' onClick={additional}>+ ADDITIONAL PARTIES</button>
    </div>
  )
}

export default PartyInfo
