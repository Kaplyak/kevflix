import Image from 'next/image';
import tv from '../../public/images/tv.png';
import mobile from '../../public/images/mobile-0819.jpg';
import devicepile from '../../public/images/device-pile.png';
import kids from '../../public/images/kids.png';

export default function HomeSections() {
    return(
        <>
            <div className="border-b-8 border-greybar">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="w-1/2">
                        <h1 className="text-5xl py-5">Enjoy on your TV.</h1>
                        <h2 className="text-2xl">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                    </div>
                    <Image src={tv}/>
                </div>
            </div>
            <div className="border-b-8 border-greybar">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="w-1/2">
                        <h1 className="text-5xl py-5">Download your shows to watch offline.</h1>
                        <h2 className="text-2xl">Save your favorites easily and always have something to watch.</h2>
                    </div>
                    <Image src={mobile} />
                </div>
            </div>
            <div className="border-b-8 border-greybar">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="w-1/2">
                        <h1 className="text-5xl py-5">Watch everywhere.</h1>
                        <h2 className="text-2xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                    </div>
                    <Image src={devicepile} />
                </div>
            </div>
            <div className="border-b-8 border-greybar">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="w-1/2">
                        <h1 className="text-5xl py-5">Create profiles for kids.</h1>
                        <h2 className="text-2xl">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                    </div>
                    <Image src={kids} />
                </div>
            </div>
        </>
    )
}