import LogoSection from "./LogoSection"; //Import LogoSection function

//Function component for the intro page
function IntroPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
        {/* Render the LogoSection function component here */}
        <LogoSection />
    </div>
  )
}

export default IntroPage; //Export IntroPage function to be used in App.jsx