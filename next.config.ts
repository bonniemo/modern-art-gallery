import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/**",
            },
        ],
    },
    headers: async () => [
        {
            source: "/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store, must-revalidate",
                },
            ],
        },
    ],
};

export default nextConfig;
