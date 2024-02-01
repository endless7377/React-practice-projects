import React from "react";
import "../output.css";

function About() {
  return (
    <div>
      <div className="text-white text-[100px] font-bold font-Istok  text-center mt-[14.56rem]">
        About Me
      </div>
      <div className="w-[1486px] text-center text-wrap mt-[11.6rem]">
        <span className="text-white text-opacity-80 text-[100px] font-bold font-Istok ">
          It's me{" "}
        </span>
        <span className="text-white text-[100px] font-bold font-Istok">
          Anant goel{" "}
        </span>
        <span className="text-white text-opacity-80 text-[100px] font-bold font-Istok">
          making this <br />
          website for practice purposes .
        </span>
      </div>
    </div>
  );
}
export default About;
