import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vanland-voyage.fr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/administration/', '/admin-login/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

