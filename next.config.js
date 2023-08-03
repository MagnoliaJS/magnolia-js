/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tickets',
        destination: 'https://www.eventbrite.com/e/magnoliajs-2023-tickets-422921328077?aff=website',
        permanent: true,
      },
    ]
  },
}
