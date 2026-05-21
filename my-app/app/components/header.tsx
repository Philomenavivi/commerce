

import Link from "next/link";

export default function header() {
    const myLinks = [
        { name: "Home", href: "/" },
        { name: "Men", href: "/" },
        { name: "Women", href: "/" },
        { name: "New Arrivals", href: "/" },
        { name: "Brands", href: "/" },
        { name: "Contact", href: "/" },
    ];

    return (
        <nav className="hidden lg:flex items-center  p-4 bg-black-700 gap-8">
            {myLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="text-black-500 hover:text-cyan-500 font-medium transition"
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}