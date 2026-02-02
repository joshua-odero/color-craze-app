/*

KidsProfile component renders a grid of kid profiles.
It uses a SingleUser component to display each individual profile.

Imports:
    -> useState: React hook to manage state
    -> usersData: JSON file containing an array of user objects
    -> SingleUser: child component for displaying each profile

*/

import { useState } from "react";
import usersData from "./../assets/objects.json";
import SingleUser from "./SingleProfile";
import { useNavigate } from "react-router-dom";

function KidsProfiles () {

    const navigate = useNavigate();

    // State hook to store list of user profiles - initially set to the imported usersData
    const [items, setItems] = useState(usersData)

    // Debugging: log the data to console
    console.log(usersData);

    // Handle avatar selection: pass avatar image + name to GamePage
    const handleSelectProfile = (profile) => {
  localStorage.setItem("avatar", profile.image);
  localStorage.setItem("name", profile.name);
    // Navigate to game
    navigate("/game");
    };

    return (
        <>
        {/*Outer container:
            -> sets background, padding, rounded corners
            -> limits max width and centers it horizontally
            -> uses CSS Grid to display profile cards responsively*/}

        <div className="bg-gray-200 rounded-2xl p-6 max-w-3xl mx-auto
                       grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">

            {/*Map over each user in items state to render a SingleUser component
               Includes unique key for React rendering and pass profile data as prop*/}

            {items.map((item)=>(
                <SingleUser
                    key={item.id}
                    profile={item}
                    onSelect={() => handleSelectProfile(item)}
                />
            ))}

        </div>
        </>
    );
}

// Export KidsProfiles for use in other parts of the app
export default KidsProfiles;
