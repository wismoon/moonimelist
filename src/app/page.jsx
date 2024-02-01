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
   * using nested fetching data map in map where the api resource and where data map is 
   * where the main page need top anime data and query limit 8
   * and then the topAnime can be used as normal fetching
   */
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  //recomAnime make into let so we can change data output
  //recomAnime get data from nestedResponse where input is resources + entry
  let recomAnime = await getNestedResponse("recommendations/anime", "entry")
  //data recomAnime get changed in function randomizeAnime where item get slice as random
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
