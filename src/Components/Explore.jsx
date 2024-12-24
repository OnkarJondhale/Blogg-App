import { useState } from 'react';

import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom'

import { IoSearchSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdTrendingUp } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";


function Explore(props)
{
    const [close,setClose] = useState(true);

    function closeclickhandler()
    {
        setClose(false);
    }

    return(
    <>
        <div>
             <div className="flex justify-between items-center px-4 py-4 border-b-[0.01rem] sm:hidden">

                    {
                        (props.menu ? <MdMenu className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.menuclickhandler}/> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.menuclickhandler}/> )
                    }
                    <h1 className={`h-fit w-fit text-xl p-1 font-extrabold lg:text-4xl ${props.div_text} sm:hidden`}> BLOG-APP </h1>
                    {
                        (props.close==false ? <IoSearchSharp className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.searchclickhandler}/> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.searchclickhandler}/>)
                    }
            </div>
            
            <div className="min-h-16 w-full flex justify-center items-center gap-4 border-b-[0.01rem]"> 
                    <NavLink to="/explore/trending"> <p className="hover:underline text-sm sm:text-lg font-mono flex gap-2 items-center"> <MdTrendingUp />  Trending </p> </NavLink> 
                    <NavLink to="/explore/favourites"> <p className="hover:underline text-sm sm:text-lg font-mono flex gap-2 items-center"> <FaHeart /> Favourites </p> </NavLink>
                    <NavLink to="/explore/yourblogs"> <p className="hover:underline text-sm sm:text-lg font-mono flex gap-2 items-center"> <LiaBlogSolid /> Your Blogs </p> </NavLink>
            </div>


           {
            close ? 
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="relative min-h-20 w-full sm:w-2/3 flex flex-col items-center gap-2 p-4 mt-2 mb-2 rounded-xl shadow-xl shadow-zinc-800">
                        <IoMdClose className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer hover:bg-pink-600 rounded-full" onClick={closeclickhandler} />
                        <p className="text-center text-sm content-center py-2 sm:text-md">
                            Blogs are here! 👀 Blogs are a new way to create public or private spaces for hanging out with friends or discussing your interests. Start writing the blogs to share your thoughts, opinions, and much more.
                        </p>
                        <button className={`outline-none border-none font-bold ${props.div_bg} text-white rounded-xl px-2 py-1`}> 
                            Create a Blog 
                        </button>
                    </div>
                </div> : null
           }

            
            <div className="h-screenw-full flex justify-center mt-2">
                <Outlet />
            </div>
            
        </div>
    </>);
}

export default Explore;