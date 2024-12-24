import { useState } from "react";

import "./Scroll.css"
import Blog from "./Blog";


function Trending(props)
{

    return(
        <>
          <div className="h-screen w-full sm:w-2/3 overflow-y-scroll hide-scrollbar flex flex-col gap-4">
               <Blog blog={props.blog} />
               <Blog blog={props.blog} />
               <Blog blog={props.blog} />
               <Blog blog={props.blog} />
               <Blog blog={props.blog} />
          </div>
        </>
    );
}

export default Trending;