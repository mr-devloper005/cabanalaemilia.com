'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      eyebrow="Company"
      title="Press & media"
      description="Logos, UI captures, and narrative positioning for journalists covering our directory and gallery platform—presented with the same navy shell as the homepage."
      actions={
        <>
          <Button
            variant="secondary"
            className="rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            asChild
          >
            <Link href="/contact">Talk to communications</Link>
          </Button>
          <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
            <Link href="mailto:press@example.com">Email press desk</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
        <Card className={`${surface} border-0 shadow-none`}>
          <CardContent className="space-y-5 p-6 sm:p-8">
            <Badge className="rounded-full bg-[#0052ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">Press kit</Badge>
            <h2 className="text-xl font-semibold text-slate-950">Brand & product assets</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Download approved marks, product screenshots, and narrative snippets describing how listings and gallery surfaces work together.
            </p>
            <div className="space-y-3">
              {mockPressAssets.map((asset) => (
                <div key={asset.id} className="rounded-2xl border border-slate-200/80 bg-[#f4f7fc] px-4 py-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{asset.title}</p>
                      <p className="text-xs text-slate-600">{asset.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="rounded-full border-slate-200 text-slate-600">
                        {asset.fileType}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-slate-200"
                        onClick={() => setActiveAssetId(asset.id)}
                      >
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-full bg-[#0052ff] text-white hover:bg-[#0040cc]"
                        onClick={() =>
                          toast({
                            title: 'Download started',
                            description: `${asset.title} is downloading.`,
                          })
                        }
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-950">Recent coverage</h3>
          {mockPressCoverage.map((item) => (
            <Card key={item.id} className={`${surface} border-0 shadow-none transition hover:-translate-y-0.5`}>
              <CardContent className="p-6 sm:p-7">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#0052ff]">{item.outlet}</div>
                <p className="mt-2 text-base font-semibold text-slate-950">{item.headline}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl rounded-[1.5rem] border border-slate-200/90">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm text-slate-600">{activeAsset?.description}</p>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" className="rounded-full" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="rounded-full bg-[#0052ff] text-white hover:bg-[#0040cc]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
