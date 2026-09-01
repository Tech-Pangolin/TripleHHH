import Link from 'next/link';
import OurStoryHero from '@/components/OurStoryHero';
import StorySlider from '@/components/StorySlider';
import StoryVideo from '@/components/StoryVideo';

export const metadata = {
  title: 'Our Story | Healing Helping Hands',
};

export default function OurStoryPage() {
  return (
    <>
      <OurStoryHero />
      <main id="main" className="our-story">
        <section className="our-story-origin">
          <div className="container">
            <div className="section-title our-story-origin__title">
              <h2>Why this Organization was created</h2>
            </div>

            <div className="row gy-4 align-items-center our-story-intro">
              <div className="col-lg-6 order-lg-2">
                <StorySlider />
              </div>
              <div className="col-lg-6 order-lg-1">
                <p className="our-story-intro__text">
                  Chenell Hickey, Triple H&apos;s CEO and founder, suffered a tragic accident in December of
                  2022. He sustained a severe spinal cord injury and was left paralyzed from the neck down.
                  After six surgeries, ongoing rehabilitation, one-on-one interactive activities including
                  personal grooming, and lots of prayers, Chenell is a walking testimony. Triple H was born
                  from his personal experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="our-story-video section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Watch Chenell&apos;s Story</h2>
              <p>
                Hear directly from our founder about recovery, hope, and why Triple H exists.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <StoryVideo />
              </div>
            </div>
          </div>
        </section>

        <section className="our-story-cta">
          <div className="container">
            <div className="section-title">
              <h2>How We Can Help</h2>
              <p>Learn more about our services or reach out to start a conversation.</p>
            </div>
            <div className="our-story-cta__actions">
              <Link href="/#about" className="our-story-cta__btn">
                Explore Our Services
              </Link>
              <Link href="/#contact" className="our-story-cta__btn our-story-cta__btn--outline">
                Get in Touch
              </Link>
              <Link href="/#donate" className="our-story-cta__btn our-story-cta__btn--outline">
                Donate
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
