import Link from "next/link";
import Image from "next/image";

export default function Item({props, content}) {
    return <div className="mr-2 hover:mr-5 hover:scale-120">
        <Link href={`/detail/${content}/${props.id}`}>
            <a>
                <Image src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`} width={400} height={200} objectFit='fill' className='rounded' />
            </a>
        </Link>
    </div>
}