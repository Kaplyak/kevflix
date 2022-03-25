import Image from "next/image";
import Link from "next/link";
import Topbar from "../components/ui/Topbar";
import Row from "../components/ui/Row";
import Bottom from "../components/ui/Bottom";

export default function tv(props) {
    let rows = Object.entries(props).map((prop) => {
        return <Row key={prop[1].id} row={prop[1]} content={'tv'}/>;
    });

    let keys = Object.keys(props);
    let randomCategory = props[keys[ keys.length * Math.random() << 0 ]].results;
    let randomItem = randomCategory[Math.floor(randomCategory.length * Math.random())];

    return <>
    <Topbar bg={'dark'}/>
    <div className='relative w-screen h-screen'>
        <Image src={`https://image.tmdb.org/t/p/original/${randomItem.backdrop_path}`} layout='fill' objectFit='cover' />
        <div className="bg">
            <div className="ml-5 lg:ml-20 mt-60 relative text-whiteflix">
                <h1 className="title text-3xl lg:text-8xl mb-5">{randomItem.name}</h1>
                <h2 className="tagline text-xl lg:text-2xl ml-2 mb-3">{randomItem.tagline}</h2>
                <div className="max-w-sm">
                    <div>
                        <p className="overview mb-2">{randomItem.overview}</p>
                        <p className="score">Rating: {randomItem.vote_average}</p>
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
    </div>
    
        
        <div className="ml-5 lg:ml-20 relative mt-5">
            {rows}
        </div>
        <Bottom />
    </>
}



export async function getServerSideProps(context) {
    const resTrending = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`);
    const trendingShows = await resTrending.json();
    trendingShows.id = 1;
    trendingShows.name = "Trending TV shows";
    const resTop = await fetch(` https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const topShows = await resTop.json();
    topShows.id = 2;
    topShows.name = "Top TV shows";
    const resPopular = await fetch(` https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const popularShows = await resPopular.json();
    popularShows.id = 3;
    popularShows.name = "Popular TV shows";

    const resAction = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759`);
    const actionShows = await resAction.json();
    actionShows.id = 10759;
    actionShows.name = "Action & Adventure TV shows";
    const resComedy = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`);
    const comedyShows = await resComedy.json();
    comedyShows.id = 35;
    comedyShows.name = "Comedy TV shows";
    const resDrama = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`);
    const dramaShows = await resDrama.json();
    dramaShows.id = 18;
    dramaShows.name ="Drama TV shows";
    const resRomance = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`);
    const romanceShows = await resRomance.json();
    romanceShows.id = 10749;
    romanceShows.name = "Romance TV shows";
    const resScifi = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10765`);
    const fantasyShows = await resScifi.json();
    fantasyShows.id = 10765;
    fantasyShows.name = "Sci-Fi & Fantasy TV shows";
    const resFamily = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`);
    const familyShows = await resFamily.json();
    familyShows.id = 10751;
    familyShows.name = "Family TV shows";
    const resAnimation = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`);
    const animationShows = await resAnimation.json();
    animationShows.id = 16;
    animationShows.name = "Animation TV shows";

    return {props: {trendingShows, topShows, popularShows, actionShows, comedyShows, dramaShows, romanceShows, fantasyShows, familyShows, animationShows}}
}