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
  const title = 'Ideamarket – Maximize return on attention'
  const description =
    "Profit by discovering and popularizing the world's best knowledge."
  const url = 'https://ideamarket.io'
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
            { url: '/preview.png' },
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
