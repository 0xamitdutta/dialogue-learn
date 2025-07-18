'use client'
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import NavItems from "@/components/NavItems"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link href="/">
                <div>
                    <Image src="/images/dl-logo.png" alt="logo" width={150} height={75} />
                </div>
            </Link>

        {/* Desktop NavItems */}
        <div className="flex items-center gap-4 max-sm:hidden">
            <NavItems />
            <SignedOut>
            <SignInButton>
                <button className="btn-primary">Sign In</button>
            </SignInButton>
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center gap-2">
            <button
            aria-label="Open menu"
            className="p-2 rounded-lg border border-black"
            onClick={() => setMenuOpen((open) => !open)}
            >
            {/* Hamburger icon */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
            </button>
            {menuOpen && (
            <div
                className="absolute top-20 right-2 z-50 bg-white border border-black rounded-2xl shadow-lg flex flex-col items-start gap-4 p-6 min-w-[180px]"
                onClick={() => setMenuOpen(false)}
            >
                <NavItems />
                <SignedOut>
                <SignInButton>
                    <button className="btn-primary w-full">Sign In</button>
                </SignInButton>
                </SignedOut>
                <SignedIn>
                <UserButton />
                </SignedIn>
            </div>
            )}
        </div>
        </nav>
    );
};

export default Navbar