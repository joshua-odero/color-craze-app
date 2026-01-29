import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function BookmarksListSection() {
  return (
    <div className="flex grow w-full py-15 my-3 items-center border">
      <div className="flex flex-row flex-wrap gap-x-6 border border-yellow-700 bg-gray-300 rounded-xl w-xl mx-auto px-10 h-min">
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon icon={faStar} size="3x" style={{ color: "brown" }} />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{ color: "yellow" }}
          />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{ color: "orange" }}
          />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{ color: "purple" }}
          />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{ color: "magenta" }}
          />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{ color: "rebeccapurple" }}
          />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon icon={faStar} size="3x" style={{ color: "brown" }} />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{ color: "yellow" }}
          />
        </div>
        <div className="flex justify-center items-center border border-red-700 w-15 h-15 my-3">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            style={{ color: "orange" }}
          />
        </div>
      </div>
    </div>
  );
}

export default BookmarksListSection;
