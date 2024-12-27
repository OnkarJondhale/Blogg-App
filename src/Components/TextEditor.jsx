import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./Scroll.css";

import { IoMdClose } from "react-icons/io";

function TextEditor(props) {
  const [value, setValue] = useState('');
  const [tag, setTag] = useState('');


  function posthandler() {
    props.getBlog(value,tag);
    setValue(''); 
    closehandler();
  }

  function taghandler(e)
  {
    setTag(e.target.value);
  }

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  function closehandler() {
    props.bloghandler();
  }

  return (
    <>
      {
        props.flag === true ? 
          <div className="absolute top-1/2 left-1/2 sm:left-[57%] transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-xl shadow-xl shadow-black">
            {/* <p className='text-[0.7rem] font-mono text-center content-center'> Tip : For images,videos and gif's of higher height and width it is suggested to use embbed url option for better formatting </p> */}
            <IoMdClose className="absolute top-4 right-4 text-white text-2xl cursor-pointer hover:bg-pink-600 rounded-full" onClick={closehandler}/>
            <ReactQuill value={value} onChange={setValue} modules={modules} theme="snow" className="h-[30rem] w-[18rem] sm:w-[30rem] lg:w-[50rem] p-4 rounded-xl overflow-y-scroll hide-scrollbar" />
            <button className='bg-violet-900 px-2 py-1 rounded-xl cursor-pointer relative float-right mr-4 mb-2' onClick={posthandler}> Post </button>
            <select className='bg-violet-900 rounded-xl font-bold px-2 py-1 outline-none text-center content-center text-sm cursor-pointer relative ml-4 mb-2' onChange={taghandler}>
            <option className='font-bold'> Other </option>
              <option className='font-bold'> Aesthetic </option>
              <option className='font-bold'> Anime </option>
              <option className='font-bold'> Books and Literature </option>
              <option className='font-bold'> Community Spotlight </option>
              <option className='font-bold'> Art </option>
              <option className='font-bold'> Culture </option>
              <option className='font-bold'> Movies </option>
              <option className='font-bold'> Funny </option>
              <option className='font-bold'> Gaming </option>
              <option className='font-bold'> Sports </option>
              <option className='font-bold'> Music and Brands </option>
              <option className='font-bold'> Science </option>
              <option className='font-bold'> Tv shows </option>
              <option className='font-bold'> Writing </option>
            </select> 
          </div>
        : null
      }
    </>
  );
};

export default TextEditor;
