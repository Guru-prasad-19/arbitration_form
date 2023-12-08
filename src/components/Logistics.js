import React, { useState } from "react";
import upload from "../upload.png";
import "../styles/Logistics.css";
import upArrow from "../upArrow.png";
function Logistics() {
  const [query, setQuery] = useState("Yes");
  const [a, setA] = useState(0);
  const toggle = (e) => {
    setQuery(e.target.name);
  };
  const additional = () => {
    setA(1);
  };
  arbitrationformguru.netlify.app


  return (
    <div className="logistics">
      <div className="party-header">
        <img src={upArrow} alt="no img" />
        Basic Logitics
      </div>
      <div className="smaller">
        <p>
          <small>Upload Cover Page (optional)</small>
        </p>
        <small>
          <div>
            <span>Choose a file</span>
            <span>
              <img src={upload} alt="nope" />
            </span>
          </div>
        </small>
      </div>
      <div className="total">
        <div className="three-field">
          <div className="input-fields">
            <label>Style of cause</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Court File</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Booking dates</label>
            <input type="date" />
          </div>
        </div>
        <div className="three-field">
          <div className="input-fields">
            <label>Start time</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>End time</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Time Zone</label>
            <input type="text" />
          </div>
        </div>
        <div className="logis-two-field">
          <div className="input-fields">
            <label>Arbitator(s)</label>
            <input type="text" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label>Name of Represented Client</label> */}
            <input type="text" />
          </div>
        </div>
        <div className="logis-two-field">
          <div className="input-fields">
            {/* <label>Role</label> */}
            <input type="text" placeholder="Add Additional arbitrator" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label>Name of Represented Client</label> */}
            <input type="text" />
          </div>
        </div>
        <div style={{ marginTop: "50px",marginLeft:"70px" }} className="details">
          <div className="small-class">
            <small>Tribunal secretary?</small>
          </div>
          <div className={query === "Yes" ? "green buttons" : "red buttons"}>
            <button
              onClick={toggle}
              className={
                query === "Yes"
                  ? "sub-button green text-color-white"
                  : "sub-button back-color text-color"
              }
              name="Yes"
            >
              Yes
            </button>
            <button
              onClick={toggle}
              className={
                query === "No"
                  ? "sub-button red text-color-white"
                  : "sub-button white text-color-white"
              }
              name="No"
            >
              No
            </button>
          </div>
        </div>
        <div className="logis-two-field">
          <div className="input-fields">
            <label>Witness(es)</label>
            <input type="text" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label>Name of Represented Client</label> */}
            <input type="text" />
          </div>
        </div>
        <div className="logis-two-field">
          <div className="input-fields">
            {/* <label>Role</label> */}
            <input type="text" placeholder="Add Additional witness" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label>Name of Represented Client</label> */}
            <input type="text" />
          </div>
        </div>
      </div>
      <div className='party-header'>
        <img src={upArrow}alt="no img" />
        Virtual Logistics
      </div>
      <div style={{ marginTop: "50px",marginLeft:"70px" }} className="details">
          <div className="small-class">
            <small>Tribunal secretary?</small>
          </div>
          <div className={query === "Yes" ? "green buttons" : "red buttons"}>
            <button
              onClick={toggle}
              className={
                query === "Yes"
                  ? "sub-button green text-color-white"
                  : "sub-button back-color text-color"
              }
              name="Yes"
            >
              Yes
            </button>
            <button
              onClick={toggle}
              className={
                query === "No"
                  ? "sub-button red text-color-white"
                  : "sub-button white text-color-white"
              }
              name="No"
            >
              No
            </button>
          </div>
        </div>
        <div>
        <div className="input-fields">
            <label>Is there a particular VCM you work with</label>
            <input type="text" />
          </div>
        </div>
        <div className="logis-two-field">
          <div className="input-fields">
            <label>Select a virtual platform</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Number of virtual breakout rooms</label>
            <input type="text" />
          </div>
        </div>
        <div style={{ marginTop: "50px",marginLeft:"70px" }} className="details">
          <div className="small-class">
            <small>Do you need us to provide Document Managing Services?</small>
          </div>
          <div className={query === "Yes" ? "green buttons" : "red buttons"}>
            <button
              onClick={toggle}
              className={
                query === "Yes"
                  ? "sub-button green text-color-white"
                  : "sub-button back-color text-color"
              }
              name="Yes"
            >
              Yes
            </button>
            <button
              onClick={toggle}
              className={
                query === "No"
                  ? "sub-button red text-color-white"
                  : "sub-button white text-color-white"
              }
              name="No"
            >
              No
            </button>
          </div>
          
        </div>
        <div className="input-fields">
            <label>Do you have any special accomodations for your booking that our I.T. team can look into prior to start date?</label>
            <input type="text" />
          </div>
    </div>
  );
}

export default Logistics;
