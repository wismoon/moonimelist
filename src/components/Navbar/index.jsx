import Link from "next/link"
import InputSearch from "./InputSearch"
import UserProfile from "./UserProfile"

/**
 * custom navbar for homepage link title
 */
const Navbar = () => {
    return (
        <header className="bg-color-electricBlue">
            <div className="flex md:flex-row flex-col justify-between p-5 gap-2 items-center">
                <Link href="/" className="font-bold text-2xl">MOONIMELIST</Link>
                <InputSearch />
                <UserProfile />
            </div>
        </header>
    )
}

export default Navbar