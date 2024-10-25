import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    eslint: { dirs: ["app", "components", "lib"] },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "*.gravatar.com",
                port: "",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
