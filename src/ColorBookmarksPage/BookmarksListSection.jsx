import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

import { getSavedColors } from "../GamePage/utils/ColorStorage";

//Function component for rendering a list of all bookmarked colors
function BookmarksListSection() {

  // State to hold saved colors

  const [colors, setColors] = useState([]);

  // Load saved colors from localStorage when the component mounts

  useEffect(() => {

    const savedColors = getSavedColors();

    setColors(savedColors);

  }, []);

  return (

    <div className="flex grow w-full py-15 my-3 items-center">

      <div className="flex flex-row flex-wrap gap-x-6 border border-yellow-700 bg-gray-300 rounded-xl w-xl mx-auto px-10 h-min">
        {/* Check If there are no colors in the localstorage*/}
        {colors.length === 0 && <p>No saved colors yet!</p>}

        {/* 
        --->Check if there are colors in the localstorage
        --->Render by looping with map() function
        */}
        {colors.map((color, index) => (
          <div

            key={index}
            className="flex justify-center items-center w-15 h-15 my-3"
          > 
            {/* Create a star Icon with Fontawesome library */}
            <FontAwesomeIcon icon={faStar} size="3x" style={{ color }} />
          </div>

        ))}

      </div>

    </div>

  );

}

export default BookmarksListSection; //Export function component
