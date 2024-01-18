import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-gray-500">
            <div className="flex md:flex-row flex-col justify-between p-5 gap-2 items-center">
                <Link href="/" className="font-bold text-white text-xl">MOONIMELIST</Link>
                <input placeholder="cari anime...." className=""/>
            </div>
        </header>
    )
}

export default Navbar