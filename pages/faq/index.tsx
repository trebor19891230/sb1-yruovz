import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getSEOData } from '@/lib/seo-content';

export default function FAQIndex({ faqPages }) {
  return (
    <Layout title="FAQ | Lynch-Syndrom Informationsportal" description="Häufig gestellte Fragen zum Lynch-Syndrom">
      <Head>
        <title>FAQ | Lynch-Syndrom Informationsportal</title>
        <meta name="description" content="Häufig gestellte Fragen zum Lynch-Syndrom" />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Häufig gestellte Fragen zum Lynch-Syndrom</h1>
      <ul className="space-y-4">
        {faqPages.map((page) => (
          <li key={page.slug}>
            <Link href={`/faq/${page.slug}`} className="text-blue-600 hover:underline">
              {page.title}
            </Link>
            <p className="text-gray-600">{page.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const seoData = getSEOData();
  return {
    props: {
      faqPages: seoData.faq,
    },
  };
}