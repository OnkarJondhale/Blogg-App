import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./Scroll.css";

import { IoMdClose } from "react-icons/io";

function TextEditor(props) {
  const [value, setValue] = useState('');

  function posthandler() {
    props.getBlog(value);
    setValue(''); 
    closehandler();
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
          <div className="absolute top-1/2 left-1/2 sm:left-[57%] transform -translate-x-1/2 -translate-y-1/2 bg-violet-600 rounded-xl shadow-xl shadow-black">
            <IoMdClose className="absolute top-4 right-4 text-white text-2xl cursor-pointer hover:bg-pink-600 rounded-full" onClick={closehandler}/>
            <ReactQuill value={value} onChange={setValue} modules={modules} theme="snow" className="h-[30rem] w-[18rem] sm:w-[30rem] lg:w-[50rem] p-4 rounded-xl overflow-y-scroll hide-scrollbar" />
            <button className='bg-violet-900 px-2 py-1 rounded-xl cursor-pointer relative float-right mr-4 mb-2' onClick={posthandler}> Post </button>
          </div>
        : null
      }
    </>
  );
};

export default TextEditor;
