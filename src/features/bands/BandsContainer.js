import React from "react";
import { useDispatch, useSelector } from "react-redux"
import BandInput from "./BandInput"
import { bandAdded } from "./bandsSlice"

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleSubmit(event) {
    dispatch(bandAdded(event));
  }

  const bandList = bands.map((band, index) => <li key={index}>{band}</li>)

  return (
    <div>
      <BandInput onBandSubmit={handleSubmit}/>
      <ul>{bandList}</ul>
    </div>
  );
}

export default BandsContainer;
