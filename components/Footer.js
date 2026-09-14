import { address, donationUrl, email, legalName, phone, siteName } from '@/lib/site';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div className="footer-info">
                <h3>{siteName}</h3>
                <p>
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.cityStateZip}
                  <br />
                  <br />
                  <strong>Phone:</strong> {phone}
                  <br />
                  <strong>Email:</strong> {email}
                  <br />
                </p>
                <br />
                <p id="donate">
                  {legalName} is recognized by the Internal Revenue Service as a tax-exempt nonprofit
                  organization under Section 501(c)(3) of the Internal Revenue Code. Contributions are
                  tax-deductible to the extent permitted by law.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/our-story">Our Story</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/#about">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/#contact">Contact</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href={donationUrl}>Donate</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>{siteName}</span></strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
