import Link from "next/link"
import Image from "next/image"
import NavItems from "@/components/NavItems"
import { Button } from "./ui/button"

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
            <Button>Sign In</Button>
        </div>
    </nav>
  )
}

export default Navbar