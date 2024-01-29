import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"

/**
 * this is where we make fuction search from json api myanimelist 
 * by getting the components AnimeList and use api property
 * variable keyword is from inputSeach where we declare it as input from search input 
 */
const Page = async({params}) => {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await  getAnimeResponse("anime", `q=${decodedKeyword}`)
  
  return (
    <>
    {/** list anime terpopuler */}
      <section>
        <Header title={`Your Search ${decodedKeyword}`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page
