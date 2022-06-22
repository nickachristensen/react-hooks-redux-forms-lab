import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice"


function BandInput() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(bandAdded(name));
    setName('');
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <lable>Add Band</lable>
          <input type="text" onChange={handleChange} value={name} />
        </p>
        <input type="submit" />
      </form>
      <p>Form Text: {name}</p>
    </div>
  );
}

export default BandInput;

