import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"



const PAge = async() => {

  const respose = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const respose = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/top/anime?limit=8')
  const topAnime = await respose.json()
  
  return (
    <>
    {/** list anime terpopuler */}
      <section>
        <Header title="Top Anime" linkTitle="More.." linkHref="/popular"/>
        <AnimeList api={topAnime}/>
      </section>
      <hr className=""></hr>
    {/** list anime terpopuler */}
      <section>
        <Header title="New Release" linkTitle="More.." linkHref="/populer"/>
        <AnimeList api={topAnime}/>
      </section>
    </>
  )
}

export default PAge
