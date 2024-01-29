import Link from "next/link"


/**
 * component Header
 * where we custom our title header
 */
const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
            
            {linkHref && linkTitle 
            ? 
                <Link href={linkHref} className="text-color-primary md:text-xl text-sm underline hover:text-color-electricBlue transition-all">
                    {linkTitle}
                </Link>
                
            : null
            }
        </div>
    )
}

export default Header