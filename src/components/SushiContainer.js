import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const SUSHI_SHOWN = 4

  function handleNext() {
    setSushiIndex(sushiIndex + SUSHI_SHOWN)
  }

  const displaySushi = sushis.slice(sushiIndex, sushiIndex + SUSHI_SHOWN).map((sushi) => {
    return (
    <Sushi 
    key={sushi.id} 
    sushi={sushi}
    eatSushi={eatSushi}
    />)
  })

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton handleClick={handleNext}/>
    </div>
  );
}

export default SushiContainer;
