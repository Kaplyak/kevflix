import react from 'react';

export default function detail(props) {

    console.log(props)

    return <>
        <h1 className="title">{props.details.original_title}</h1>
        <h2 className="tagline">{props.details.tagline}</h2>
        <div>
            <p className="overview">{props.details.overview}</p>
            <p className="runtime">Runtime: {props.details.runtime} minutes</p>
            <p className="score">Rating: {props.details.vote_average}</p>
            <a className="">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                <span>Play</span>
            </a>
        </div>
        <div>
            <img src={`https://image.tmdb.org/t/p/original/${props.details.backdrop_path}`} />
        </div>
    </>
}


export async function getStaticPaths() {
    let moviePathsIds = [];

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b0064151a9c09591ea5478a2ea2cc8f7&language=en-US&page=1')
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
    const res = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=b0064151a9c09591ea5478a2ea2cc8f7`)
    const details = await res.json()

    return {props: {details}}
}