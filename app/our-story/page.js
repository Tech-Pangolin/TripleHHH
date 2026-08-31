import StorySlider from '@/components/StorySlider';

export const metadata = {
  title: 'Our Story | Healing Helping Hands',
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
                  2022. He sustained a severe spinal cord injury and was left paralyzed from the neck down.
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
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                style={{
                  aspectRatio: '16 / 9',
                  backgroundColor: '#f4f4f4',
                  border: '2px dashed #ccc',
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 24,
                }}
              >
                <i className="bi bi-play-circle" style={{ fontSize: 64, color: '#D7952A', marginBottom: 16 }} />
                <p style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Video coming soon</p>
                <p style={{ margin: '8px 0 0', color: '#666' }}>
                  The final recovery story video will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
