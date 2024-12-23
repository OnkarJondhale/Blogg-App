import { IoMdClose } from "react-icons/io";

function DoLogin(props)
{
    function signupclickhandler()
    {
        props.updateActive();
        props.updateLogin();
    }

    function loginclickhandler()
    {
        props.updateActive();
    }
    
    return(
    <>
        <div className={`min-h-28 w-full animate-fade-down bg-violet-500 fixed bottom-0 flex flex-col justify-center gap-2 items-center ${props.active ? 'blur-sm' : 'blur-none'}`}>
            <p className="font-mono text-sm sm:text-lg text-center content-center">Join the BLOG-APP to post your thoughts,opinions and join communities to make friends </p>
            <div className="flex gap-4">
                <button className="sm:min-w-48 text-sm sm:text-lg p-1 sm:p-2 bg-violet-800 hover:bg-violet-700" onClick={signupclickhandler}> Sign me up </button> 
                <button className="sm:min-w-48 text-sm sm:text-lg  p-1 sm:p-2 bg-violet-400 hover:bg-violet-300" onClick={loginclickhandler}> Log in </button>
            </div>
        </div>  
    </>);
}

export default DoLogin;