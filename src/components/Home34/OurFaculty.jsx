import React from "react";
import Faculty from "./Label.jsx";
import { FacultyData_Bottom, FacultyData_Top } from "./Homedata.js";

const OurFaculty = () => {
  return (
    <div className="bg-[rgb(10,10,10)] flex flex-col h-full w-full m-0 p-0">
      <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]">
        {FacultyData_Top
          ? FacultyData_Top.map((el) => (
              <Faculty
                Name={el.Name}
                Postition={el.Postition}
                Image={el.Image}
              />
            ))
          : ""}
      </div>
      <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]">
        {FacultyData_Bottom
          ? FacultyData_Bottom.map((el) => (
              <Faculty
                Name={el.Name}
                Postition={el.Postition}
                Image={el.Image}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default OurFaculty;
