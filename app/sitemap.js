import { siteUrl } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/our-story`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
