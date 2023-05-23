/** @type {import('next').NextConfig} */
const nextConfig = {
    swcPlugins: [
        ["next-superjson-plugin", {}]
    ],
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "dsm01pap007files.storage.live.com"
        ]
    }
}

module.exports = nextConfig
