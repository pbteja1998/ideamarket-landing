import classNames from 'classnames'
import { useState } from 'react'
import Markdown from 'markdown-to-jsx'
import { FAQ, faqQuestions } from 'src/constants'

function FAQQuestion({ faq }: { faq: FAQ }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button
          className="text-left w-full flex justify-between items-start text-gray-400"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="font-medium text-gray-900 prose">
            {faq.question}
          </span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={classNames(
                'h-4 w-4 transform',
                isCollapsed ? 'rotate-0' : '-rotate-180'
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      {!isCollapsed && (
        <dd className="mt-2 pr-12">
          <div className="prose prose-indigo text-gray-500">
            <Markdown>{faq.answer}</Markdown>
          </div>
        </dd>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqQuestions.map((faq, index) => (
                <FAQQuestion faq={faq} key={index} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
