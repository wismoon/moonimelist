import NextAuth from "next-auth"
import githubAuthProvider from "next-auth/providers/github"
import React from 'react'

//using NextAuth Oauth github
export const authOption = {
    //providers Oauth github
    providers: [
        githubAuthProvider({
            //where clientid and clientSecret initialize in .env
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    //NextAuth must have secret code string
    secret: process.env.NEXTAUTH_SECRET
}

//make handler to return an export get and post data fron NextAuth
const handler = NextAuth(authOption)

export {handler as GET, handler as POST}