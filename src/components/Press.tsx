import A from './A'
export default function Press() {
  return (
    <>
      <div className="bg-indigo-200 bg-opacity-25">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">
              Featured in leading publications
            </h2>
            <div className="flow-root self-center mt-8 lg:mt-0">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                <div
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
                  data-aos="zoom-y-out"
                >
                  <A
                    href="https://www.nasdaq.com/articles/ideamarket-is-a-literal-marketplace-for-ideas-and-online-reputation-2021-02-19"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img
                      className="h-10"
                      src="https://ideamarket.io/nasdaq.png"
                      alt="Nasdaq"
                    />
                  </A>
                </div>
                <div
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
                  data-aos="zoom-y-out"
                >
                  <A
                    href="https://www.vice.com/en/article/pkd8nb/people-have-spent-over-dollar1-million-on-a-literal-marketplace-of-ideas"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img
                      className="h-10"
                      src="https://ideamarket.io/vice.png"
                      alt="Vice"
                    />
                  </A>
                </div>
                <div
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
                  data-aos="zoom-y-out"
                >
                  <A
                    href="https://www.coindesk.com/ideamarket-online-ideas-online-reputation"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img
                      className="h-10"
                      src="https://ideamarket.io/coindesk.png"
                      alt="Coindesk"
                    />
                  </A>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
