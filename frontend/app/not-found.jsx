import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-panel">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">This page wandered off the path.</h1>
        <p className="not-found-description">
          The page you were looking for does not exist or may have moved. Let&apos;s get you back to the Paper Hoof front page.
        </p>
        <Link href="/" className="not-found-link">
          Back Home
        </Link>
      </div>
    </section>
  );
}
