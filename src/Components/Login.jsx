import { useState } from 'react'

import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { loginUser } from '../../firebase/auth';

function Login(props)
{
    
    const [takeDetail,setTakeDetail] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function loginclickhandler()
    {
        props.updateLogin();
    }

    function emailclickhandler()
    {
        setTakeDetail(!takeDetail);
    }

    function emailhandler(e)
    {
        setEmail(e.target.value);
    }

    function passwordhandler(e)
    {
        setPassword(e.target.value);
    }

    function closehandler()
    {
        props.updateActive();
    }

    function loginhandler()
    {
        loginUser(email,password);
        props.updateSession();
        props.updateActive();
        props.updateIsLoggedIn();
    }

    return(
        <>
            {
                (takeDetail==false ?
                        <div className="min-h-96 min-w-72 sm:min-w-96 bg-violet-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col justify-center gap-4 items-center p-4">
                            <IoMdClose className="absolute top-4 right-4 text-white text-2xl cursor-pointer" onClick={closehandler} />
                            <h1 className="font-extrabold text-xl"> BLOG-APP </h1>
                            <p className="font-mono text-center content-center"> Welcome to the corner of the internet.You'll never be bored again </p>
                            <div className="flex flex-col gap-2">
                                <p className="text-center content-center"> Login with </p>
                                <button className="min-w-60 bg-white text-black font-bold p-2 rounded-xl flex items-center gap-4 hover:bg-red-400"> <FcGoogle className="text-xl"/> Continue with google </button>
                                <button className="min-w-60 bg-white text-black font-bold p-2 rounded-xl flex items-center gap-4 hover:bg-red-400"> <RiAppleFill className="text-xl"/> Continue with apple </button>
                                <button className="min-w-60 bg-white text-black font-bold p-2 rounded-xl flex items-center gap-4 hover:bg-red-400" onClick={emailclickhandler}> <TfiEmail className="text-xl"/> Continue with Email </button>
                            </div>
                            <div className="text-yellow-400 hover:text-yellow-500 cursor-pointer" onClick={loginclickhandler}> Don't have account? Sign up here </div>
                        </div>
                    :
                    <div className="min-h-60 min-w-72 sm:min-w-96 bg-violet-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col justify-center gap-4 items-center p-8 shadow-lg">
                        <IoMdArrowRoundBack className="absolute top-4 left-4 text-white text-2xl cursor-pointer" onClick={emailclickhandler}/>
                        <h1 className="font-extrabold text-2xl text-white">BLOG-APP</h1>
                        <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md border-2 text-black font-bold border-white focus:outline-none focus:ring-2 focus:ring-white"  onChange={emailhandler}/>
                        <input type="password" placeholder="Enter your password" className="w-full p-2 rounded-md border-2 text-black font-bold border-white focus:outline-none focus:ring-2 focus:ring-white" onChange={passwordhandler}/>
                        <button className="w-full py-2 mt-4 bg-white text-violet-600 font-bold rounded-md hover:bg-gray-200 flex gap-1 justify-center items-center" onClick={loginhandler}> Login <GrLinkNext className='text-lg font-bold' />   </button>
                     </div>

                )
            }
        </>
    );
}

export default Login;