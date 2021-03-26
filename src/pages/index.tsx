import {
  FAQSection,
  FeatureSections,
  Footer,
  Hero,
  Newsletter,
  Team,
} from '@/components'
import { NextSeo } from 'next-seo'

export default function Home() {
  const title = 'Ideamarket – Credibility without corporations'
  const description =
    'Vote with your dollars, and give underrated voices the visibility they deserve.'
  const url = 'https://ideamarket.bhanuteja.dev'
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url:
                'https://pbs.twimg.com/card_img/1374709019248562179/ZSxoxqsL?format=jpg&name=medium',
              width: 1200,
              height: 675,
              alt: 'Ideamarket',
            },
            { url: '/preview-2.png' },
          ],
          site_name: 'Ideamarket',
        }}
        twitter={{
          handle: '@pbteja1998',
          site: '@ideamarkets_',
          cardType: 'summary_large_image',
        }}
      />
      <Hero />
      <FeatureSections />
      <Team />
      <FAQSection />
      <Newsletter />
      <Footer />
    </>
  )
}
