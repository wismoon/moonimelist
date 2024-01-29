import NextAuth from "next-auth"
import githubAuthProvider from "next-auth/providers/github"
import React from 'react'

export const authOption = {
    providers: [
        githubAuthProvider({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}