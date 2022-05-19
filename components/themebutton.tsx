
import useDarkMode from "../hooks/useDarkMode"
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
import { useContext } from "react"
import { ThemeContext } from "../hooks/themeContext"


export default function themebutton(){
    const[setTheme,colorTheme]=useDarkMode()
    const{contexttheme,setContextTheme}=useContext(ThemeContext)
    function HandleTheme(colorTheme:any){
        setTheme(colorTheme)
        setContextTheme(colorTheme)
    }
    return(
        <div className="border border-neutral-700 rounded-md p-2 dark:hover:bg-[#5B7139] text-white dark:bg-[#5B7139]  dark:text-white bg-neutral-700 transition-all duration-400"
         onClick={()=>HandleTheme(colorTheme)}>
             {colorTheme==="light"?<BsFillSunFill/>:<BsFillMoonFill/>}
        </div>
    )
}