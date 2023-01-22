import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Ian Mark Asuncion and I'm an aspiring computer engineer.
              </p>
            </div>
            <div>
              <p>
                {" "}
                My current focus is to master the skills I have right now to become 
                someone I envisioned about when I was young. Before becoming a student 
                taking up Computer Engineering, I was already fond of building and fixing
                computers thinking that it may be my calling. I'm now a graduating student
                and I can't thank my professors enough for teaching me all the valuable skills 
                I have right now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;