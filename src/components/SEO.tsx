import { Metadata } from 'next'
import { SITE } from '@/lib/constants'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export const generateMetadata = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website'
}: SEOProps): Metadata => {
  const fullTitle = `${title} | ${SITE.name}`
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE.url
  const defaultImage = `${siteUrl}${SITE.defaultImage}`

  return {
    title: fullTitle,
    description,
    keywords: keywords || SITE.keywords.join(', '),
    authors: [{ name: SITE.name }],
    openGraph: {
      title: fullTitle,
      description,
      type,
      url: url || siteUrl,
      siteName: SITE.name,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SITE.twitter,
      images: [image || defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}