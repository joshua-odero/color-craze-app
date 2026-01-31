/*

SingleUser component renders a single kid's profile
Props:
    -> profile: an object containing the user's name, ID, and image
    -> onSelect: function to call when the avatar is clicked

*/

function SingleUser({ profile, onSelect }) {

    /*
        Example of profile object structure
        const user1 = {
            "name": "Kelcy",
            "Id": 1,
            "image": "/kids_avatars/Kelcy.png"
        }
    */

    return (
        <>
        {/*Outer container: centers content, makes the element clickable, and
        adds hover/active animations for interactivity */}
        <div
            onClick={onSelect}
            className="flex flex-col items-center justify-center
                       cursor-pointer transition transform
                       hover:scale-105 active:scale-95"
        >
            {/*Circle container for the avatar with shadow and responsive sizing*/}
            <div className="w-24 h-24 sm:w-28 sm:h-28
                           rounded-full bg-white
                           flex items-center justify-center
                           shadow-lg">
                {/*User's profile image: includes dynamic source from profile object
                and alternate text for image -> for accessibility*/}
                <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-20 h-20 sm:w-24 sm:h-24
                               rounded-full object-cover"
                />
            </div>

            {/*User's name displayed below the avatar*/}
            <p className="mt-2 text-sm font-semibold text-gray-700">
                <b>{profile.name}</b>
            </p>
        </div>
        </>
    );
}

// Export the SingleUser component for use in other parts of the app
export default SingleUser;
