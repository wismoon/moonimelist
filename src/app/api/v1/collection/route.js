import prisma from "@/libs/prisma"

//use redux for more complex databases
export async function POST(request){
    const {anime_mal_id, user_email, anime_image, anime_title} = await request.json()
    const data = {anime_mal_id, user_email, anime_image, anime_title}
    
    const createCollections = await prisma.collection.create({data})

    if (!createCollections) return Response.json({status: 500, isCreated: false})
    else return Response.json({status: 200, isCreated: true})
}