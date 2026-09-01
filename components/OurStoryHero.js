import Link from 'next/link';

export default function OurStoryHero() {
  return (
    <section className="breadcrumbs our-story-hero">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <h2>Our Story</h2>
            <p className="our-story-hero__subtitle">
              Chenell Hickey&apos;s journey and the mission behind Healing Helping Hands.
            </p>
          </div>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Our Story</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
