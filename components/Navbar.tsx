import Link from "next/link"
import Image from "next/image"
import NavItems from "@/components/NavItems"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
            <div>
                <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
            </div>
        </Link>

        <div className="flex items-center gap-4">
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
    </nav>
  )
}

export default Navbar