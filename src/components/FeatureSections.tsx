import classNames from 'classnames'
import { ReactNode } from 'react'
import A from './A'
import Markdown from './Markdown'

function FeatureSection({
  isReverse = false,
  img,
  title,
  content,
  action,
  icon,
}: {
  isReverse?: boolean
  img: { src: string; alt: string }
  title: string
  content: string
  action: {
    title: string
    href: string
  }
  icon: ReactNode
}) {
  return (
    <div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div
          className={classNames(
            'px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:py-16',
            isReverse && 'lg:col-start-2'
          )}
          data-aos={isReverse ? 'fade-left' : 'fade-right'}
        >
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-900">
                {icon}
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {title}
              </h2>
              <div className="mt-4 prose text-gray-500">
                <Markdown>{content}</Markdown>
              </div>
              <div className="mt-6">
                <A
                  href={action.href}
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-900 hover:bg-indigo-700"
                >
                  {action.title}
                </A>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'mt-12 sm:mt-16 lg:mt-0',
            isReverse && 'lg:col-start-1'
          )}
          data-aos={isReverse ? 'fade-right' : 'fade-left'}
        >
          <div
            className={classNames(
              'lg:px-0 lg:m-0 lg:relative lg:h-full',
              isReverse
                ? 'pr-4 -ml-48 sm:pr-6 md:-ml-16'
                : 'pl-4 -mr-48 sm:pl-6 md:-mr-16'
            )}
          >
            <img
              className={classNames(
                'w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none',
                isReverse ? 'lg:right-0' : 'lg:left-0'
              )}
              src={img.src}
              alt={img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeatureSections() {
  return (
    <>
      <div className="relative space-y-24 bg-gray-50 py-32 overflow-hidden">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Ideamarket aims to replace corporate media as the arbiter of public
            credibility by offering creators a new income stream based on trust.
          </p>
        </div>
        <FeatureSection
          title="Buy and sell account tokens"
          content={`Buy account tokens to vote on the "attentionworthiness" of 
          that account, and sell to revoke your vote.

The first 1,000 tokens for each listing cost $0.10 each. Token price automatically 
increases by $0.01 for each 100 tokens bought afterward, managed by a bonding 
curve algorithm.
          `}
          img={{ src: '/how-it-works-1.png', alt: '' }}
          action={{ title: 'Buy and Sell', href: 'https://ideamarket.io' }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <FeatureSection
          title="Add your account and earn interest"
          content={`You can list anyone's account (even @elonmusk), as long as 
          it's not already listed. If you add an account owned by someone else,
          interest will accrue to their wallet after a purchase, and they can 
          claim it anytime.

Money spent on tokens is held in compound.finance, a decentralized lending 
protocol. Compound lends these deposits to borrowers, who pay interest 
(usually 1-10% annually).
          `}
          img={{ src: '/how-it-works-2.png', alt: 'Add Listing' }}
          isReverse={true}
          action={{ title: 'Add Listing', href: 'https://ideamarket.io' }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          }
        />
        <FeatureSection
          title="Claim interest"
          content={`All interest generated by token deposits is paid to the owner 
          of the associated social media account. The owner of the account can 
          verify their account and claim the interest.`}
          img={{
            src: '/how-it-works-3.png',
            alt: 'Claim Interest',
          }}
          action={{ title: 'Claim Interest', href: 'https://ideamarket.io' }}
          icon={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            </>
          }
        />
      </div>
    </>
  )
}
