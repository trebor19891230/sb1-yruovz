import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { generateMetaTitle, generateMetaDescription } from '@/lib/seo-helpers';

interface PreventionEvent {
  id: string;
  title: string;
  date: string;
  location: string;
}

interface VorsorgeProps {
  staticContent: {
    title: string;
    description: string;
    body: string;
  };
}

export default function Vorsorge({ staticContent }: VorsorgeProps) {
  const [events, setEvents] = useState<PreventionEvent[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      // In a real-world scenario, this would be an API call
      const response = await fetch('/api/prevention-events');
      const data = await response.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  const metaTitle = generateMetaTitle({ ...staticContent, category: 'prevention' });
  const metaDescription = generateMetaDescription({ ...staticContent, category: 'prevention' });

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{staticContent.title}</h1>
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: staticContent.body }} />
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Aktuelle Vorsorge-Veranstaltungen</h2>
        {events.length > 0 ? (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p><strong>Datum:</strong> {event.date}</p>
                <p><strong>Ort:</strong> {event.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Derzeit sind keine Veranstaltungen geplant. Bitte schauen Sie später wieder vorbei.</p>
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real-world scenario, this data would come from a CMS or API
  const staticContent = {
    title: "Vorsorge beim Lynch-Syndrom",
    description: "Informationen zur Vorsorge und Früherkennung bei Lynch-Syndrom. Erfahren Sie mehr über empfohlene Untersuchungen und Präventionsmaßnahmen.",
    body: `
      <h2>Warum ist Vorsorge bei Lynch-Syndrom wichtig?</h2>
      <p>Regelmäßige Vorsorgeuntersuchungen sind für Menschen mit Lynch-Syndrom besonders wichtig, da sie ein erhöhtes Risiko für bestimmte Krebsarten haben. Durch frühzeitige Erkennung können viele Krebserkrankungen erfolgreich behandelt werden.</p>
      
      <h2>Empfohlene Vorsorgeuntersuchungen</h2>
      <ul>
        <li><strong>Darmspiegelung (Koloskopie):</strong> Jährlich ab dem Alter von 20-25 Jahren</li>
        <li><strong>Gynäkologische Untersuchung:</strong> Jährlich ab dem Alter von 30-35 Jahren</li>
        <li><strong>Magenspiegelung:</strong> Alle 2-3 Jahre ab dem Alter von 30-35 Jahren</li>
        <li><strong>Urinuntersuchung:</strong> Jährlich ab dem Alter von 30-35 Jahren</li>
      </ul>
      
      <h2>Präventionsmaßnahmen</h2>
      <p>Neben regelmäßigen Vorsorgeuntersuchungen können folgende Maßnahmen das Krebsrisiko senken:</p>
      <ul>
        <li>Gesunde Ernährung mit viel Obst, Gemüse und Ballaststoffen</li>
        <li>Regelmäßige körperliche Aktivität</li>
        <li>Verzicht auf Rauchen und übermäßigen Alkoholkonsum</li>
        <li>Aufrechterhaltung eines gesunden Körpergewichts</li>
      </ul>
    `
  };

  return {
    props: {
      staticContent
    },
    revalidate: 60 * 60 * 24 // Revalidate once per day
  };
};