import Link from 'next/link'
import { ArrowLeft, Globe, Mail, MapPin, Phone, Tag } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { getDirectoryUiPreset } from '@/design/directory-ui'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const subCategory =
    typeof content.subCategory === 'string'
      ? content.subCategory
      : typeof content.subcategory === 'string'
        ? content.subcategory
        : ''

  const ui = getDirectoryUiPreset()

  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }
  const descriptionHtml = formatRichHtml(description, 'Details coming soon.')

  return (
    <div className={`min-h-screen ${ui.shell} bg-[#f3f4f8]`}>
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden border border-[#d9deec] bg-white">
          <div className="px-5 py-4">
            <Link href={taskRoute} className="inline-flex items-center gap-2 text-sm font-medium text-[#2d3753] hover:opacity-90">
              <ArrowLeft className="h-4 w-4" />
              Back to {taskLabel}
            </Link>
            <div className="mt-5 grid gap-5 md:grid-cols-[160px_1fr] md:items-start">
              <div className="relative h-[160px] overflow-hidden border border-[#d9deec] bg-[#f6f8ff]">
                <ContentImage src={images[0]} alt={post.title} fill className="object-contain p-4" priority />
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-[#21304c]">{post.title}</h1>
                <p className="mt-2 text-lg text-[#2d3753]">
                  <span className="font-semibold">Category:</span>{' '}
                  <span className="font-semibold text-[#1d3f9c]">{category || taskLabel}</span>
                </p>
                {subCategory ? (
                  <p className="mt-1 text-sm text-[#55627e]">
                    <span className="font-semibold">Sub Category:</span> {subCategory}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 border border-[#d9deec] bg-white px-2.5 py-1 text-[#3a4763]">
                    <Tag className="h-3.5 w-3.5" />
                    {taskLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {location ? (
            <div className="flex items-center gap-2 border-t border-[#d9deec] bg-[#f9faff] px-5 py-3 text-[#2d3753]">
              <MapPin className="h-4 w-4 text-[#f59f3a]" />
              <span className="text-sm">{location}</span>
            </div>
          ) : null}
        </section>

        <section className="mt-7 border border-[#d9deec] bg-white p-6 sm:p-7">
          <div className="space-y-8">
            <div>
              <h2 className="text-[31px] font-semibold text-[#233457]">Description</h2>
              <RichContent html={descriptionHtml} className="mt-2 text-[15px] leading-7 text-[#3b4762]" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#233457]">Contact Info</h3>
              <div className="mt-4 grid gap-3 text-[15px] text-[#2d3753] sm:grid-cols-2">
                {location ? (
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#213b8f]" />
                    <span>{location}</span>
                  </div>
                ) : null}
                {phone ? (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#213b8f]" />
                    <span>{phone}</span>
                  </div>
                ) : null}
                {email ? (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#213b8f]" />
                    <span>{email}</span>
                  </div>
                ) : null}
                {website ? (
                  <a href={website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#e87520] hover:underline">
                    <Globe className="h-4 w-4 text-[#213b8f]" />
                    {website}
                  </a>
                ) : null}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#233457]">More Business Info</h3>
              <div className="mt-4 grid gap-3 text-[15px] text-[#2d3753] sm:grid-cols-2">
                <div className="font-semibold">Category</div>
                <div>{category || taskLabel}</div>
                {subCategory ? (
                  <>
                    <div className="font-semibold">Sub Category</div>
                    <div>{subCategory}</div>
                  </>
                ) : null}
                {highlights.length ? (
                  <>
                    <div className="font-semibold">Highlights</div>
                    <div>{highlights.slice(0, 4).join(', ')}</div>
                  </>
                ) : null}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#233457]">Personal Info</h3>
              <div className="mt-4 grid gap-3 text-[15px] text-[#2d3753] sm:grid-cols-2">
                {email ? (
                  <>
                    <div className="font-semibold">Email</div>
                    <div>{email}</div>
                  </>
                ) : null}
                {phone ? (
                  <>
                    <div className="font-semibold">Phone</div>
                    <div>{phone}</div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {mapEmbedUrl ? (
          <section className="mt-7 overflow-hidden border border-[#d9deec] bg-white">
            <div className="px-5 py-3">
              <p className="text-sm font-semibold text-[#233457]">Location map</p>
            </div>
            <iframe src={mapEmbedUrl} title={`${post.title} map`} className="h-[300px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </section>
        ) : null}

        {images.length > 1 ? (
          <section className="mt-7 border border-[#d9deec] bg-white p-5">
            <h3 className="text-lg font-semibold text-[#233457]">More Photos</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {images.slice(1, 7).map((image, idx) => {
                const modalId = `photo-modal-${idx + 1}`
                return (
                  <div key={image} className="relative">
                    <a href={`#${modalId}`} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden border border-[#d9deec] bg-[#f7f8fc]">
                        <ContentImage
                          src={image}
                          alt={`${post.title} additional photo`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                    </a>
                    <div
                      id={modalId}
                      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-200 target:pointer-events-auto target:opacity-100"
                    >
                      <a href="#" className="absolute inset-0" aria-label="Close popup" />
                      <div className="relative z-[101] w-full max-w-5xl">
                        <a
                          href="#"
                          aria-label="Close popup"
                          className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-semibold text-slate-900 shadow hover:bg-slate-100"
                        >
                          ×
                        </a>
                        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-black">
                          <ContentImage
                            src={image}
                            alt={`${post.title} enlarged photo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ) : null}

        {related.length ? (
          <section className="mt-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5a6783]">Recommended</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#233457]">More nearby matches</h2>
              </div>
              <span className="inline-flex w-fit items-center gap-2 border border-[#d9deec] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#2d3753]">
                <Tag className="h-3.5 w-3.5" />
                {taskLabel}
              </span>
            </div>
            <div className={ui.relatedGrid}>
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} compact />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
