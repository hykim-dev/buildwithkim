import Link from "next/link";

interface SiteLogoProps {
  className?: string;
}

const SiteLogo = ({ className = "" }: SiteLogoProps) => {
  return (
    <Link
      href="/"
      className={`site-logo ${className}`.trim()}
      aria-label="Heeyoung Kim home"
      title="Heeyoung Kim"
    >
      HK<span className="site-logo__dot">.</span>
    </Link>
  );
};

export default SiteLogo;
