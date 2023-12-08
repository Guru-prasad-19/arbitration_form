import { useState } from 'react';
import './App.css';
import PartyInfo from './components/PartyInfo';
import Logistics from './components/Logistics';
import Addons from './components/Addons';
// import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [page,setPage]=useState(2);
  const changePage=()=>{
    setPage(page =>(page+1)%5);
  }
  
  return (
    <>
      <div className='btns'>
        <div>
          <input className={page===1?"btn selected":"btn"} type="button" value="1" />
          <h3  className={page===1?"selected-text":""} >
            Initial Information
          </h3>
        </div>
        <hr className={page===2 || page===1?"hr selected-lines":"hr"}/><div>
          <input className={page===2?"btn selected":"btn"} type="button" value="2" />
          <h3  className={page===2?"selected-text":""} >
            Party Information
          </h3>
        </div>
        <hr className={page===2 || page===3?"hr selected-lines":"hr"}/>
        <div>
        <input className={page===3?"btn selected":"btn"} type="button" value="3" />
          <h3  className={page===3?"selected-text":""} >
            Logistics
          </h3>
        </div>
        <hr className={page===3 || page===4?"hr selected-lines":"hr"} />
        <div>
        <input className={page===4?"btn selected":"btn"} type="button" value="4" />
          <h3 className={page===4?"selected-text":""} >
            Additional Services
          </h3>
        </div>
      </div>
      {page===2?
      (<PartyInfo/>):page===3?(<Logistics/>):<Addons/>}
      <div style={{width:"20%",margin:"0px 75%",textAlign:"center"}} >
        <button onClick={changePage} className='party-btn'>Next page</button>

      </div>
    </>
  );
  
}

export default App;
