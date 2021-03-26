import { useState } from 'react'
import A from './A'
import Modal from './Modal'
export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
            <div className="relative h-full">
              <svg
                className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
                />
              </svg>
              <svg
                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
                />
              </svg>
            </div>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <A href="https://ideamarket.io">
                      <div className="flex justify-center items-center space-x-2">
                        <span className="sr-only">Ideamarket</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="/logo/vector/logo.svg"
                          alt="Ideamarket Logo"
                        />
                        <span className="hidden sm:block text-3xl font-semibold">
                          Ideamarket
                        </span>
                      </div>
                    </A>
                  </div>
                </div>

                <div className="absolute flex items-center justify-end inset-y-0 right-0 space-x-4">
                  <button
                    type="button"
                    className="inline-flex sm:hidden items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setIsOpen(true)}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="hidden sm:inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    data-aos="zoom-in-up"
                    onClick={() => setIsOpen(true)}
                  >
                    <svg
                      className="-ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Watch Intro
                  </button>
                  <A
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    href="https://ideamarket.io"
                    data-aos="zoom-in-down"
                  >
                    <svg
                      className="-ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={192}
                      height={192}
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width={256} height={256} fill="none" />
                      <path
                        d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
                        fill="none"
                        className="stroke-current"
                        // stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                      <circle cx={180} cy={144} r={12} />
                    </svg>
                    Connect&nbsp;
                    <span className="hidden sm:inline">your&nbsp;</span>
                    wallet
                  </A>
                </div>
              </nav>
            </div>
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                  data-aos="zoom-y-out"
                >
                  <span className="block">Credibility without</span>
                  <span className="block text-brand-blue"> corporations</span>
                </h1>
                <p
                  className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Vote with your dollars, and give underrated voices the
                  visibility they deserve.
                </p>
              </div>

              <div className="flex flex-wrap justify-center space-x-4 mt-4">
                <div
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4 w-20 md:w-44"
                  data-aos="zoom-y-out"
                >
                  <A href="https://www.nasdaq.com/articles/ideamarket-is-a-literal-marketplace-for-ideas-and-online-reputation-2021-02-19">
                    <img
                      className="h-10 opacity-50"
                      src="https://ideamarket.io/nasdaq.png"
                      alt="Nasdaq"
                    />
                  </A>
                </div>
                <div
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4 w-20 md:w-44"
                  data-aos="zoom-y-out"
                >
                  <A href="https://www.vice.com/en/article/pkd8nb/people-have-spent-over-dollar1-million-on-a-literal-marketplace-of-ideas">
                    <img
                      className="h-10 opacity-50"
                      src="https://ideamarket.io/vice.png"
                      alt="Vice"
                    />
                  </A>
                </div>
                <div
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4 w-20 md:w-44"
                  data-aos="zoom-y-out"
                >
                  <A href="https://www.coindesk.com/ideamarket-online-ideas-online-reputation">
                    <img
                      className="h-10 opacity-50"
                      src="https://ideamarket.io/coindesk.png"
                      alt="Coindesk"
                    />
                  </A>
                </div>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="zoom-y-out" data-aos-delay="450">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-brand" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <A href="https://ideamarket.io">
                <img
                  className="relative rounded-lg shadow-2xl"
                  src="/preview.png"
                  alt="App preview screenshot"
                />
              </A>
            </div>
          </div>
        </div>

        <div className="bg-brand">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="flex gap-8 items-center justify-center">
              <div
                className="flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="50"
              >
                <img
                  className="h-12"
                  src="https://ideamarket.io/ethereum.png"
                  alt="powered by ethereum"
                />
              </div>
              <div
                className="flex flex-col items-center justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="100"
              >
                <p className="text-xs text-gray-400">audited by</p>
                <img
                  className="h-12"
                  src="https://ideamarket.io/qs.png"
                  alt="audited by Quantstamp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
