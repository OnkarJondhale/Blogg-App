import { useState, useEffect } from "react";
import "./Scroll.css";
import Blog from "./Blog";

function Trending(props) {
  return (
    <div className="h-screen w-full sm:w-4/5 overflow-y-scroll hide-scrollbar flex flex-col gap-4">
      {props.session === true ? (
        Array.isArray(props.blog) && props.blog.length > 0 ? (
          props.blog.map((it, index) => (
            <Blog key={index} blog={it.content} border={props.border} />
          ))
        ) : (
          <p className="text-center content-center text-2xl"> No Blogs found! </p>
        )
      ) : (
        <p className="text-center content-center text-2xl"> Login to continue </p>
      )}
    </div>
  );
}

export default Trending;
