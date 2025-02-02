import { useState } from 'react';
import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import "./Scroll.css"
import Sidepanel from "./Sidepanel";
import Searchbar from './Searchbar';
import Community from "./Community.jsx";
import Explore from "./Explore.jsx";
import Trending from "./Trending.jsx";
import Favourites from "./Favourites.jsx";
import Yourblogs from "./Yourblogs.jsx";

import {getCurrentUser} from "../../firebase/getCurrentUser.js";
import {addBlog} from "../../firebase/addBlog.js";
import { getAllBlogs } from '../../firebase/getBlog.js';

function Hero(props)
{

    const [panel,setpanel] = useState(false);
    const [search,setSearch] = useState(false);
    const [menu,setMenu] = useState(true);
    const [close,setClose] = useState(false);
    const [blog,setBlog] = useState(null);
    const [flag,setFlag] = useState(false);
    const [currUser,setCurrUser] = useState(null);
    

    useEffect(()=>{
          const user = getCurrentUser();
          setCurrUser(user);
        },[props.session]);

        useEffect(() => 
            { 
                const fetchBlogs = async () => 
                    { 
                        const newData = await getAllBlogs(); 
                        setBlog(newData); 
                    }; 
            fetchBlogs(); 
            }, [flag]);
        

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
    
    function getBlog(value,tag)
    {
        setBlog(value);
        addBlog(currUser.id,tag,value);
        setFlag(!flag);
    }

    return(
        <>
        <div className={`w-full flex flex-col h-screen lg:w-10/12  ${props.active ? 'blur-sm' : 'blur-none'} overflow-y-scroll hide-scrollbar`}>
            {
                (panel ? <Sidepanel menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} count={props.count} text={props.text} updateColorSchema={props.updateColorSchema} color={props.bg_color} panel={panel} /> : null)
            }
            {
                (search ? <Searchbar menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} count={props.count} text={props.text} updateColorSchema={props.updateColorSchema} color={props.bg_color} panel={panel} /> : null )
            }
            
            <Routes>
                <Route path="/" element={<Community menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg}/>} />
                <Route path="/community" element={<Community menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} session={props.session} />} /> 
                <Route path="/explore" element={<Explore menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} getBlog={getBlog} editor={flag} session={props.session} />} > 
                    <Route path="/explore/trending" element={<Trending blog={blog}  border={props.border} session={props.session} currUser={currUser} />} /> 
                    <Route path="/explore/favourites" element={<Favourites border={props.border} session={props.session} currUser={currUser} />}  /> 
                    <Route path="/explore/yourblogs" element={<Yourblogs border={props.border}  session={props.session} currUser={currUser}/>}  /> 
                </Route>
            </Routes>

        </div>
        </>
    );
}

export default Hero;