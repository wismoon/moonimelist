import prisma from "@/libs/prisma"

export async function POST(request){
    const {anime_mal_id, user_email} = await request.json()
    const data = {anime_mal_id, user_email}
    const createCollections = await prisma.collection.create({data})

    if (!createCollections) {    }

    return Response.json({data: 'HELOO'})
}