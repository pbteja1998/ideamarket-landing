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
                        <span className="text-3xl font-semibold">
                          Ideamarket
                        </span>
                      </div>
                    </A>
                  </div>
                </div>
              </nav>
            </div>
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                  data-aos="zoom-y-out"
                >
                  <span className="block">Maximize return on</span>
                  <span className="block text-brand-blue"> attention</span>
                </h1>
                <p
                  className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Profit by discovering and popularizing the world's best
                  knowledge.
                </p>
              </div>

              <div className="flex items-center justify-center inset-y-0 right-0 space-x-2 sm:space-x-4 my-10">
                <A
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand-blue md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  href="https://ideamarket.io"
                  data-aos="zoom-in-down"
                >
                  <svg
                    className="-ml-1 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Launch App
                </A>
              </div>

              <div className="flex flex-wrap justify-center space-x-6 mt-4">
                <div
                  className="flex flex-shrink-0 justify-center flex-grow-0 mt-4"
                  data-aos="zoom-y-out"
                >
                  <A href="https://www.nasdaq.com/articles/ideamarket-is-a-literal-marketplace-for-ideas-and-online-reputation-2021-02-19">
                    <img
                      className="h-8 opacity-50"
                      src="https://ideamarket.io/nasdaq.png"
                      alt="Nasdaq"
                    />
                  </A>
                </div>
                <div
                  className="flex flex-shrink-0 justify-center flex-grow-0 mt-4"
                  data-aos="zoom-y-out"
                >
                  <A href="https://www.vice.com/en/article/pkd8nb/people-have-spent-over-dollar1-million-on-a-literal-marketplace-of-ideas">
                    <img
                      className="h-8 opacity-50"
                      src="https://ideamarket.io/vice.png"
                      alt="Vice"
                    />
                  </A>
                </div>
                <div
                  className="flex flex-shrink-0 justify-center flex-grow-0 mt-4"
                  data-aos="zoom-y-out"
                >
                  <A href="https://www.coindesk.com/ideamarket-online-ideas-online-reputation">
                    <img
                      className="h-8 opacity-50"
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
              <A href="https://ideamarket.io" className="flex justify-center">
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
                  className="h-10"
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
                  className="h-10"
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
