// built in link component
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>My Blog</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}