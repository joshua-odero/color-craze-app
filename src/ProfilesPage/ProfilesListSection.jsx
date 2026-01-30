import { useState } from "react";
import usersData from "./../assets/objects.json";
import SingleUser from "./SingleUser";

function KidsProfiles () {
    const [items, setItems] = useState(usersData)
    console.log(usersData);

    return (
        <div className="bg-gray-200 rounded-2xl p-6 max-w-3xl mx-auto
                       grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">

            {items.map((item)=>(
                <SingleUser 
                key = {item.id}
                profile = {item}
                />
            ))}

        </div>
    )
}

export default KidsProfiles;