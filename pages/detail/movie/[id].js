import react from 'react';
import Image from 'next/image';
import Topbar from '../../../components/ui/Topbar';

export default function detail(props) {
    return <>
        <Topbar />
        <Image src={`https://image.tmdb.org/t/p/original/${props.details.backdrop_path}`} layout='fill' objectFit='cover' />
        <div className="bg">
            <div className="ml-5 lg:ml-20 mt-60 relative text-whiteflix">
                <h1 className="title text-3xl lg:text-8xl mb-5 text-shadow">{props.details.original_title}</h1>
                <h2 className="tagline text-xl lg:text-2xl ml-2 mb-3 text-shadow">{props.details.tagline}</h2>
                <div className="max-w-sm">
                    <div className="ml-2">
                        <p className="overview mb-2 text-shadow">{props.details.overview}</p>
                        <p className="runtime text-shadow">Runtime: {props.details.runtime} minutes</p>
                        <p className="score text-shadow">Rating: {props.details.vote_average}</p>
                        <div className="flex items-center justify-items-center mt-10">
                            <a className="text-white inline-flex items-center justify-items-center bg-red-600 px-5 py-2 rounded-md">
                                <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                <span className="ml-2">Play</span>
                            </a>
                            <a className="text-white inline-flex items-center justify-items-center bg-gray-500/50 px-5 py-2 ml-3 rounded-md">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                                <span className="ml-2">More info</span>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
}


export async function getStaticPaths() {
    let moviePathsIds = [];

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            moviePathsIds.push(data[i].id)
        }
    })

    return { 
        paths: moviePathsIds, 
        fallback: 'blocking' 
    };
}


export async function getStaticProps(context) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`)
    const details = await res.json()

    return { props: { details } }
}