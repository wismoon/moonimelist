import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"



const Page = async({params}) => {
  const {keyword} = params
  const respose = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}?limit=8`)
  const searchAnime = await respose.json()
  
  return (
    <>
    {/** list anime terpopuler */}
      <section>
        <Header title={`Your Search ${keyword}`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page
