import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IoColorPalette } from "react-icons/io5";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";

function Sidepanel(props)
{
    function palletehandler()
    {
        props.updateColorSchema();
    }

    return(
    <>
        <div className={`h-[90%] w-11/12 absolute bottom-0 z-50 flex flex-col justify-between items-start ${props.color} shadow-xl shadow-black py-4 px-2 animate-fade-right `} >
            <div className="flex flex-col text-lg items-start gap-4">
                <NavLink to="/explore/trending"> <p className='flex gap-1 items-center cursor-pointer hover:underline'> <MdExplore /> Explore </p> </NavLink>
                <NavLink to="/community"> <p className='flex gap-1 items-center cursor-pointer hover:underline'> <RiUserCommunityFill /> Community </p> </NavLink> 
                 <p className='cursor-pointer flex gap-1 items-center hover:underline' onClick={palletehandler}> 
                    <IoColorPalette />
                    {
                        props.text == 'Change Pallete' ? 
                        props.text : 
                        `${props.text} (${props.count + 1}/12)`
                    } 
                </p>
            </div>

                <div className="w-full flex justify-around items-center text-[0.8rem]">
                    <p> About </p>
                    <p> Apps </p>
                    <p> Legal </p>
                    <p> Privacy </p>
                    <p> Help </p>
                </div>
        </div>
    </>
    );
}

export default Sidepanel;