import React, { useState } from "react";

const Welcome = () => {
  const [getvale, setGetValue] = useState("");
  const handleClick = (value)=>{
      setGetValue(value)
  }
  return (
    <div>
      
      <button onClick={() => handleClick('asif')}>sfdffdsfsfd</button>
  <h1>{getvale}</h1>
    </div>
  );
};

export default Welcome;
