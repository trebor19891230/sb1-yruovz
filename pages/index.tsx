import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Familien mit Lynch</span>
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="#about" className="text-sm font-medium">Über Uns</Link>
            <Link href="#resources" className="text-sm font-medium">Ressourcen</Link>
            <Link href="#stories" className="text-sm font-medium">Erfahrungsberichte</Link>
            <Link href="#news" className="text-sm font-medium">Neuigkeiten</Link>
            <Link href="#contact" className="text-sm font-medium">Kontakt</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-20 flex items-center justify-center text-center text-white bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="relative z-10 space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Gemeinsam stark im Kampf gegen das Lynch-Syndrom
            </h1>
            <p className="mx-auto max-w-[700px] text-lg sm:text-xl text-gray-200">
              Erfahren Sie mehr über das Lynch-Syndrom, lesen Sie persönliche Geschichten und entdecken Sie wertvolle Ressourcen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors">
                <Link href="#resources">Mehr erfahren</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transition-colors">
                <Link href="#contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services / Resources Section */}
        <section id="resources" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Unsere Ressourcen
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Genetische Beratung Lynch-Syndrom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Erfahren Sie, wie genetische Beratung Ihnen helfen kann, Ihr Risiko zu verstehen und Vorsorgemaßnahmen zu ergreifen.</p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="/genetische-beratung">Mehr erfahren</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>FAQ zum Lynch-Syndrom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Antworten auf häufig gestellte Fragen zum Lynch-Syndrom, genetischen Tests und Vorsorgeuntersuchungen.</p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="/faq">Mehr erfahren</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Prävention beim Lynch-Syndrom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Erfahren Sie, welche Vorsorgemaßnahmen Sie ergreifen können, um Krebsrisiken zu minimieren.</p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="/praevention">Mehr erfahren</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Personal Stories / Testimonials */}
        <section id="stories" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Erfahrungsberichte
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    "Als bei uns das Lynch-Syndrom diagnostiziert wurde, stand unsere Welt still. Doch mit der richtigen Unterstützung konnten wir einen Weg finden, damit umzugehen und unser Leben positiv zu gestalten."
                  </p>
                  <p className="font-semibold">Familie Müller</p>
                  <Button variant="link" asChild>
                    <Link href="/erfahrungsberichte">Lesen Sie mehr</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    "Durch genetische Tests konnte ich frühzeitig handeln und mein Risiko minimieren. Ich bin dankbar für die Unterstützung und Informationen, die ich erhalten habe."
                  </p>
                  <p className="font-semibold">Petra Schmidt</p>
                  <Button variant="link" asChild>
                    <Link href="/erfahrungsberichte">Lesen Sie mehr</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action (Newsletter Signup) */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Abonnieren Sie unseren Newsletter
              </h2>
              <p className="text-muted-foreground">
                Bleiben Sie auf dem Laufenden über das Lynch-Syndrom und erhalten Sie wertvolle Ressourcen und Tipps.
              </p>
              <form className="w-full max-w-md space-y-2">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="E-Mail-Adresse" />
                <Button type="submit" className="w-full">Anmelden</Button>
              </form>
            </div>
          </div>
        </section>

        {/* Blog Section (Latest News) */}
        <section id="news" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Neuigkeiten & Blog
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Wie regelmäßige Vorsorgeuntersuchungen beim Lynch-Syndrom helfen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regelmäßige Untersuchungen sind entscheidend, um das Krebsrisiko beim Lynch-Syndrom zu senken...
                  </p>
                  <Button variant="link" asChild className="mt-4 p-0">
                    <Link href="/blog/vorsorgeuntersuchungen">Lesen Sie mehr</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Neue Forschungsergebnisse zum Lynch-Syndrom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Die neuesten wissenschaftlichen Erkenntnisse zeigen wichtige Fortschritte in der Früherkennung und Behandlung von Lynch-Syndrom.
                  </p>
                  <Button variant="link" asChild className="mt-4 p-0">
                    <Link href="/blog/forschungsergebnisse">Lesen Sie mehr</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Leben mit Lynch-Syndrom: Tipps für den Alltag</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Praktische Ratschläge und Erfahrungen von Betroffenen für ein positives Leben mit Lynch-Syndrom.
                  </p>
                  <Button variant="link" asChild className="mt-4 p-0">
                    <Link href="/blog/leben-mit-lynch">Lesen Sie mehr</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Kontaktieren Sie Uns
            </h2>
            <div className="mx-auto max-w-md space-y-4">
              <form className="space-y-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="E-Mail-Adresse" />
                <Textarea placeholder="Ihre Nachricht" />
                <Button type="submit" className="w-full">Absenden</Button>
              </form>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <InstagramIcon className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <TwitterIcon className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Häufig gestellte Fragen
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Was ist das Lynch-Syndrom?</AccordionTrigger>
                <AccordionContent>
                  Das Lynch-Syndrom ist eine genetische Erkrankung, die das Risiko für verschiedene Krebsarten erhöht. Es wird durch Veränderungen (Mutationen) in bestimmten Genen verursacht, die für die Reparatur von DNA-Schäden verantwortlich sind.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Welche Vorsorgemaßnahmen gibt es?</AccordionTrigger>
                <AccordionContent>
                  Regelmäßige Krebsvorsorge und genetische Beratung sind entscheidend, um Risiken zu minimieren. Dazu gehören regelmäßige Darmspiegelungen, gynäkologische Untersuchungen, und je nach individueller Situation weitere spezifische Screenings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Wie wird das Lynch-Syndrom vererbt?</AccordionTrigger>
                <AccordionContent>
                  Das Lynch-Syndrom wird autosomal-dominant vererbt. Das bedeutet, dass ein Kind eines betroffenen Elternteils eine 50%ige Chance hat, die genetische Veränderung zu erben. Eine genetische Beratung kann helfen, das individuelle Risiko besser zu verstehen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            © 2024 Familien mit Lynch. Alle Rechte vorbehalten.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Impressum
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Datenschutz
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Nutzungsbedingungen
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}