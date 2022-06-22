import React, { useState } from "react";



function BandInput({ onBandSubmit }) {
  const [name, setName] = useState('');
  

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onBandSubmit(name);
    setName("")
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

