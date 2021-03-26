import A from './A'
import Markdown from './Markdown'

type Member = {
  name: string
  role: string
  image: string
  description: string
  social: {
    twitter: string
    linkedin: string
  }
}

function TeamMember({ member }: { member: Member }) {
  return (
    <li>
      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
        <div
          className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4"
          data-aos="flip-left"
        >
          <img
            className="object-cover object-top shadow-lg rounded-lg"
            src={member.image}
            alt={member.name}
          />
        </div>
        <div className="sm:col-span-2" data-aos="zoom-in">
          <div className="space-y-4">
            <div className="text-lg leading-6 font-medium space-y-1">
              <h3>{member.name}</h3>
              <p className="text-brand-blue">{member.role}</p>
            </div>
            <div className="text-lg">
              <div className="text-gray-500 prose prose-indigo">
                <Markdown>{member.description}</Markdown>
              </div>
            </div>
            <ul className="flex space-x-5">
              <li>
                <A
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </A>
              </li>
              <li>
                <A
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </A>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Team() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
              {members.map((member, index) => (
                <TeamMember member={member} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

const members: Member[] = [
  {
    name: 'Mike Elias',
    role: 'Founder and CEO',
    description: `Mike was Head of Business Development (and the first employee) 
    at Global Liquidity, a startup building 3D trading interfaces, funded by 
    Blocktower Capital and GSR.io. Mike is also a musician and psychology 
    writer with several guest posts on 
    [Ribbonfarm](https://www.ribbonfarm.com/2020/09/03/wittgensteins-revenge/).`,
    image: '/mike.jpeg',
    social: {
      twitter: 'https://twitter.com/harmonylion1',
      linkedin: 'https://www.linkedin.com/in/harmonylion/',
    },
  },
  {
    name: 'Alexander Schlindwein',
    role: 'CTO and Chief Architect',
    description: `Alexander has been developing Ethereum smart contracts for 
    over 4 years. He built MakerAuctions, contributed to rDAI, and claimed 
    one the [largest bug bounties](https://twitter.com/RobertMCForster/status/1356787647457320961?s=20) 
    in the history of Ethereum.
     
    `,
    image: '/alex.jpeg',
    social: {
      twitter: 'https://twitter.com/bobface16',
      linkedin: 'https://www.linkedin.com/in/alexander-schlindwein-aa57861b6/',
    },
  },
]
