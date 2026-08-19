import StorySlider from '@/components/StorySlider';

const videos = [
  '/assets/media/recovery1.mp4',
  '/assets/media/recovery2.mp4',
  '/assets/media/recovery3.mp4',
  '/assets/media/recovery4.mp4',
  '/assets/media/recovery5.mp4',
  '/assets/media/recovery6.mp4',
  '/assets/media/recovery7.mp4',
  '/assets/media/recovery8.mp4',
];

export const metadata = {
  title: 'Our Story | Triple H Health Services',
};

export default function OurStoryPage() {
  return (
    <main id="main" style={{ paddingTop: 100 }}>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12">
              <StorySlider />
            </div>
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Why this organization was created</h2>
                <p>
                  Chenell Hickey, Triple H&apos;s CEO and founder, suffered a tragic accident in December of
                  2022. He sustained a severe spinal cord injury and was left paralyzed form the neck down.
                  After six surgeries, ongoing rehabilitation, one-on-one interactive activities including
                  personal grooming, and lots of prayers, Chenell is a walking testimony. Triple H was born
                  from his personal experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>My Story</h2>
            <p>My healing process</p>
          </div>
          <div className="row">
            {videos.map((src) => (
              <div key={src} className="col-sm-6">
                <video controls src={src} className="object-fit-contain" style={{ width: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
