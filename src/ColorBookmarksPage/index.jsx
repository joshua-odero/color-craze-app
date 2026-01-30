import LogoSection from "../MainComponents/LogoSection";
import UserNavBarSection from "../MainComponents/UserNavBarSection";
import BookmarksListSection from "./BookmarksListSection";
import FooterButtonSection from "./FooterButtonSection";

function ColorBookmarksPage() {
  return (
    <div className="min-h-screen flex flex-col border-3 bg-[url('/background_pics/background_pic2.png')] bg-cover">
      <LogoSection />
      <UserNavBarSection />
      <BookmarksListSection />
      <FooterButtonSection />
    </div>
  );
}

export default ColorBookmarksPage;