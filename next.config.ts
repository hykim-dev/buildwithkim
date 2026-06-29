import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home/HomeMain", destination: "/", permanent: true },
      { source: "/home-two/HomeTwoMain", destination: "/", permanent: true },
      { source: "/home-three/HomeThreeMain", destination: "/", permanent: true },
      { source: "/about/AboutMain", destination: "/about", permanent: true },
      { source: "/contact/ContactMain", destination: "/contact", permanent: true },
      { source: "/portfolio/PortfolioMain", destination: "/portfolio", permanent: true },
      { source: "/portfolio-details/PortfolioDetailsMain", destination: "/portfolio-details", permanent: true },
      { source: "/blog/BlogMain", destination: "/portfolio", permanent: true },
      { source: "/blog-standard/BlogStandardMain", destination: "/portfolio", permanent: true },
      { source: "/blog-details/BlogDetailsMain", destination: "/portfolio", permanent: true },
      { source: "/blog-details-sidebar/BlogDetailsSidebar", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
