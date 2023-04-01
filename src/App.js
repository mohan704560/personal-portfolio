import React from "react";
import writingImg from "./assets/hand-writing.jpg"

const App = ()=>{

    return <div className="flex justify-center">
      <img src={writingImg} alt="handWritingImage" className="w-full h-[60vh]"/>
      <div className="w-full h-[60vh]"></div>
    </div>
}

export default App;
