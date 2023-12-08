import React from "react";
import "../styles/Fields.css";
function Fields(props) {
  console.log(props);
  if (props.cancel===1) {
    return (
      <div>
        <button className="cancel-btn">X ADDITIONAL PARTIES</button>
        <div className="three-field">
          <div className="input-fields">
            <label> Firm Name</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Booking Contact Name</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Phone Number (No spaces)</label>
            <input type="text" />
          </div>
        </div>
        <div className="three-field">
          <div className="input-fields">
            <label>Billing Address</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Zip/Postal Code </label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Country/City</label>
            <input type="text" />
          </div>
        </div>
        <div className="two-field">
          <div className="input-fields">
            <label>Role</label>
            <input type="text" />
          </div>

          <div className="input-fields">
            <label>Name of Represented Client</label>
            <input type="text" />
          </div>
        </div>
        <div className="two-fields">
          <div className="input-fields">
            <label>Lead counsel(s) Information</label>
            <input type="text" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label> Firm Name</label> */}
            <input type="text" />
          </div>
        </div>
        <div className="two-fields">
          <div className="input-fields">
            {/* <label> Firm Name</label> */}
            <input type="text" placeholder="Add Additional Counsel" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label> Firm Name</label> */}
            <input type="text" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="three-field">
          <div className="input-fields">
            <label> Firm Name</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Booking Contact Name</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Phone Number (No spaces)</label>
            <input type="text" />
          </div>
        </div>
        <div className="three-field">
          <div className="input-fields">
            <label>Billing Address</label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Zip/Postal Code </label>
            <input type="text" />
          </div>
          <div className="input-fields">
            <label>Country/City</label>
            <input type="text" />
          </div>
        </div>
        <div className="two-field">
          <div className="input-fields">
            <label>Role</label>
            <input type="text" />
          </div>

          <div className="input-fields">
            <label>Name of Represented Client</label>
            <input type="text" />
          </div>
        </div>
        <div className="two-fields">
          <div className="input-fields">
            <label>Lead counsel(s) Information</label>
            <input type="text" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label> Firm Name</label> */}
            <input type="text" />
          </div>
        </div>
        <div className="two-fields">
          <div className="input-fields">
            {/* <label> Firm Name</label> */}
            <input type="text" placeholder="Add Additional Counsel" />
          </div>
          <p>...</p>
          <div className="input-fields">
            {/* <label> Firm Name</label> */}
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default Fields;
