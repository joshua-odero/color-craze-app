import { useNavigate } from "react-router-dom";
import LogoSection from "./LogoSection";

function IntroPage() {
  const navigate = useNavigate();

  // Function to start the app and go to the Profiles (Avatar Selection) page
  const handleStart = () => {
    navigate("/profiles");
  };

  return (
    <div
      // Full-screen container with background image and centered content
      className="flex justify-center items-center w-full h-screen cursor-pointer bg-cover bg-center"
      style={{ backgroundImage: "url('/background_pics/background_pic1.png')" }}
      onClick={handleStart} // Click anywhere to start
    >
      {/* LogoSection component renders the app logo */}
      <LogoSection />
    </div>
  );
}

export default IntroPage;


