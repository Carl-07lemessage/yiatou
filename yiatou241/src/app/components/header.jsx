

import { AiFillSetting } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header(){
    return(
        <div className="flex flex-col m-auto bg-gray-100 w-[80%] p-4 rounded-xl">
            <div className="flex items-start space-x-3 w-full border-b-2 border-white p-2">
            <AiFillSetting className="w-5 h-5 " />
            <p>Paramètre Général</p>
            </div>
         
            <form className="grid grid-cols-2 space-x-3 mt-5 " action="" method="post"> 
                <div className="">
                <p>Meta Title</p>
                <input className="w-full p-2 mt-2 rounded-md px-3" type="text" value="" placeholder="Title" />
                </div>

                <div  className="">
                <p>Meta Tag Keyword</p>
                <input  className="w-full p-2 mt-2 rounded-md px-3" type="text" value="" placeholder="Entrer le mot" />
                </div>
            </form>
           
        </div>
    )
}