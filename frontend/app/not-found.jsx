import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: '120px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px' }}>
        <p style={{ marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>404</p>
        <h1 style={{ marginBottom: '16px' }}>Page not found</h1>
        <p style={{ marginBottom: '24px' }}>
          The page you were looking for does not exist or may have moved.
        </p>
        <Link href="/" className="brand-review-btn">
          Back Home
        </Link>
      </div>
    </section>
  );
}
