import React from 'react';
import Hailey from '/kids_avatars/Hailey.png';

function UserNavBarSection() {
  return (
    <div className="flex items-center justify-center w-full py-5 gap-x-1.5  border">
      <div className="border w-12 h-12 rounded-full p-1">
        <img src={Hailey} alt="kid_avatar" />
      </div>
      <div className="flex items-center justify-center bg-white font-bold px-3 py-1 border">
        Welcome, [Name]
      </div>
      <div className="flex items-center justify-center border">
        <button className="bg-orange-400 rounded-sm w-30 px-3 py-1 font-bold cursor-pointer border">
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserNavBarSection