import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="text-footer-link container mx-auto px-5 pt-5 pb-5 lg:px-40">
            <p className="pb-5">Questions? Call 0800-000-7969</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col mr-1 lg:mr-0">
                    <Link href="#">FAQ</Link>
                    <Link href="#">Investor Relations</Link>
                    <Link href="#">Ways to Watch</Link>
                    <Link href="#">Corporate Information</Link>
                    <Link href="#">Only on Kevflix</Link>
                </div>
                <div className="flex flex-col">
                    <Link href="#">Help Center</Link>
                    <Link href="#">Jobs</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#">Contact Us</Link>
                </div>
                <div className="flex flex-col">
                    <Link href="#">Account</Link>
                    <Link href="#">Redeem Gift Cards</Link>
                    <Link href="#">Privacy</Link>
                    <Link href="#">Speed Test</Link>
                </div>
                <div className="flex flex-col">
                    <Link href="#">Media Center</Link>
                    <Link href="#">Buy Gift Cards</Link>
                    <Link href="#">Cookie Preferences</Link>
                    <Link href="#">Legal Notices</Link>
                </div>
            </div>
        </footer>
    )
}