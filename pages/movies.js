import Image from "next/image";
import Link from "next/link";
import Topbar from "../components/ui/Topbar";

export default function movies() {
    return <>
        <Topbar />
    
    </>
}



export async function getStaticProps(context) {
    const res = await fetch('')
    const details = await res.json()

    return {props: {details}}
}