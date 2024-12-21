import { useState } from 'react';

import { IoColorPalette } from "react-icons/io5";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";

function SideBar(props) {
    function palletehandler()
    {
        props.updateColorSchema();
    }
    

    return (
        <>
            <div className={`min-h-screen w-2/12 p-1 py-5 border-r-[0.01rem] flex flex-col justify-start gap-16 items-center  ${props.active ? 'blur-sm' : 'blur-none'} hidden sm:flex`}>
                <h1 className={`h-fit w-fit p-1 font-extrabold lg:text-4xl ${props.div_text}`}> BLOG-APP </h1>
                <div className='flex flex-col gap-4'>
                    <p className='flex gap-1 items-center cursor-pointer hover:underline'> <MdExplore /> Explore </p>
                    <p className='flex gap-1 items-center cursor-pointer hover:underline'> <RiUserCommunityFill /> Communities </p>
                    <p className='cursor-pointer flex gap-1 items-center hover:underline' onClick={palletehandler}>
                        <IoColorPalette />
                        {
                            props.text==='Change Pallete' ? 
                            props.text :
                            `${props.text}    (${props.count+1}/12)`
                        }
                    </p>
                </div>
            </div>
        </>
    );
}

export default SideBar;

//  bg-color text-color font-family border-color pallete-text