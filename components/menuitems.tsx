import { GiSkills} from 'react-icons/gi'
import{BsGithub} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import Item from './item'


export default function Menuitems(){
    return(
       <>
            <Item title={'Work'} Icon={<MdWork/>} href='/Works' ></Item>
            <Item title={'Skills'} Icon={<GiSkills/>} href='/Skills' ></Item>
            <Item title={'Github'} Icon={<BsGithub/>} href='https://github.com/pandax08'></Item>
            
       </>
        
    )
}