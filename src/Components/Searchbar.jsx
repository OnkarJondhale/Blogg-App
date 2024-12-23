import { IoSearchSharp } from "react-icons/io5";

function Searchbar(props)
{
    return(
    <>
        <div className={`h-[90%] w-11/12 absolute bottom-0 right-0 z-50 flex flex-col gap-4 ${props.color} shadow-xl shadow-black py-4 px-2 animate-fade-left `} >
            <div className="border-[0.01rem] rounded-xl w-full p-2 flex gap-2 items-center">
                <IoSearchSharp className="text-xl"/> 
                <input placeholder="Search Blogs..." className="outline-none w-full bg-transparent p-1" />
            </div>
            <p className="font-mono p-1 rounded-xl bg-green-600"> Trending </p>
            <div className="flex flex-col gap-2">
               
                <p> Cats </p>
                <p> Dogs </p>
                <p> Lion </p>

            </div>
        </div>
    </>)
}

export default Searchbar;