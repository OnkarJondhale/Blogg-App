import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom'

import { IoSearchSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Explore(props)
{
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
            
            <div className="min-h-10 w-full flex justify-center items-center gap-4 border-b-[0.01rem]"> 
                <NavLink to="/explore/trending"> <p className="hover:underline"> Trending </p> </NavLink> 
                <NavLink to="/explore/favourites"> <p className="hover:underline"> Favourites </p> </NavLink>
                <NavLink to="/explore/yourblogs"> <p className="hover:underline"> Your Blogs </p> </NavLink>
            </div>
            
            <div className="h-screen w-full">
                <Outlet />
            </div>
            
        </div>
    </>);
}

export default Explore;