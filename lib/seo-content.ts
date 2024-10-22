import fs from 'fs';
import path from 'path';

export interface SEOContent {
  slug: string;
  title: string;
  description: string;
  category: string;
}

interface SEOData {
  prevention: SEOContent[];
  faq: SEOContent[];
  'genetic-testing': SEOContent[];
}

export function getSEOData(): SEOData {
  const filePath = path.join(process.cwd(), 'data', 'seo-keywords.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAllSEOSlugs(): string[] {
  const seoData = getSEOData();
  return [
    ...seoData.prevention.map(item => `/praevention/${item.slug}`),
    ...seoData.faq.map(item => `/faq/${item.slug}`),
    ...seoData['genetic-testing'].map(item => `/genetische-tests/${item.slug}`)
  ];
}

export function getSEOContentBySlug(slug: string): SEOContent | null {
  const seoData = getSEOData();
  const allContent = [
    ...seoData.prevention.map(item => ({ ...item, category: 'prevention' })),
    ...seoData.faq.map(item => ({ ...item, category: 'faq' })),
    ...seoData['genetic-testing'].map(item => ({ ...item, category: 'genetic-testing' }))
  ];
  return allContent.find(item => item.slug === slug) || null;
}

export function getRelatedContent(content: SEOContent, limit: number = 3): SEOContent[] {
  const seoData = getSEOData();
  const allContent = [
    ...seoData.prevention,
    ...seoData.faq,
    ...seoData['genetic-testing']
  ];
  
  return allContent
    .filter(item => item.slug !== content.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}