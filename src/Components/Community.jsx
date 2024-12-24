import { IoSearchSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Community(props)
{
    return(
    <>
        <div className="flex flex-col gap-2">

            <div className="flex justify-between items-center px-4 py-4 border-b-[0.01rem]">
                    {
                        (props.menu ? <MdMenu className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.menuclickhandler}/> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.menuclickhandler}/> )
                    }
                    <h1 className={`h-fit w-fit text-xl p-1 font-extrabold lg:text-4xl ${props.div_text} sm:hidden`}> BLOG-APP </h1>
                    <p className="font-bold text-lg hidden sm:block">Browse Communities</p>
                    <div className="gap-4 text-sm hidden sm:flex">
                        <button className={`outline-none border-none rounded-xlpx-1 font-bold ${props.div_bg} text-white rounded-xl px-2 py-1`}> Create a community </button>
                        <div className={`flex p-2 rounded-xl gap-4 items-center border-[0.01rem]  ${props.div_bg} text-white`}>
                            <p className="p-2 rounded-xl cursor-pointer text-xl">
                                <IoSearchSharp /> 
                            </p>
                            <input placeholder="Search Communities..." className="rounded-xl text-white min-w-60 p-1 outline-none bg-transparent "/>
                        </div>
                    </div>

                    {
                        (props.close==false ? <IoSearchSharp className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.searchclickhandler}/> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.searchclickhandler}/>)
                    }
                </div>

                <div className="min-h-screen w-full p-2 flex flex-wrap justify-center gap-4">

                <div className="min-h-96 w-full sm:h-[30rem] sm:w-[33rem]   rounded-xl flex flex-wrap justify-center items-center gap-2 ">
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] rounded-xl shadow-xl shadow-zinc-800 flex flex-col justify-between items-center">
                        <img src="aesthetic.avif" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Aesthetics</p>
                    </div>
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] rounded-xl shadow-xl shadow-zinc-800 flex flex-col justify-between items-center">
                        <img src="anime.gif" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Anime</p>
                    </div>
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] rounded-xl shadow-xl shadow-zinc-800 flex flex-col justify-between items-center">
                        <img src="books.jpg" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Books and Literature</p>
                    </div>
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] rounded-xl shadow-xl shadow-zinc-800 flex flex-col justify-between items-center">
                        <img src="communityspotlight.jpg" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Community spotlight</p>
                    </div>
                </div>

                <div className="min-h-60 w-full sm:h-[30rem] sm:w-[33rem] shadow-xl shadow-zinc-800 rounded-xl flex flex-col justify-between items-center">
                    <img src="art.webp" className="cursor-pointer h-full rounded-t-xl"/>
                    <p className="px-2 font-mono">Art</p>
                </div>

                <div className="min-h-60 w-full sm:h-[30rem] sm:w-[33rem] shadow-xl shadow-zinc-800 rounded-xl flex flex-col justify-between items-center">
                    <img src="culture.jpg" className="cursor-pointer h-full rounded-t-xl"/>
                    <p className="px-2 font-mono">Culture</p>
                </div>

                <div className="min-h-96 w-full sm:h-[30rem] sm:w-[33rem]   rounded-xl flex flex-wrap justify-center items-center gap-2 ">
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] shadow-xl shadow-zinc-800  rounded-xl flex flex-col justify-between items-center">
                        <img src="movies.gif" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Movies</p>
                    </div>
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] shadow-xl shadow-zinc-800  rounded-xl flex flex-col justify-between items-center">
                        <img src="funny.gif" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Funny</p>
                    </div>
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] shadow-xl shadow-zinc-800  rounded-xl flex flex-col justify-between items-center">
                        <img src="gaming.jpg" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Gaming</p>
                    </div>
                    <div className="min-h-60 w-full sm:h-[49%] sm:w-[49%] shadow-xl shadow-zinc-800  rounded-xl flex flex-col justify-between items-center">
                        <img src="sports.jpg" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Sports</p>
                    </div>
                </div>

                <div className="min-h-60 p-2 w-full rounded-xl flex items-center gap-2 flex-wrap sm:flex-nowrap">
                    <div className="min-h-60 w-full shadow-xl shadow-zinc-800 sm:h-[49%] sm:w-[49%] rounded-x flex flex-col justify-between items-center">
                        <img src="musicandband.gif" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Music and Brands</p>
                    </div>
                    <div className="min-h-60 w-full shadow-xl shadow-zinc-800 sm:h-[49%] sm:w-[49%] rounded-x flex flex-col justify-between items-center">
                        <img src="science.gif" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Science</p>
                    </div>
                    <div className="min-h-60 w-full shadow-xl shadow-zinc-800 sm:h-[49%] sm:w-[49%] rounded-x flex flex-col justify-between items-center">
                        <img src="tvshows.jpg" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Tv Shows</p>
                    </div>
                    <div className="min-h-60 w-full shadow-xl shadow-zinc-800 sm:h-[49%] sm:w-[49%] rounded-x flex flex-col justify-between items-center">
                        <img src="writing.jpg" className="cursor-pointer h-full rounded-t-xl"/>
                        <p className="px-2 font-mono">Writing</p>
                    </div>
                </div>
                </div>

        </div>
    </>);
}

export default Community;