import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import themebutton from '../components/themebutton'
import { ThemeContext } from '../hooks/themeContext'



function MyApp({ Component, pageProps }: AppProps) {
  const [contexttheme,setContextTheme]=useState('light')
  return(

    <AnimatePresence exitBeforeEnter>
      <ThemeContext.Provider value={{contexttheme,setContextTheme}}>
     <Component {...pageProps} />
     </ThemeContext.Provider>
     </AnimatePresence>
  )
}

export default MyApp
