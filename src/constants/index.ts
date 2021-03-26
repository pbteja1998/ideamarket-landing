export type FAQ = {
  question: string
  answer: string
}

export const faqQuestions: FAQ[] = [
  {
    question: 'Is Ideamarket a prediction market?',
    answer: `Ideamarket is **not** a prediction market.

On a prediction market:  

- Winners and losers are decided by specific events  
- The market closes at a certain moment  
- An oracle reports what’s “true”  

Ideamarket is more like a commodity market:

- Winners and losers are decided by market cycles  
- The market never closes — it’s perpetual  
- There’s no oracle or “source of truth." Instead, the market aggregates 
its participants’ subjective judgments from moment to moment, informed by freely 
chosen set of criteria, and the hindsight of history and experience.  

**Ideamarket is designed to allocate scarce natural resources — trust and 
attention — between parties with conflicting interests.**
    `,
  },
  {
    question: 'Are Ideamarket listings market-curated endowments?',
    answer: `Ideamarket listings are “market-curated endowments” in the sense that:

- The principal is determined by **market confidence**
- The principal **generates income**, like an endowment, for the listing owner 
via [compound.finance​](https://https://compound.finance/)  
    `,
  },
  {
    question: 'How do I get listed?',
    answer: `See [Add new listings](https://docs.ideamarket.io/user-guide/hiw-add-new-listings).`,
  },
  {
    question: 'Do tokens provide special rights?',
    answer: `The only purpose of tokens is curation. Buying votes does not 
    entitle the buyer to any part of the listing owner’s profits, nor any other 
    privileges. Ideamarket operates completely independent of listed accounts 
    and assets, and there should never be any expectation otherwise.`,
  },
  {
    question: 'What determines the interest rate?',
    answer: `The interest rate on deposits depends on the current interest rate 
    provided by [compound.finance](https://compound.finance/). Check it out at 
    [loanscan.io](https://loanscan.io/) under “Earn Yield” —> DAI/Compound.`,
  },
  {
    question: 'When will Ideamarket integrate Layer 2 scaling?',
    answer: `As of March 2021, Ideamarket is in the process of migrating to Optimism L2.`,
  },
  {
    question: 'What if an account I bought votes for gets deplatformed?',
    answer: `One of the reasons we created a market is because we want to leave 
    this kind of variable to individual judgment.
    
Since we don't have any control over what platforms do, de-platforming is just 
another risk to consider when picking accounts — or platforms — to buy tokens on.`,
  },
  {
    question: 'How much is the trading fees?',
    answer: `A 1% fee applies to every trade at the smart contract level. 
    Who receives this fee depends on the maturity of the protocol.

Launch stage 

- 0.5% goes to the [platform being curated](https://docs.ideamarket.io/philosophy/why-do-platforms-earn-a-trading-fee)
- 0.5% goes to Idea Markets Inc, the company building Ideamarket protocol`,
  },
  {
    question: 'Are you hiring?',
    answer: `Yes, we are hiring for the following roles.

- [Senior Frontend Developer, mainly React (full-time)](https://cryptocurrencyjobs.co/engineering/ideamarket-senior-frontend-developer/)
- Product Designer (part-time)
- Growth hacker`,
  },
]
