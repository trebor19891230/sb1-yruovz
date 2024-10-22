import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getSEOData } from '@/lib/seo-content';

export default function PreventionIndex({ preventionPages }) {
  return (
    <Layout title="Prävention | Lynch-Syndrom Informationsportal" description="Informationen zur Prävention und Risikominderung bei Lynch-Syndrom">
      <Head>
        <title>Prävention | Lynch-Syndrom Informationsportal</title>
        <meta name="description" content="Informationen zur Prävention und Risikominderung bei Lynch-Syndrom" />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Prävention beim Lynch-Syndrom</h1>
      <ul className="space-y-4">
        {preventionPages.map((page) => (
          <li key={page.slug}>
            <Link href={`/praevention/${page.slug}`} className="text-blue-600 hover:underline">
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
      preventionPages: seoData.prevention,
    },
  };
}