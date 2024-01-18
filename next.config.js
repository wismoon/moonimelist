/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
    // using domains if you have local files, instead if you use from servers better use remotePatterns for safety users
    //     domains: ['placehold.co']
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net'
            }
        ]
    }
    
}

module.exports = nextConfig
