import React from "react";
import { useSelector } from "react-redux"
import BandInput from "./BandInput"

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);

  const bandList = bands.map((band, index) => <li key={index}>{band}</li>)

  return (
    <div>
      <BandInput />
      <ul>{bandList}</ul>
    </div>
  );
}

export default BandsContainer;
