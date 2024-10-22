import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { generateMetaTitle, generateMetaDescription } from '@/lib/seo-helpers';

interface ClinicalTrial {
  id: string;
  title: string;
  description: string;
  location: string;
  contactInfo: string;
}

interface ClinicalTrialsProps {
  trials: ClinicalTrial[];
}

export default function ClinicalTrials({ trials }: ClinicalTrialsProps) {
  const metaTitle = generateMetaTitle({ title: "Klinische Studien zum Lynch-Syndrom", category: 'medical' });
  const metaDescription = generateMetaDescription({ description: "Aktuelle klinische Studien zum Lynch-Syndrom in Deutschland. Finden Sie Möglichkeiten zur Teilnahme an Forschungsprojekten.", category: 'medical' });

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
        <h1 className="text-3xl font-bold mb-6">Klinische Studien zum Lynch-Syndrom</h1>
        <p className="mb-6">Hier finden Sie aktuelle klinische Studien zum Lynch-Syndrom in Deutschland. Die Teilnahme an klinischen Studien kann dazu beitragen, neue Behandlungsmöglichkeiten zu entwickeln und unser Verständnis der Erkrankung zu verbessern.</p>
        
        {trials.length > 0 ? (
          <ul className="space-y-6">
            {trials.map((trial) => (
              <li key={trial.id} className="border p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">{trial.title}</h2>
                <p className="mb-2">{trial.description}</p>
                <p className="mb-1"><strong>Standort:</strong> {trial.location}</p>
                <p><strong>Kontakt:</strong> {trial.contactInfo}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Derzeit sind keine klinischen Studien verfügbar. Bitte schauen Sie später wieder vorbei.</p>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // In a real-world scenario, you would fetch this data from an API or database
  const trials: ClinicalTrial[] = [
    {
      id: "NCT12345678",
      title: "Wirksamkeit neuer Screening-Methoden bei Lynch-Syndrom",
      description: "Diese Studie untersucht innovative Screening-Methoden zur frühzeitigen Erkennung von Darmkrebs bei Patienten mit Lynch-Syndrom.",
      location: "Universitätsklinikum Heidelberg",
      contactInfo: "Dr. Maria Schmidt, maria.schmidt@uniklinik-heidelberg.de, +49 6221 123456"
    },
    {
      id: "NCT87654321",
      title: "Immuntherapie bei Lynch-Syndrom-assoziierten Tumoren",
      description: "Untersuchung der Wirksamkeit einer neuen Immuntherapie bei Patienten mit fortgeschrittenen, Lynch-Syndrom-assoziierten Tumoren.",
      location: "Charité - Universitätsmedizin Berlin",
      contactInfo: "Prof. Dr. Thomas Müller, thomas.mueller@charite.de, +49 30 987654"
    }
  ];

  return {
    props: {
      trials
    }
  };
};