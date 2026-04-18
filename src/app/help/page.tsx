import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const topics = [
  {
    title: 'Launching your directory profile',
    description: 'Field-by-field guidance for addresses, categories, hours, and trust badges that scan cleanly on mobile.',
  },
  {
    title: 'Gallery uploads & moderation',
    description: 'Aspect ratios, alt text, batch uploads, and how listings stay linked when media updates.',
  },
  {
    title: 'Search & discovery tips',
    description: 'How ranking signals blend structured metadata with gallery engagement without keyword stuffing.',
  },
  {
    title: 'Billing & seats',
    description: 'Inviting teammates, managing roles, and exporting analytics for leadership reviews.',
  },
]

export default function HelpPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Help Center"
      description="Guides for teams publishing business directory pages and gallery posts—organized with the same electric-blue accents and spacious cards as the homepage."
      actions={
        <>
          <Button
            variant="secondary"
            className="rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            asChild
          >
            <Link href="/status">Platform status</Link>
          </Button>
          <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
            <Link href="/contact">Contact support</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Popular guides</h2>
          <p className="mt-2 text-sm text-slate-600">Jump into a topic—we keep each guide short, visual, and actionable.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <Card key={topic.title} className={`${surface} border-0 shadow-none transition hover:-translate-y-0.5`}>
                <CardContent className="p-6 sm:p-7">
                  <h3 className="text-base font-semibold text-slate-950">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Card className={`${surface} border-0 shadow-none`}>
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-950">FAQ</h3>
            <p className="mt-2 text-sm text-slate-600">Quick answers while we expand the knowledge base.</p>
            <Accordion type="single" collapsible className="mt-5">
              {mockFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-slate-200/80">
                  <AccordionTrigger className="text-left text-sm font-semibold text-slate-950 hover:text-[#0052ff]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
