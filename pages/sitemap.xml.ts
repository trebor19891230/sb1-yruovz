import { GetServerSideProps } from 'next';
import { getAllSEOSlugs } from '@/lib/seo-content';

const BASE_URL = 'https://www.lynch-syndrom.de'; // Replace with your actual domain

function generateSiteMap(slugs: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/lynch-syndrom/genetische-beratung</loc>
     </url>
     <url>
       <loc>${BASE_URL}/lynch-syndrom/vorsorge</loc>
     </url>
     <url>
       <loc>${BASE_URL}/klinische-studien/lynch-syndrom</loc>
     </url>
     ${slugs
       .map((slug) => {
         return `
       <url>
           <loc>${`${BASE_URL}${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const slugs = getAllSEOSlugs();

  const sitemap = generateSiteMap(slugs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {}