import React, { useState } from "react";
import "../style.css";

function Form() {
  const [submit, setSubmit] = useState();

  const submitHandler = () => {};
  return (
    <div className="container">
      {/* <!-- Add/Edit Form (static version) --> */}
      <div className="form-container" id="awardForm">
        <h3>Add/Edit Award</h3>
        <input
          type="text"
          id="awardTitle"
          placeholder="Award Title"
          value="Fitness Champion"
        />
        <input
          type="text"
          id="awardDescription"
          placeholder="Award Description"
          value="Complete 10 workouts."
        />
        <input
          type="number"
          id="awardRequirement"
          placeholder="Requirements (e.g., 10)"
          value="10"
        />
        <button onClick={submitHandler}>Submit</button>
        <button class="clear-button">Clear</button>
      </div>
    </div>
  );
}

export default Form;
