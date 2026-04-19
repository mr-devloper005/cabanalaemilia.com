import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Clock3 } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildTaskMetadata } from '@/lib/seo'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildTaskMetadata('comment', {
    title: `Editorial & updates | ${SITE_CONFIG.name}`,
    description: 'Product notes, launch stories, and playbook thinking for directory and gallery teams.',
    openGraphTitle: `Editorial & updates | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Stories from the team building listings and visual discovery together.',
  })
}

export default async function BlogPage() {
  const posts = await fetchTaskPosts('comment', 18, { allowMockFallback: true })

  return (
    <PageShell
      eyebrow="Company"
      title="Blog & updates"
      description="Deep dives on how we design directory trust, ship gallery improvements, and help partners launch faster—with the same electric-blue system you see across the product."
      actions={
        <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
          <Link href="/contact">Pitch a story</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Card className={`${surface} border-0 shadow-none`}>
          <CardContent className="space-y-4 p-6 sm:p-8">
            <Badge className="rounded-full bg-[#061225] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              Editorial charter
            </Badge>
            <h2 className="text-xl font-semibold text-slate-950">What we publish here</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li>Launch notes whenever we ship meaningful directory or gallery upgrades.</li>
              <li>Playbooks for creative and ops teams rolling out multi-location content.</li>
              <li>Interviews with partners who reorganized their visual + data stack.</li>
            </ul>
            <div className="rounded-2xl border border-dashed border-[#0052ff]/35 bg-[#f4f7fc] px-4 py-3 text-sm text-slate-700">
              Want coverage? Send angles tied to listings, brand imagery, or local discovery—we reply within five business days.
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {posts.length === 0 ? (
            <Card className={`${surface} border-0 shadow-none`}>
              <CardContent className="p-8 text-center text-sm text-slate-600">Fresh stories are on the way. Check back soon.</CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className={`${surface} border-0 shadow-none transition hover:-translate-y-0.5`}>
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <span className="text-[#0052ff]">Update</span>
                      {post.publishedAt ? <span>· {post.publishedAt}</span> : null}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-950">{post.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{post.summary || 'Notes from the team on product craft and partner workflows.'}</p>
                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                      <Clock3 className="h-3.5 w-3.5" /> 5 min read
                    </p>
                  </div>
                  <Button className="rounded-full bg-[#0052ff] text-white shadow-[0_12px_36px_rgba(0,82,255,0.28)] hover:bg-[#0040cc]" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </PageShell>
  )
}
