import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getAllSEOSlugs, getSEOContentBySlug, getRelatedContent, SEOContent } from '@/lib/seo-content';
import { generateMetaTitle, generateMetaDescription, generateStructuredData } from '@/lib/seo-helpers';

interface PreventionPageProps {
  content: SEOContent;
  relatedContent: SEOContent[];
}

export default function PreventionPage({ content, relatedContent }: PreventionPageProps) {
  const metaTitle = generateMetaTitle(content);
  const metaDescription = generateMetaDescription(content);
  const structuredData = generateStructuredData(content);

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {structuredData && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
        )}
      </Head>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        {/* Add more content here based on the slug */}
      </article>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Verwandte Themen</h2>
        <ul className="space-y-2">
          {relatedContent.map((item) => (
            <li key={item.slug}>
              <Link href={`/${item.category}/${item.slug}`} className="text-blue-600 hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSEOSlugs().filter(slug => slug.startsWith('/praevention/'));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const content = getSEOContentBySlug(slug);

  if (!content) {
    return {
      notFound: true,
    };
  }

  const relatedContent = getRelatedContent(content);

  return {
    props: {
      content,
      relatedContent,
    },
  };
};