export const insuranceData = {
  topPicks: [
    {
      id: 'hdfc-life-click2protect',
      name: 'HDFC Life Click2Protect',
      type: 'term',
      provider: 'HDFC Life',
      image: '/picks/insurance-1.webp',
      rating: 4.6,
      claimSettlementRatio: '99.1%',
      premiumEstimate: '₹550/month for ₹1Cr cover (30yr, non-smoker)',
      pros: [
        'High claim settlement ratio',
        'Flexible payout options',
        'Critical illness rider available',
      ],
      cons: [
        'Premium increases with age',
        'Medical tests required for higher coverage',
      ],
      bestFor: 'Young professionals seeking pure term insurance',
    },
    {
      id: 'care-health',
      name: 'Care Supreme',
      type: 'health',
      provider: 'Care Health Insurance',
      image: '/images/insurance/care-health.webp',
      rating: 4.4,
      claimSettlementRatio: '94%',
      premiumEstimate: '₹8,000/year for ₹5L family floater',
      pros: [
        'Unlimited automatic restoration of sum insured',
        'No sub-limits on room rent',
        'Annual health checkup included',
      ],
      cons: [
        'Premium increases significantly after 45',
        'Limited hospital network in tier-2 cities',
      ],
      bestFor: 'Families seeking comprehensive health coverage',
    },
  ],
  
  categories: [
    {
      slug: 'term-life',
      name: 'Term Life Insurance',
      description: 'Pure risk cover with highest cover at lowest premium',
    },
    {
      slug: 'health',
      name: 'Health Insurance',
      description: 'Medical coverage for individuals and families',
    },
    {
      slug: 'motor',
      name: 'Motor Insurance',
      description: 'Car and bike insurance with comprehensive coverage',
    },
  ],
  
  faqData: [
    {
      question: 'Do I really need term insurance if I have employer coverage?',
      answer: 'Yes. Employer coverage ends when you leave the job. Term insurance is your own, portable, and usually cheaper when bought young.',
    },
    {
      question: 'What is a claim settlement ratio?',
      answer: 'It\'s the percentage of claims an insurer pays out vs. rejects. Higher is better. Aim for insurers with 95%+ CSR.',
    },
    {
      question: 'Should I buy health insurance with or without sub-limits?',
      answer: 'Always avoid sub-limits on room rent, ICU charges, and specific diseases. They reduce your actual coverage significantly.',
    },
  ],
};