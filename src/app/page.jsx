import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedResponse, randmizeAnime, randomizeAnime } from "../libs/api-libs"


/** 
 * this is main page where next js will show first time
 * 
*/ 
const Page = async() => {


  /**
   * using the reusable api
   * where the main page need top anime data and query limit 8
   * and then the topAnime can be used as normal fetching
   */
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recomAnime = await getNestedResponse("recommendations/anime", "entry")
  recomAnime = randomizeAnime(recomAnime, 8)
  return (
    <>
    {/** list anime popular */}
      <section>
        <Header title="Top Anime" linkTitle="More.." linkHref="/popular"/>
        <AnimeList api={topAnime}/>
        <hr className="m-5 gap-2 opacity-5"></hr>
      </section>
      {/** list anime recomendations */}
      <section>
        <Header title="Recommendations" linkTitle="More.." linkHref="/popular"/>
        <AnimeList api={recomAnime}/>
        <hr className="m-5 gap-2 opacity-5"></hr>
      </section>
    </>
  )
}

export default Page
