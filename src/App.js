import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [displayDogs, setDispayDogs] = useState(false);

  function handleDisplayDogs() {
    setDispayDogs(true);
  }

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      <button onClick={handleDisplayDogs}>Click Me</button>
      {displayDogs && <DogPics />}
    </div>
  );
}

export default App;
