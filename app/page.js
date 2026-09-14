import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { accessibilityItems, services, siteName, slogan } from '@/lib/site';

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
                  <h3>About {siteName}</h3>
                  <blockquote style={{ color: '#D7952A', fontSize: 24 }}>
                    &quot;{slogan}&quot;
                  </blockquote>
                  <p>
                    Healing Helping Hands (Triple H) provides non-traditional, holistic wellness services
                    designed to support individuals and families during short- and long-term recovery.
                  </p>
                  <p>
                    We believe healing involves more than traditional care alone. Looking good, feeling good,
                    emotional wellness, human connection, laughter, relaxation, and self-care can all play
                    meaningful roles in the healing journey.
                  </p>
                  <p>
                    Through our unique approach, Triple H brings supportive wellness and self-care services
                    directly to individuals who need them most.
                  </p>
                  <div className="row">
                    {services.map((service) => (
                      <div key={service.title} className="col-md-6 icon-box">
                        <i className={`bx ${service.icon}`} />
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container">
            <div className="section-title">
              <h2>Why Healing Helping Hands?</h2>
              <p>
                We complement traditional care by bringing personal care, therapeutic massage, engaging
                activities, and emotional wellness support together in one whole-person approach. These
                services are designed to meet people where they are, whether they are navigating a short-term
                setback or a long-term recovery. Our focus on dignity, confidence, connection, and comfort
                helps each person feel seen and supported throughout the healing journey.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <img
                    src="/assets/img/pexels/couple-bed.jpg"
                    className="img-fluid"
                    alt="A couple supporting each other during recovery"
                  />
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <img
                    src="/assets/img/pexels/headscarf-phone-smile.jpg"
                    className="img-fluid"
                    alt="A smiling person connecting with support by phone"
                  />
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <img
                    src="/assets/img/pexels/couch-chat.jpg"
                    className="img-fluid"
                    alt="Two people having a supportive conversation"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2>Affordable and Accessible Services</h2>
              <p>We believe wellness and supportive care should be accessible to everyone.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
                {accessibilityItems.map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </>
  );
}
