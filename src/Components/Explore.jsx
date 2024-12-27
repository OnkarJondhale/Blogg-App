import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import TextEditor from "./TextEditor.jsx";

import { IoSearchSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdTrendingUp } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";

function Explore(props) {

    const [flag, setFlag] = useState(false);

    function bloghandler() {

        if(props.session==false)
        {
            alert("Do login to continue");
            return;
        }

        setFlag(!flag);
    }

    function getBlog(value,tag) {
        props.getBlog(value,'tag');
    }

    return (
        <>
            <div>
                <div className="flex justify-between items-center px-4 py-4 border-b-[0.01rem] sm:hidden">
                    {
                        (props.menu ? <MdMenu className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.menuclickhandler} /> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.menuclickhandler} />)
                    }
                    <h1 className={`h-fit w-fit text-xl p-1 font-extrabold lg:text-4xl ${props.div_text} sm:hidden`}> BLOG-APP </h1>
                    {
                        (props.close == false ? <IoSearchSharp className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.searchclickhandler} /> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={props.searchclickhandler} />)
                    }
                </div>

                <div className="min-h-16 w-full flex justify-center items-center gap-4 border-b-[0.01rem]">
                    <NavLink to="/explore/trending"> <p className="hover:underline text-sm sm:text-lg font-mono flex gap-2 items-center"> <MdTrendingUp /> Trending </p> </NavLink>
                    <NavLink to="/explore/favourites"> <p className="hover:underline text-sm sm:text-lg font-mono flex gap-2 items-center"> <FaHeart /> Favourites </p> </NavLink>
                    <NavLink to="/explore/yourblogs"> <p className="hover:underline text-sm sm:text-lg font-mono flex gap-2 items-center"> <LiaBlogSolid /> Your Blogs </p> </NavLink>
                </div>

                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start sm:px-4">
                    <div className="relative min-h-20 w-full sm:w-[30%] flex flex-col items-center gap-2 p-4 mt-2 mb-2 rounded-xl shadow-xl shadow-zinc-800 order-1 sm:order-none">
                        <p className="text-center text-sm content-center py-2 sm:text-md">
                            Blogs are here! 👀 Blogs are a new way to create public or private spaces for hanging out with friends or discussing your interests. Start writing the blogs to share your thoughts, opinions, and much more.
                        </p>
                        <button className={`outline-none border-none font-bold ${props.div_bg} text-white rounded-xl px-2 py-1`} onClick={bloghandler}>
                            Create a Blog
                        </button>
                    </div>

                    <div className="flex flex-col w-full sm:w-[70%] order-2 sm:order-none">
                        <TextEditor getBlog={getBlog} flag={flag} bloghandler={bloghandler}/>
                        <div className="h-screen w-full flex justify-center mt-2">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Explore;
