import { motion } from 'framer-motion'
import profile from '../public/profile.jpg'
import Image from 'next/image'
import Oso from '../public/Oso2.png'


export default function Header(){
    return(
        <>
            <motion.div animate={{x:[0,70,0],transition:{duration:1}}}>
                <motion.div  whileHover={{x:[0,70,-30,0],transition:{duration:1}}}>
                <Image src={Oso} priority ></Image>
                </motion.div>
            </motion.div>
         <motion.div whileHover={{scale: 1.2,transition: { duration: 1 }}} className='w-full px-[50px] py-3 dark:bg-[#5B7139] rounded-md text-white   dark:text-white bg-[#404040] dark:bg-[] '>
            <h2 className='text-[16px]'>Hello, I'm an indie app developer based in Japan!</h2>
         </motion.div>
         <div className='flex space-x-11 items-center mt-5'>
          <div>
          <h1 className='text-black dark:text-white text-3xl font-bold'>Pablo Ringler Correa</h1>
           <p className='text-black dark:text-white text-md'>FullStack Developer ( Backend / Frontend )</p>
          </div>
           <div className='w-[100px] h-[100px]  rounded-full overflow-hidden  border-4 dark:border-[#313134] border-[#404040]'>
       <Image className='z-[-1]' src={profile} width={3880}  height={5184} priority></Image>
       </div>
         </div>
        </>
    )
}