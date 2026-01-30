/*

ProfileSection component serves as the main container for the profiles page
It combines the header and the grid of kid profiles into one section

Imports:
    -> Header: displays the page title
    -> KidsProfiles: displays all kids profiles in a responsive grid
    -> SingleUser: used initially for debugging purposes

*/

import Header from "./Header";
import KidsProfiles from "./MultipleUsers";
//import SingleUser from "./SingleUser";

function ProfileSection () {

    return (
        <>
        {/*Outer container for the entire profile section*/}
        <div>
            {/*Page header*/}
            <Header />

            {/*Grid of kid profiles*/}
            <KidsProfiles />
        </div>
        </>
    ); 
}

// Export ProfileSection so it can be used elsewhere in the app
export default ProfileSection;