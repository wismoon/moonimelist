import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-gray-500">
            <div className="flex md:flex-row flex-col justify-between p-5 gap-2 items-center">
                <Link href="/" className="font-bold text-white text-xl">MOONIMELIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar