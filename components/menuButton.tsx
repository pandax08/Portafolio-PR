import {GiHamburgerMenu, GiSkills} from 'react-icons/gi'
import{AiOutlineClose} from 'react-icons/ai'

export default function BtnMenu({handleMenu,isOpen}:any){
    
    return(
        <div className="border border-neutral-700 rounded-md p-2 hover:bg-neutral-700 hover:text-white dark:hover:bg-neutral-800 transition-all duration-400" onClick={e=>handleMenu(e)}>{isOpen?<AiOutlineClose/>:<GiHamburgerMenu/> }</div>
    )
}