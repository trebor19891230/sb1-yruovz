import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { generateMetaTitle, generateMetaDescription, generateStructuredData } from '@/lib/seo-helpers';

interface GenetischeBeratungProps {
  content: {
    title: string;
    description: string;
    body: string;
  };
}

export default function GenetischeBeratung({ content }: GenetischeBeratungProps) {
  const metaTitle = generateMetaTitle({ ...content, category: 'medical' });
  const metaDescription = generateMetaDescription({ ...content, category: 'medical' });
  const structuredData = generateStructuredData({ ...content, category: 'medical' });

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
        <div dangerouslySetInnerHTML={{ __html: content.body }} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real-world scenario, this data would come from a CMS or API
  const content = {
    title: "Genetische Beratung für Lynch-Syndrom",
    description: "Erfahren Sie mehr über die genetische Beratung bei Lynch-Syndrom und wie sie Ihnen helfen kann, fundierte Entscheidungen zu treffen.",
    body: `
      <h2>Was ist genetische Beratung?</h2>
      <p>Genetische Beratung ist ein Prozess, der Ihnen hilft, die medizinischen, psychologischen und familiären Auswirkungen genetischer Erkrankungen wie dem Lynch-Syndrom zu verstehen und damit umzugehen.</p>
      
      <h2>Warum ist genetische Beratung bei Lynch-Syndrom wichtig?</h2>
      <p>Eine genetische Beratung kann Ihnen helfen:</p>
      <ul>
        <li>Ihr persönliches Risiko für Lynch-Syndrom zu verstehen</li>
        <li>Die Vor- und Nachteile genetischer Tests abzuwägen</li>
        <li>Die möglichen Auswirkungen auf Ihre Familie zu verstehen</li>
        <li>Geeignete Vorsorge- und Behandlungsoptionen zu identifizieren</li>
      </ul>
      
      <h2>Was erwartet Sie bei einer genetischen Beratung?</h2>
      <p>Bei einer genetischen Beratung werden Sie:</p>
      <ul>
        <li>Ihre persönliche und familiäre Krankengeschichte besprechen</li>
        <li>Informationen über Lynch-Syndrom und genetische Tests erhalten</li>
        <li>Die möglichen Ergebnisse und deren Bedeutung diskutieren</li>
        <li>Unterstützung bei der Entscheidungsfindung erhalten</li>
      </ul>
    `
  };

  return {
    props: {
      content
    },
    revalidate: 60 * 60 * 24 // Revalidate once per day
  };
};