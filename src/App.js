import React from "react";
import writingImg from "./assets/hand-writing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="flex flex-col justify-center relative">
      <img
        src={writingImg}
        alt="handWritingImage"
        className="w-full  h-[80vh] md:h-[60vh] blur-sm"
      />
      <div className="w-full h-[80vh] md:h-[60vh] absolute left-0 top-0 bg-[rgb(0,0,0,0.6)] flex">
        <div className="absolute top-8 left-8" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="w-full flex">
          <div className="w-full my-auto ">
            <p className="text-white font-bold text-center text-3xl md:text-5xl">
              Mohan Prajapati
            </p>
            <p className="text-[rgb(148,163,186)] font-thin text-center text-xl md:text-5xl mt-2">
              FULL STACK DEVELOPER
            </p>
            <p className="text-white text-center text-base md:text-5xl mt-2">
              A passionate engineer seeking a challenging position as a Full
              Stack Web Developer in a dynamic environment with opportunity of
              growth and advancement.
            </p>
            <div className="text-center">
              <button className="text-white mx-auto border border-white p-2 mt-8 ">
                DOWNLOAD MY FULL RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
