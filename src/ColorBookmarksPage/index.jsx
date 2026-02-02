//Import function components
import LogoSection from "./LogoSection";
import UserNavBarSection from "./UserNavBarSection";
import BookmarksListSection from "./BookmarksListSection";
import FooterButtonSection from "./FooterButtonSection";

//Function component for rendering all components required by this page
function ColorBookmarksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/background_pics/background_pic2.png')] bg-cover">
      {/* Render imported function components */}
      <LogoSection />
      <UserNavBarSection />
      <BookmarksListSection />
      <FooterButtonSection />
    </div>
  );
}

export default ColorBookmarksPage;