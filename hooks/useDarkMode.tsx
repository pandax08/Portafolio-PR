import {useEffect, useState} from 'react'
import { useContext } from "react"
import { ThemeContext } from "../hooks/themeContext"

export default function useDarkMode(){
  const{contexttheme,setContextTheme}=useContext(ThemeContext)

  const[theme,setTheme]=useState(contexttheme)  
  const colorTheme = theme==="light"?"dark":"light"
  useEffect(() => {
      const root=window?.document.documentElement
      
      root.classList.remove(colorTheme)
      root.classList.add(theme)
    
     
    }, [theme])

    return [setTheme,colorTheme]
    
}