import { SEOContent } from './seo-content';

export function generateMetaTitle(content: SEOContent, suffix: string = '– Lynch-Syndrom Informationsportal'): string {
  let title = content.title;
  if (content.category === 'prevention') {
    title = `Vorsorge beim Lynch-Syndrom – ${title}`;
  } else if (content.category === 'genetic-testing') {
    title = `Genetische Tests auf Lynch-Syndrom – ${title}`;
  }
  return `${title} ${suffix}`;
}

export function generateMetaDescription(content: SEOContent): string {
  return content.description.length > 160 ? content.description.substring(0, 157) + '...' : content.description;
}

export function generateStructuredData(content: SEOContent): string {
  if (content.category === 'faq') {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [{
        '@type': 'Question',
        'name': content.title,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': content.description
        }
      }]
    });
  } else if (content.category === 'medical') {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      'name': 'Lynch-Syndrom',
      'alternateName': 'Hereditäres non-polypöses kolorektales Karzinom (HNPCC)',
      'description': 'Das Lynch-Syndrom ist eine erbliche Veranlagung, die das Risiko für bestimmte Krebsarten erhöht.',
      'code': {
        '@type': 'MedicalCode',
        'code': 'C0242960',
        'codingSystem': 'UMLS'
      }
    });
  }
  return '';
}