export const siteName = 'Healing Helping Hands';
export const legalName = 'Triple H Healthcare Services';
export const siteTagline =
  'Providing non-traditional, holistic wellness services designed to help individuals and families heal, recover, and feel their best.';

export const slogan = 'If You Look Good, You Feel Good.';

export const address = {
  line1: '1402 Carrollton Parkway',
  line2: '#2088',
  cityStateZip: 'Carrollton, TX 75010',
};

export const phone = '(310) 596-0500';
export const phoneHref = 'tel:3105960500';
export const email = 'infotriplehhealthcareservices@gmail.com';
export const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL || '/#donate';

export const services = [
  {
    icon: 'bx-receipt',
    title: 'Personal Care Services',
    description:
      'Hair care, barbering, wig replacement, shaving, manicures, pedicures, and other personal grooming services.',
    slideImage: '/assets/img/slide/hair.jpg',
    backgroundPosition: 'bottom',
  },
  {
    icon: 'bx-cube-alt',
    title: 'Interactive and Entertainment Services',
    description:
      'Karaoke, comedy, games, group activities, and entertainment that encourage laughter, connection, and positive experiences.',
    slideImage: '/assets/img/slide/cards-kid.jpg',
  },
  {
    icon: 'bx-images',
    title: 'Therapeutic Massage Services',
    description:
      'Full-body, hand, and foot massage, facials, and focused care for specific areas of need.',
    slideImage: '/assets/img/slide/massage.jpg',
  },
  {
    icon: 'bx-shield',
    title: 'Mental Health and Emotional Wellness Services',
    description:
      'Connections to counselors, therapists, and supportive resources that promote mental and emotional wellness.',
    slideImage: '/assets/img/slide/therapy-head-on.jpg',
  },
];

export const accessibilityItems = [
  'Sliding-fee discount programs available',
  'Insurance coverage may be available for eligible services',
  'Major credit cards accepted',
  'Scholarship opportunities available',
  'Inquiries welcomed 24/7',
];
