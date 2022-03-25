import Logo from "./Logo"

export default function Hero() {
    return(
        <div className="border-b-8 border-greybar bg-cover" style={{"backgroundImage": "url(https://assets.nflxext.com/ffe/siteui/vlv3/eb482c64-e879-4e88-9ddc-d839cb7d1232/f370981b-4b5f-4af6-8006-cce900a0fd25/DE-en-20220131-popsignuptwoweeks-perspective_alpha_website_large.jpg)"}}>
            <div className="flex justify-between mx-10 pt-5 items-center">
                <Logo width="180" />
                <button className="bg-red-600 px-5 py-2 rounded-md">Sign in</button>
            </div>
            <div className="container mx-auto flex flex-col text-center py-20 lg:py-48">
                <h1 className="text-5xl py-5">Unlimited movies, TV shows, and more.</h1>
                <h2 className="text-2xl">Watch anywhere. Cancel anytime.</h2>
                <form className="pt-5">
                    <h3 className="text-lg">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <input className="py-5 px-5 text-black my-2" placeholder="Email"></input>
                    <button className="bg-red-600 px-5 py-5">Get started &gt;</button>
                    <Link>
                        <a href="/new" className="block w-1/3 mx-auto mt-2 bg-red-600 px-5 py-2 rounded-md">Browse content</a>
                    </Link>
                </form>
            </div>
        </div>
    )
}