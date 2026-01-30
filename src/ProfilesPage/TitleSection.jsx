// Header component displays the title section of the page
function Header() {

    // The component returns JSX that defines the UI structure 
    return (
        <>
        {/*Outer container: centers content horizontally and vertically and adds vertical padding*/}

        <div className="flex items-center justify-center w-screen py-5">

            {/*Inner container: adds a border, padding, and background color*/}

            <div className="border px-3 py-2 bg-orange-400 ">
                <h1 className="text-3xl font-bold">Select kid's profile</h1>
            </div>
        </div>
        </>
    )
    
}

// Export the Header component so that it can be used in other files
export default Header;