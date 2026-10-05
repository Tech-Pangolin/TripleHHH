import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { accessibilityItems, services, slogan, venmoHandle, venmoUrl } from '@/lib/site';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
              <div className="col-xl-7 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h1>Holistic Wellness and Recovery Support</h1>
                  <blockquote style={{ color: '#D7952A', fontSize: 24 }}>
                    &quot;{slogan}&quot;
                  </blockquote>
                  <p>
                    Healing Helping Hands (Triple H) is a nonprofit that provides non-traditional, holistic
                    wellness services to individuals and families in need of compassionate, dependable care
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
                    width={1280}
                    height={1917}
                    loading="lazy"
                    alt="A couple supporting each other during recovery"
                  />
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <img
                    src="/assets/img/pexels/headscarf-phone-smile.jpg"
                    className="img-fluid"
                    width={1280}
                    height={1920}
                    loading="lazy"
                    alt="A smiling person connecting with support by phone"
                  />
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <img
                    src="/assets/img/pexels/couch-chat.jpg"
                    className="img-fluid"
                    width={1920}
                    height={2880}
                    loading="lazy"
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

        <section id="donate" className="donate section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Support Our Mission</h2>
              <p className="donate__subtitle">Your Donation Makes a Difference</p>
            </div>
            <div className="donate__intro">
              <p>
                At Healing Helping Hands (Triple H), we believe recovery is about more than medical treatment.
                It&apos;s also about restoring hope, confidence, dignity, and a sense of normalcy during some of
                life&apos;s most difficult moments.
              </p>
              <p>
                Your contribution helps us provide supportive wellness, personal-care, and uplifting experiences
                for individuals and families navigating short- and long-term recovery.
              </p>
              <p>
                Whether someone is recovering from a serious injury, illness, extended hospitalization, or
                rehabilitation, our goal is simple: help make the journey a little easier and remind people
                that they are not alone.
              </p>
            </div>

            <div className="donate__block">
              <h3 className="donate__heading">Where Your Support Goes</h3>
              <p>
                Donations help support wellness and personal-care services, patient and family support,
                programs promoting confidence and emotional well-being, special experiences and entertainment,
                and community outreach initiatives.
              </p>
            </div>

            <div className="donate__block">
              <h3 className="donate__heading">Every Contribution Matters</h3>
              <p>
                Whether someone gives $25, $50, $100, $500, or more, every contribution helps us continue
                expanding our reach and providing meaningful support to people throughout their recovery
                journey.
              </p>
              <p className="donate__callout">Together, we can help turn difficult days into better ones.</p>
            </div>

            <div className="donate__block donate__block--divider">
              <h3 className="donate__heading">Donate Now</h3>
              <p>
                Healing Helping Hands is a 501(c)(3) nonprofit organization. Contributions are tax-deductible
                to the extent permitted by law.
              </p>
            </div>

            <div className="row justify-content-center align-items-center gy-4 mt-2">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="donate__qr">
                  <img
                    src="/assets/img/zelle-qr.png"
                    alt="Zelle QR code to donate to Triple H Health Care Services"
                    className="img-fluid"
                    width={500}
                    height={540}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <h3 className="donate__heading">Donate with Zelle</h3>
                <ol className="donate__steps">
                  <li>Open your bank&apos;s mobile app and go to Zelle.</li>
                  <li>Choose Send, then tap the QR code icon and scan the code.</li>
                  <li>
                    Before submitting, verify that the recipient displays as{' '}
                    <strong>TRIPLE H HEALTH CARE SERVICES</strong>.
                  </li>
                  <li>Enter your donation amount.</li>
                  <li>
                    Add your full name and email address in the memo so we can acknowledge your contribution
                    and provide a donation receipt.
                  </li>
                </ol>
                <p className="donate__note">
                  On a phone? A QR code can&apos;t be scanned from the same phone that&apos;s displaying it.
                  Use Venmo below, open this page on another screen, or <a href="#contact">contact us</a>{' '}
                  for our Zelle details.
                </p>
              </div>
            </div>
            <div className="donate__venmo text-center">
              <h3 className="donate__heading">Donate with Venmo</h3>
              <p>
                Send your donation to <strong>@{venmoHandle}</strong> on Venmo. Please include your full name
                and email address in the note so we can acknowledge your contribution and provide a donation
                receipt.
              </p>
              <a
                href={venmoUrl}
                className="donate__venmo-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate with Venmo
              </a>
            </div>

            <div className="donate__block donate__block--divider">
              <h3 className="donate__heading">Corporate and Community Partnerships</h3>
              <p>
                Interested in supporting Healing Helping Hands through a corporate sponsorship, product
                donation, hospital partnership, or community initiative? We welcome opportunities to work with
                organizations that share our commitment to improving the recovery experience.
              </p>
              <p>
                <a href="#contact">Contact us</a> to discuss partnership opportunities.
              </p>
            </div>

            <div className="donate__block donate__block--divider donate__thanks">
              <h3 className="donate__heading">Thank You for Helping Us Help Others</h3>
              <p>
                Your support allows Healing Helping Hands to continue bringing care, encouragement, dignity,
                and hope to people facing challenging recovery journeys.
              </p>
              <p className="donate__tagline">Healing. Helping. Hope.</p>
              <p>
                Together, we can make a difference&mdash;one person, one family, and one recovery at a time.
              </p>
              <p className="donate__thanks-closing">Thank you!</p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </>
  );
}
