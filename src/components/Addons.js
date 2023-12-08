import React, { useState } from 'react'
import upArrow from '../upArrow.png'
import '../styles/Addon.css'
function Addons() {
  const [query,setQuery]=useState("Yes");
  const [a,setA]=useState(0);
  const toggle=(e)=>{
    setQuery(e.target.name)
  }
  const additional =()=>{
    setA(1)
  }
  return (
    <div className='logistics'>
      <div className='party-header'>
        <img src={upArrow}alt="no img" />
        Court Reporting
      </div>
      <div style={{ marginTop: "50px",marginLeft:"70px" }} className='details'>
        <div className='small-class'><small>Will this matter plan to have a Court Reporter?</small></div>
        <div className={query==="Yes"?"green buttons":"red buttons"}>
          <button onClick={toggle} className={query==="Yes"?"sub-button green text-color-white":"sub-button back-color text-color"} name='Yes'>Yes</button>
          <button onClick={toggle} className={query==="No"?"sub-button red text-color-white":"sub-button white text-color-white"} name="No">No</button>
        </div>
      </div>
      <div className='party-header'>
        <img src={upArrow}alt="no img" />
        Additional Features
      </div>
      <div style={{ marginTop: "50px",marginLeft:"70px" }} className='details'>
        <div className='small-class'><small>Do you require interpretation?</small></div>
        <div className={query==="Yes"?"green buttons":"red buttons"}>
          <button onClick={toggle} className={query==="Yes"?"sub-button green text-color-white":"sub-button back-color text-color"} name='Yes'>Yes</button>
          <button onClick={toggle} className={query==="No"?"sub-button red text-color-white":"sub-button white text-color-white"} name="No">No</button>
        </div>
      </div>
      <div style={{ marginTop: "50px",marginLeft:"70px" }} className='details'>
        <div className='small-class'><small>Do you require CART-services?</small></div>
        <div className={query==="Yes"?"green buttons":"red buttons"}>
          <button onClick={toggle} className={query==="Yes"?"sub-button green text-color-white":"sub-button back-color text-color"} name='Yes'>Yes</button>
          <button onClick={toggle} className={query==="No"?"sub-button red text-color-white":"sub-button white text-color-white"} name="No">No</button>
        </div>
      </div>
      <div style={{ marginTop: "50px",marginLeft:"70px" }} className='details'>
        <div className='small-class'><small>Will you need a quote prior to confirmation?</small></div>
        <div className={query==="Yes"?"green buttons":"red buttons"}>
          <button onClick={toggle} className={query==="Yes"?"sub-button green text-color-white":"sub-button back-color text-color"} name='Yes'>Yes</button>
          <button onClick={toggle} className={query==="No"?"sub-button red text-color-white":"sub-button white text-color-white"} name="No">No</button>
        </div>
      </div>
          <div className="input-fields">
            <label>Please list any additional requests or considerations you might have at this time</label>
            <input type="text" />
          </div>
    </div>
  )
}

export default Addons
