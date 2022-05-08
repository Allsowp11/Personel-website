export const Test = () => {
    return(
    <div className="w-full h-screen flex">
        <div className="w-10/12 bg-[#1a1e2b] flex  flex-col space-y-20  py-10">
            <div className="flex flex-row space-x-4 justify-center">
                <div>

                </div>
                <div className="text-3xl font-light text-[#7a94f3] flex items-center">
                    Ders: Allah ve Kuran-ı kerim
                </div>
                <div className="items-center flex text-3xl text-[#7a94f3]">
                    -
                </div>
                <div className="w-64 text-3xl font-light text-[#7a94f3] flex items-center">
                    geçen süre: 31.31
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className="w-2/12 h-full bg-[#121721] flex flex-col space-y-10 py-4 px-5 ">
            <div className="h-1/6 flex flex-col space-y-2">
                <div className="text-center text-[#7a94f3] text-xl">Kullanıcılar</div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-4">
                        <img src="https://images.wallpaperscraft.com/image/single/landscape_mountains_sun_140434_300x168.jpg" alt="" className="border-2 rounded-full w-10 h-10"/>                        
                        <h1 className="truncate flex items-center text-center text-lg text-white">Allsowp11</h1>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <img src="https://images.wallpaperscraft.com/image/single/landscape_mountains_sun_140434_300x168.jpg" alt="" className="border-2 rounded-full w-10 h-10"/>                        
                        <h1 className="truncate flex items-center text-center text-lg text-white">CaptainAdorable</h1>
                    </div>
                </div>
            
            </div>
            <div className="h-4/6 flex flex-col space-y-1" >
                <h1 className=" text-center text-[#7a94f3] text-lg">Chat</h1>
                <div className="h-full bg-[#1a1e2b] border-2 border-[#7a94f3] rounded-2xl">

                </div>
            </div>
            <div className="h-1/6 flex flex-col space-y-4 justify-center items-center">
                <input type="text" className="focus:outline p-2 h-3/6 w-full bg-[#1a1e2b] border-2 border-[#7a94f3] rounded-2xl"/>
                
                <button className="h-2/6 text-xl bg-[#1a1e2b] text-white transistion delay-100 duration-100 w-full hover:bg-[#121721] hover:w-44 border-r-4 border-l-4 border-[#7a94f3] rounded-2xl">
                    gönder
                </button>
            
            </div>
        </div>
    </div>
    )

}