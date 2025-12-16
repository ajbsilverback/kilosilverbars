import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center max-w-xl px-4">
        <div className="text-8xl font-display font-bold silver-text mb-6">404</div>
        <h1 className="text-3xl font-display font-semibold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          This page doesn&apos;t exist. Explore our kilo silver bar resources below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Kilo Silver Bar Overview
          </Link>
          <Link href="/live-silver-prices" className="btn-secondary">
            Live Silver Prices
          </Link>
          <Link href="/resources" className="btn-secondary">
            Educational Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
