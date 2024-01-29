import Image from "next/image"
import Link from "next/link"

/**
 * this is where we custome out card for each anime that we listed
 * which is use images and titles
 * 
 */
const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                <Link 
                    href={`/anime/${anime.mal_id}`} 
                    className="text-color-primary hover:text-color-electricBlue transition-all cursor-pointer shadow-xl"
                    key={index}>
                    <Image 
                        src={anime.images.webp.image_url} 
                        alt="..." 
                        width={350} 
                        height={350}
                        className="w-full max-h-64 object-cover "
                    />
                    <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                </Link>
                )
            })}
            
        </div>
    )
}

export default AnimeList