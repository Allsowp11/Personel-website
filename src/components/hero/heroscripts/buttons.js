export const Buttons = (info) =>{
    return(
        <div className={`${info.timeout ? "visible" : "invisible"} flex flex-row space-x-4 px-10`}>
            <button className="text-2xl text-[#c4c4c4] hover:bg-[#171716] bg-[#262624] px-5 py-3 rounded-2xl">
                Blogs
            </button>
            <button className="text-2xl border-[#787777] hover:border-[#9c9a9a] text-[#A7D129] border-2 px-3 py-3 rounded-2xl">
                about me
            </button>
        </div>

    )
}