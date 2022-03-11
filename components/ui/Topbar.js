import Logo from "./Logo";
import Link from "next/link";

export default function Topbar() {
    return <>
        <nav className="fixed flex mt-5 ml-10 items-center justify-start w-full">
            <Link href="/">
                <Logo width="120" />
            </Link>
            
            <ul className="flex text-white text-lg justify-center">
                <li className='mx-3'><a href='/'>Home</a></li>
                <li className='mx-3'><a href=''>TV Series</a></li>
                <li className='mx-3'><a href=''>Movies</a></li>
                <li className='mx-3'><a href=''>New & Popular</a></li>
                <li className='mx-3'><a href=''>My list</a></li>
            </ul>
            <div className='flex text-white ml-auto'>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
            </div>
        </nav>
        
    </>
}