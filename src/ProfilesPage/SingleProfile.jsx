function SingleUser({profile}) {

   /*  const user1 = {
        "name": "Kelcy",
        "Id": 1,
        "image": "/kids_avatars/Kelcy.png"
    } */
    
    return (
        <div className="flex flex-col items-center justify-center
                       cursor-pointer transition transform
                       hover:scale-105 active:scale-95">
            <div className="w-24 h-24 sm:w-28 sm:h-28
                           rounded-full bg-white
                           flex items-center justify-center
                           shadow-lg">
                <img src = {profile.image}
                    alt = {profile.name}
                    className="w-20 h-20 sm:w-24 sm:h-24
                               rounded-full object-cover"
                />
            </div>

            <p className="mt-2 text-sm font-semibold text-gray-700">
                <b>{profile.name}</b>
            </p>
        </div>
    )
    
}

export default SingleUser;