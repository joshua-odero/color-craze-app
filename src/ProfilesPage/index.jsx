
/*
ProfileSection component serves as the main container for the profiles page
It combines the header and the grid of kid profiles into one section
*/

import Header from "./TitleSection";
import KidsProfiles from "./ProfilesListSection";

function ProfileSection() {
  return (
    <>
      {/* Outer container: full screen with background image */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/background_pics/background_pic1.png')" }}
      >
        {/* Page header */}
        <Header />

        {/* Grid of kid profiles */}
        <div className="flex grow items-center justify-center">
          <KidsProfiles />
        </div>
      </div>
    </>
  );
}

// Export ProfileSection so it can be used elsewhere in the app
export default ProfileSection;
