import Link from "next/link";

export default function Item({title,Icon,href}:any){
    return(
       <Link href={href}>
            <a className="flex items-center space-x-1 hover:border-b hover:border-black dark:hover:border-[#57575e]"> {Icon} <span>{title}</span></a></Link>
    )
}