import Title from "./Title";
import { motion } from "framer-motion";
import {Biography} from '../helpers/data.js'

export default function Bio(){
    return(
        <div>
           <div  className='mt-[30px] text-black dark:text-white'>
             <Title title='Biography'></Title>
           </div>
            <div className='mt-[20px]'>
             <table className=' text-black text-[15px] dark:text-white table-auto text-justify'>
               <thead></thead>
               <tbody>
               {Biography.map(bio => (
                 <tr key={bio.id} className='h-[50px] hover:bg-[#404040]  dark:hover:bg-[#5B7139]   hover:text-white  transition-all duration-200'>
                  <td className='px-3'>{bio.year}</td>
                  <td>{bio.content}</td>
                </tr>
               ))}
               </tbody>
                <tfoot></tfoot>
             </table>
           </div> 
         </div>
    )
}