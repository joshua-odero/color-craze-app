import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getSavedColors } from "../GamePage/utils/ColorStorage";


// Component to display all saved color bookmarks as stars
function BookmarksListSection() {
  // State to hold an array of saved color objects
  const [colors, setColors] = useState([]);


  // Load saved colors from localStorage when the component mounts
  useEffect(() => {
    const savedColors = getSavedColors(); // Retrieve saved colors
    setColors(savedColors); // Update state
  }, []);


  return (
    // Outer container: flex layout to center content vertically and horizontally
    <div className="flex grow w-full py-15 my-3 items-center">
      {/* Inner container: grid of stars with border, background, rounded corners */}
      <div className="flex flex-row flex-wrap gap-x-6 border border-yellow-700 bg-gray-300 rounded-xl w-xl mx-auto px-10 h-min">
        {/* Display message if no colors are saved */}
        {colors.length === 0 && <p>No saved colors yet!</p>}


        {/* Loop through saved colors and display each as a star */}
        {colors.map((item, index) => (
          <div
            key={index} 
            className="flex justify-center items-center w-15 h-15 my-3"
          >
            {/* FontAwesome star icon with color from saved color */}
            <FontAwesomeIcon icon={faStar} size="3x" style={{ color: item.color }} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default BookmarksListSection;
