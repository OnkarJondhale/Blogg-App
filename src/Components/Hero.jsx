import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidepanel from "./Sidepanel";
import Searchbar from './Searchbar';
import Community from "./Community.jsx";
import Explore from "./Explore.jsx";
import Trending from "./Trending.jsx";
import Favourites from "./Favourites.jsx";
import Yourblogs from "./Yourblogs.jsx";

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
                (panel ? <Sidepanel menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} count={props.count} text={props.text} updateColorSchema={props.updateColorSchema} color={props.bg_color} panel={panel} /> : null)
            }
            {
                (search ? <Searchbar menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} count={props.count} text={props.text} updateColorSchema={props.updateColorSchema} color={props.bg_color} panel={panel} /> : null )
            }
            
            <Routes>
                <Route path="/" element={<Community menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg}/>} />
                <Route path="/community" element={<Community menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} />} /> 
                <Route path="/explore" element={<Explore menu={menu} close={close} menuclickhandler={menuclickhandler} searchclickhandler={searchclickhandler} div_text={props.div_text} div_bg={props.div_bg} />} > 
                    <Route path="/explore/trending" element={<Trending />} /> 
                    <Route path="/explore/favourites" element={<Favourites />} /> 
                    <Route path="/explore/yourblogs" element={<Yourblogs />} /> 
                </Route>
            </Routes>

        </div>
        </>
    );
}

export default Hero;