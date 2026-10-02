import { address, email, legalName, phone, services, siteDescription, siteName, siteUrl } from '@/lib/site';

const organization = {
  '@context': 'https://schema.org',
  '@type': ['NGO', 'MedicalBusiness'],
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  legalName,
  alternateName: 'Triple H',
  url: siteUrl,
  logo: `${siteUrl}/assets/img/logo-lg.png`,
  image: `${siteUrl}/assets/img/og-image.jpg`,
  description: siteDescription,
  telephone: `+1-${phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`,
  email,
  nonprofitStatus: 'https://schema.org/Nonprofit501c3',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${address.line1} ${address.line2}`,
    addressLocality: 'Carrollton',
    addressRegion: 'TX',
    postalCode: '75010',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Carrollton, TX' },
    { '@type': 'Place', name: 'Dallas-Fort Worth metroplex' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wellness and recovery support services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }}
    />
  );
}
