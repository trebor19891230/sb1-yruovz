import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

interface Clinic {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
}

export default function ResourcesPage() {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClinics() {
      try {
        // In a real-world scenario, you would fetch this data from an API
        const response = await fetch('/api/clinics');
        const data = await response.json();
        setClinics(data);
      } catch (error) {
        console.error('Error fetching clinics:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchClinics();
  }, []);

  return (
    <Layout title="Ressourcen | Lynch-Syndrom Informationsportal" description="Kliniken für genetische Beratung in Deutschland und aktuelle Informationen zum Lynch-Syndrom">
      <Head>
        <title>Ressourcen | Lynch-Syndrom Informationsportal</title>
        <meta name="description" content="Kliniken für genetische Beratung in Deutschland und aktuelle Informationen zum Lynch-Syndrom" />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Ressourcen</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kliniken für genetische Beratung</h2>
        {loading ? (
          <p>Lade Kliniken...</p>
        ) : (
          <ul className="space-y-4">
            {clinics.map((clinic) => (
              <li key={clinic.id} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{clinic.name}</h3>
                <p>{clinic.address}</p>
                <p>Telefon: {clinic.phone}</p>
                <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Website besuchen
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Aktuelle Informationen</h2>
        {/* Here you would integrate a component or logic to fetch and display recent news or updates */}
        <p>Hier werden aktuelle Nachrichten und Informationen zum Lynch-Syndrom angezeigt.</p>
      </section>
    </Layout>
  );
}