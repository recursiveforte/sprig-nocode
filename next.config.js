/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: "https://sprig.hackclub.com",
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
