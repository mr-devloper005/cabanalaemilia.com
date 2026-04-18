import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Business listings · Visual gallery',
  },
  footer: {
    tagline: 'Trusted directory and media discovery',
  },
  hero: {
    badge: 'Gallery meets verified directory',
    title: ['Showcase brands and', 'moments worth saving.'],
    description:
      'Browse structured business profiles alongside a living image gallery—built for fast scanning, clear trust cues, and confident next steps.',
    primaryCta: {
      label: 'Explore directory',
      href: '/listings',
    },
    secondaryCta: {
      label: 'Open gallery',
      href: '/images',
    },
    searchPlaceholder: 'Search businesses, categories, or visual posts',
    focusLabel: 'Focus',
    featureCardBadge: 'Featured visuals',
    featureCardTitle: 'Fresh imagery and listings stay in sync on the homepage.',
    featureCardDescription:
      'Spotlight cards rotate between gallery highlights and directory signals so discovery feels cohesive, not fragmented.',
  },
  home: {
    metadata: {
      title: 'Business directory and image gallery',
      description:
        'Discover verified listings and browse a curated image gallery—one premium surface for operators and audiences.',
      openGraphTitle: 'Business directory and image gallery',
      openGraphDescription:
        'Explore trusted business pages and immersive visual posts with a unified discovery rhythm.',
      keywords: ['business directory', 'image gallery', 'local listings', 'visual discovery', 'brand showcase'],
    },
    introBadge: 'Why this platform',
    introTitle: 'Purpose-built for listings and visual storytelling together.',
    introParagraphs: [
      'Operators need crisp business metadata while audiences expect gallery-grade imagery. This experience keeps both lanes visible without burying either one.',
      'Cards, filters, and hero modules mirror how people actually decide: scan proof, compare options, then dive into richer media when curiosity spikes.',
      'Every surface stays lightweight so mobile discovery stays fast while desktop layouts can breathe with premium spacing and depth.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Directory-first scanning with trust-forward badges and location cues.',
      'Gallery panels that reward large imagery without sacrificing performance.',
      'Motion and color tuned for clarity—electric blue accents on deep navy structure.',
      'Responsive navigation that keeps search, upload, and contact actions one tap away.',
    ],
    primaryLink: {
      label: 'Browse directory',
      href: '/listings',
    },
    secondaryLink: {
      label: 'View gallery',
      href: '/images',
    },
  },
  cta: {
    badge: 'Start publishing',
    title: 'List your business, share standout visuals, and stay discoverable.',
    description:
      'Create a profile, upload gallery-ready media, and keep your audience moving from curiosity to contact in fewer steps.',
    primaryCta: {
      label: 'Create free account',
      href: '/register',
    },
    secondaryCta: {
      label: 'Talk with us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Read articles, stories, guides, and long-form posts across topics and interests.',
  },
  listing: {
    title: 'Business directory',
    description: 'Explore verified listings, services, and brands with structured metadata built for fast decisions.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Browse classifieds, offers, notices, and time-sensitive posts across categories.',
  },
  image: {
    title: 'Image gallery',
    description: 'Browse immersive galleries and visual stories that connect back to trusted business profiles.',
  },
  profile: {
    title: 'Profiles and public pages',
    description: 'Discover public profiles, brand pages, and identity-focused posts in one place.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'Browse useful links, saved references, and curated resources organized for discovery.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Open reports, documents, and downloadable resources shared across the platform.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings pair with the image gallery so proof-rich media and structured metadata stay one click apart.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Browse gallery', href: '/images' },
      { label: 'Add a listing', href: '/create/listing' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Images take the lead in this section through galleries, visual posts, and story-led content where imagery carries the experience.',
      'Visual posts anchor back to the business directory so every frame can route to structured trust data when visitors are ready.',
      'Browse the latest visual updates, then continue into related listings for contact details, hours, and offers.',
    ],
    links: [
      { label: 'Open directory', href: '/listings' },
      { label: 'Share imagery', href: '/create/image' },
    ],
  },
  profile: {
    title: 'Profiles, identities, and public pages',
    paragraphs: [
      'Profiles capture the identity behind a business, creator, brand, or project and help visitors understand who is behind the content they are exploring.',
      'These pages work as trust anchors across the site and connect naturally with stories, listings, documents, and other post types.',
      'Browse profiles to understand people and brands more clearly, then continue into related content from the same source.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'Browse images', href: '/images' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
