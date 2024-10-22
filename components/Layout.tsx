import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Lynch-Syndrom Informationsportal'}</title>
        <meta name="description" content={description || 'Umfassende Informationen und Ressourcen zum Lynch-Syndrom für Betroffene und Angehörige in Deutschland'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Startseite</Link></li>
              <li><Link href="/ueber-lynch-syndrom" className="hover:underline">Über Lynch-Syndrom</Link></li>
              <li><Link href="/genetische-beratung" className="hover:underline">Genetische Beratung</Link></li>
              <li><Link href="/praevention" className="hover:underline">Prävention</Link></li>
              <li><Link href="/diagnose" className="hover:underline">Diagnose</Link></li>
              <li><Link href="/patientengeschichten" className="hover:underline">Patientengeschichten</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 py-6">
            <p>&copy; 2023 Lynch-Syndrom Informationsportal. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </div>
    </>
  )
}