import { useState } from 'react';

import Sidepanel from "./Sidepanel";
import Searchbar from './Searchbar';

import { IoSearchSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Hero(props)
{
    const [panel,setpanel] = useState(false);
    const [search,setSearch] = useState(false);
    const [menu,setMenu] = useState(true);
    const [close,setClose] = useState(false);

    function menuclickhandler()
    {
        setMenu(!menu);
        setpanel(!panel);
    }
    
    function searchclickhandler()
    {
        setClose(!close);
        setSearch(!search);
    }
    
    return(
        <>
        <div className={`w-full flex flex-col min-h-screen lg:w-10/12  ${props.active ? 'blur-sm' : 'blur-none'}`}>
            {
                (panel ? <Sidepanel  count={props.count} text={props.text} updateColorSchema={props.updateColorSchema} color={props.bg_color} panel={panel} /> : null)
            }
            {
                (search ? <Searchbar count={props.count} text={props.text} updateColorSchema={props.updateColorSchema} color={props.bg_color} panel={panel} /> : null )
            }
            <div className="flex justify-between items-center px-4 py-4 border-b-[0.01rem]">
                {
                    (menu ? <MdMenu className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={menuclickhandler}/> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={menuclickhandler}/> )
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
                    (close==false ? <IoSearchSharp className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={searchclickhandler}/> : <IoMdClose className="text-4xl sm:hidden hover:bg-green-400 p-2" onClick={searchclickhandler}/>)
                }
            </div>

        </div>
        </>
    );
}

export default Hero;