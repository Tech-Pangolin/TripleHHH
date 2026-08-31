import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { accessibilityItems, services, siteName, slogan, stats } from '@/lib/site';

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
                    Healing Helping Hands (Triple H) is a one-of-a-kind organization providing
                    non-traditional, holistic wellness services designed to support individuals and families
                    during short- and long-term recovery.
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

        <section id="counts" className="counts">
          <div className="container">
            <div className="row no-gutters">
              {stats.map((stat) => (
                <div key={stat.label} className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className={`bi ${stat.icon}`} />
                    <span>{stat.value}</span>
                    <p>
                      <strong>{stat.label}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container">
            <div className="section-title">
              <h2>Why Healing Helping Hands?</h2>
              <p>Healing is about the whole person.</p>
              <p>
                At Healing Helping Hands, we believe that when you look good, you can feel better—and when you
                feel better, you are better equipped to focus on healing and recovery.
              </p>
              <p>
                Our unique approach complements traditional care by bringing together self-care, grooming,
                relaxation, entertainment, emotional wellness, and personal support.
              </p>
              <p>
                Whether an individual is experiencing a short-term setback or a long-term recovery journey, our
                goal is simple: to help people feel cared for, supported, confident, and connected throughout
                the healing process.
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
              <h2>Affordable &amp; Accessible Services</h2>
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
