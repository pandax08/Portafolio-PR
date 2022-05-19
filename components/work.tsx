import Link from "next/link"
import Title from "./Title"
import { motion } from "framer-motion"
export default function Work(){
    return(
        <div className='mt-[30px] text-black dark:text-white'>
          <Title title='Work'></Title>
           <p className='text-[18px] mt-2 text-justify'>Takuya is a freelance and a full-stack developer based in Osaka
            with a passion for building digital services/stuff he wants. He has a knack for all things
            launching products, from planning and designing all the way to solving real-life problems with code.
            When not online, he loves hanging out with his camera. Currently, he is living off of his own product
            called Inkdrop. He publishes content for marketing his products and his YouTube channel called
            "Dev as Life" has more than 100k subscribers.</p>
            <motion.button whileHover={{scale: 1.2,transition: { duration: 1 }}} className=' block px-4 py-2  dark:bg-[#5B7139] bg-[#404040] text-white rounded-md mx-auto mt-2'><Link href={'/Works'}>My Works</Link><span className='font-bold ml-2'>  &gt; </span></motion.button>
         </div>
    )
}