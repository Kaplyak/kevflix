import Logo from "./Logo";
import Link from "next/link";
import { useEffect } from "react/cjs/react.production.min";

export default function Topbar(props) {

    const background = props.bg == 'dark' ? 'bg-blackground' : '';
    
    return <>
        <nav id="nav" className={`fixed flex py-5 px-5 lg:px-20 items-center justify-center lg:justify-start w-full font-inter400 text-shadow z-10 ${background}`}>
            <Link href="/">
                <Logo width="120" />
            </Link>
            
            <ul className="flex text-white text-md lg:text-lg justify-center ml-6">
                <li className='mx-3'><a href='/'>Home</a></li>
                <li className='mx-3'><a href='/movies'>Movies</a></li>
                <li className='mx-3'><a href='/tv'>TV</a></li>
                <li className='mx-3'><a href='/new'>New</a></li>
            </ul>
            <div className='flex text-white ml-auto'>

            </div>
        </nav>
        <div id="sectiona" className="relative">

        </div>
        
    </>
}