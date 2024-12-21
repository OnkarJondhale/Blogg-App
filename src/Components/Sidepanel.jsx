import { IoColorPalette } from "react-icons/io5";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";

function Sidepanel(props)
{
    function palletehandler()
    {
        props.updateColorSchema();
    }

    return(
    <>
        <div className={`h-[90%] w-11/12 absolute bottom-0 z-50 flex flex-col justify-between items-start ${props.color} shadow-xl shadow-black py-4 px-2 animate-fade-right `} >
            <div className="flex flex-col text-lg items-start gap-4">
                <p className='flex gap-1 items-center'> <MdExplore /> Explore </p>
                <p className='flex gap-1 items-center'> <RiUserCommunityFill /> Communities </p>
                <p className='cursor-pointer flex gap-1 items-center' onClick={palletehandler}>
                        <IoColorPalette />
                        {
                            props.text==='Change Pallete' ? 
                            props.text :
                            `${props.text}    (${props.count+1}/12)`
                        }
                </p>
            </div>

            <div className="flex justify-around items-center text-[0.8rem] w-full">
                <p> About </p>
                <p> Apps </p>
                <p> Legal </p>
                <p> Privacy </p>
                <p> Help </p>
            </div>
        </div>
    </>
    );
}

export default Sidepanel;