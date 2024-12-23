import { useState } from 'react'
import { useEffect } from 'react'
import './App.css';

import SideBar from './Components/Sidebar.jsx';
import Hero from './Components/Hero.jsx';
import DoLogin from './Components/DoLogin.jsx';
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx"

const pallete_text = {
    0 : 'Dark Mode',
    1 : 'Light Mode',
    2 : 'Ocean Blue',
    3 : 'Forest Green',
    4 : 'Sunset Orange',
    5 : 'Midnight Purple',
    6 : 'Rose Pink',
    7 : 'Golden Yellow',
    8 : 'Sky Blue',
    9 : 'Lime Green',
    10 : 'Crimson Red',
    11 : 'Slate Gray',
    12 : 'Coffee Brown',
    13 : "Change Pallete"
};

const bg_color = {
    0 : 'bg-black text-white',
    1 : 'bg-white text-black',
    2 : 'bg-blue-500 text-white',
    3 : 'bg-green-500 text-white',
    4 : 'bg-orange-500 text-white',
    5 : 'bg-purple-500 text-white',
    6 : 'bg-pink-500 text-black',
    7 : 'bg-yellow-500 text-black',
    8 : 'bg-blue-300 text-black',
    9 : 'bg-green-300 text-black',
    10 : 'bg-red-500 text-white',
    11 : 'bg-gray-500 text-white',
    12 : 'bg-brown-500 text-white',
    13 : 'bg-slate-900 text-white'
};

const border = {
    0 : 'border-blue-800',
    1 : 'border-black',
    2 : 'border-blue-700',
    3 : 'border-green-700',
    4 : 'border-orange-700',
    5 : 'border-purple-700',
    6 : 'border-pink-700',
    7 : 'border-yellow-700',
    8 : 'border-blue-400',
    9 : 'border-green-400',
    10 : 'border-red-700',
    11 : 'border-gray-700',
    12 : 'border-brown-700',
    13 : 'border-white'
};

const div_bg = {
    0 : 'bg-blue-800',
    1 : 'bg-black',
    2 : 'bg-blue-600',
    3 : 'bg-green-600',
    4 : 'bg-orange-600',
    5 : 'bg-purple-600',
    6 : 'bg-pink-600',
    7 : 'bg-yellow-600',
    8 : 'bg-blue-400',
    9 : 'bg-green-400',
    10 : 'bg-red-600',
    11 : 'bg-gray-600',
    12 : 'bg-brown-600',
    13 : 'bg-blue-800'
};

const div_text = {
    0 : 'text-blue-800',
    1 : 'text-black',
    2 : 'text-blue-700',
    3 : 'text-green-700',
    4 : 'text-orange-700',
    5 : 'text-purple-700',
    6 : 'text-pink-700',
    7 : 'text-yellow-700',
    8 : 'text-blue-400',
    9 : 'text-green-400',
    10 : 'text-red-700',
    11 : 'text-gray-700',
    12 : 'text-brown-700',
    13 : 'text-gray-100'
};

function App() {
    const [count,setCount] = useState(13);
    const [session,setsession] = useState(false);
    const [login,setLogin] = useState(true);
    const [active,setActive] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    function updateColorSchema()
    {
        let newCount = count+1;
        if(newCount>=12)
        {
            newCount=0;
        }
        setCount(newCount);
    }

    function updateLogin()
    {
        setLogin(!login);
    }

    function updateActive()
    {
        setActive(!active);
    }

    function updateSession()
    {
        setsession(!session);
    }

    function updateIsLoggedIn()
    {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <>
            <div className={`min-h-screen w-full sm:p-2 flex ${bg_color[count]}`}>
                <SideBar text={pallete_text[count]} updateColorSchema={updateColorSchema} count={count} border={border[count]} div_bg={div_bg[count]} div_text={div_text[count]} active={active} isLoggedIn={isLoggedIn} />
                <Hero border={border[count]} div_bg={div_bg[count]} div_text={div_text[count]} bg_color={bg_color[count]} active={active} text={pallete_text[count]} updateColorSchema={updateColorSchema} count={count} />
                {
                    (active==true ?
                    login==true ? <Login updateLogin={updateLogin} updateActive={updateActive} updateIsLoggedIn={updateIsLoggedIn} updateSession={updateSession} /> : <Signup updateLogin={updateLogin} updateActive={updateActive} updateSession={updateSession} />
                    : null)
                }
                {
                    (session==false ? <DoLogin updateActive={updateActive} updateLogin={updateLogin} updateIsLoggedIn={updateIsLoggedIn} active={active} updateSession={updateSession} /> : null)
                }
            </div>
        </>
    );
}

export default App;
