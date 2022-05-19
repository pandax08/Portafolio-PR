import logo from "../public/Logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Logo(){
    return(
       <Link href={'/'}>
            <div className=" flex space-x-2 items-center justify-between cursor-pointer">
                    {/* logo */}
                    <div className="dark:bg-white flex p-1 items-center rounded-full">
                    <Image src={logo} width={25} height={25}></Image>
                    </div>
                    <span className="font-bold">Pablo Ringler</span>                  
                </div></Link>
    )
}