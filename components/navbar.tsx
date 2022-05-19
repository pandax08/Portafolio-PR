
import BtnMenu from "./menuButton"
import{useState} from 'react'
import Logo from "./navbarLogo"
import Menuitems from "./menuitems"
import Themebutton from "./themebutton"

export default function Navbar(){
    const[isOpen,setOpen]=useState(false)
    
  
    const handleMenu=(e:any)=>{
        let menu=document.getElementById('menu')
        isOpen?setOpen(false):setOpen(true)
        menu?.classList.toggle('hidden')
        
        
    }
    

    return(
      <nav className="max-w-full  p-2 my-2  text-black dark:text-white sticky top-0 backdrop-blur-md ">
          <div className="max-w-3xl  mx-auto">
          <div className="block w-[480px] md:hidden">
              {/* movile */}
             <div className="flex items-center justify-between ">
               <Logo></Logo>
               <div className="flex space-x-2 items-center ">
               <BtnMenu handleMenu={handleMenu} isOpen={isOpen}></BtnMenu>
               <Themebutton/>
               </div>
             </div>
              <div id="menu" className="hidden " >
                  {/* items */}
                  <ul className=" absolute block px-8 py-3 space-y-3">
                      <Menuitems></Menuitems>

                  </ul>
              </div>
          </div>
          <div className=" hidden md:flex justify-between items-center">
              {/* Desktop */}
              <Logo></Logo>
              <div >
                  {/* items */}
                  <ul className="flex space-x-3 items-center">
                    <Menuitems></Menuitems>
                    <Themebutton/>
                  </ul>
              </div>
          </div>
          </div>
          
      </nav>
    )
}






