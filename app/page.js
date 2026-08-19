import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const clients = [
  { src: '/assets/img/clients/chase-logo-transparent.png', alt: 'Chase' },
  { src: '/assets/img/clients/popup.png', alt: 'Popup' },
  { src: '/assets/img/clients/newbalance.jpg', alt: 'New Balance' },
  { src: '/assets/img/clients/verizon.jpg', alt: 'Verizon' },
  { src: '/assets/img/clients/pulse.png', alt: 'Pulse' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
              <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h3>About Triple HHH</h3>
                  <blockquote style={{ color: '#D7952A', fontSize: 24 }}>
                    &quot;If You Look Good, You Feel Good&quot;
                  </blockquote>
                  <p>
                    Triple H is a one-of-a-kind organization that offers non-traditional wellness services. Our
                    goal is to help you feel and look good. We offer short and long-term support to help
                    individuals and families through difficult times. Triple H creates a holistic approach to
                    wellness and self-care to aid in the healing process.
                  </p>
                  <div className="row">
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-receipt" />
                      <h4>Hair-care Grooming</h4>
                      <p>Beauticians, Stylists, Barbers, Wig Replacements, Shaving, etc.</p>
                    </div>
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-cube-alt" />
                      <h4>Entertainment Services</h4>
                      <p>Karaoke, Comedic and One on One Services (UNO)</p>
                    </div>
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-images" />
                      <h4>Massage Therapeutic Services</h4>
                      <p>Full Body, Hand and Foot, Special Need Areas, Facials</p>
                    </div>
                    <div className="col-md-6 icon-box">
                      <i className="bx bx-shield" />
                      <h4>Mental Health Services</h4>
                      <p>Couselors and Therapists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <span>232</span>
                  <p>
                    <strong>Happy Clients</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <span>521</span>
                  <p>
                    <strong>Hours of Community Service</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <span>24</span>
                  <p>
                    <strong>Hours Of Support</strong> daily
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-people" />
                  <span>15</span>
                  <p>
                    <strong>Hard Workers</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients section-bg">
          <div className="container">
            <div className="row">
              {clients.map((client) => (
                <div
                  key={client.src}
                  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                >
                  <img src={client.src} className="img-fluid" alt={client.alt} />
                </div>
              ))}
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                Logo Placeholder
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container">
            <div className="section-title">
              <h2>Why Us</h2>
              <p>
                Why Us? Triple H is one of a kind based upon…if you look good; our slogan you feel good…part of
                feeling good is having non traditional wellness services provided to you when you have short or
                long term care situation Supportive services to help individuals and families through a
                difficult time…Triple H creates a holistic approach to wellness and self care, as one heals, we
                provide through wellness rehabilitation services-pamper, laughter, which is comedic/karaoke,
                massages (body/hand/feet), cosmetology/barbers/beauticians and more.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <img src="/assets/img/pexels/couple-bed.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <img src="/assets/img/pexels/headscarf-phone-smile.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <img src="/assets/img/pexels/couch-chat.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2>Pricing</h2>
              <p>All services will be offered ona sliding fee discount program</p>
              <p>Add We Accept All Major Health Insurances</p>
              <p>All Major Credit Cards</p>
              <p>Scholarship Opportunities Available</p>
              <p> All Inquiries answered 24/7</p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </>
  );
}
