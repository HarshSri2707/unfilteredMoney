export const insuranceData = {
  topPicks: [
    {
      id: 1,
      name: 'HDFC Life Click 2 Protect',
      provider: 'HDFC Life',
      image: '/images/insurance/hdfc-term.jpg',
      type: 'term-life',
      rating: '4.6',
      claimSettlementRatio: '99.1%',
      premiumEstimate: '₹450/month for ₹50L cover',
      pros: [
        'High claim settlement ratio',
        'Affordable premiums for young applicants',
        'Multiple payout options available'
      ],
      cons: [
        'Premium increases with age',
        'Medical tests required for high coverage'
      ],
      bestFor: 'Young professionals starting families',
      featured: true
    },
    {
      id: 2,
      name: 'ICICI Lombard Health Advantage',
      provider: 'ICICI Lombard',
      image: '/images/insurance/icici-health.jpg',
      type: 'health',
      rating: '4.5',
      claimSettlementRatio: '96.8%',
      premiumEstimate: '₹8,500/year for ₹5L cover',
      pros: [
        'No-claim bonus up to 50%',
        'Covers modern treatments & procedures',
        'Cashless facility at 7000+ hospitals'
      ],
      cons: [
        'Waiting period for pre-existing diseases',
        'Co-payment for senior citizens'
      ],
      bestFor: 'Individuals & families seeking comprehensive coverage',
      featured: true
    },
    {
      id: 3,
      name: 'Max Life Smart Secure Plus',
      provider: 'Max Life Insurance',
      image: '/images/insurance/max-term.jpg',
      type: 'term-life',
      rating: '4.7',
      claimSettlementRatio: '99.3%',
      premiumEstimate: '₹520/month for ₹1Cr cover',
      pros: [
        'Industry-leading claim settlement',
        'Flexible payout options',
        'Critical illness rider available'
      ],
      cons: [
        'Slightly higher premiums',
        'Limited offline presence'
      ],
      bestFor: 'Those seeking maximum coverage',
      featured: true
    }
  ],

  allPolicies: [
    {
      id: 1,
      name: 'HDFC Life Click 2 Protect',
      provider: 'HDFC Life',
      image: '/images/insurance/hdfc-term.jpg',
      type: 'term-life',
      rating: '4.6',
      claimSettlementRatio: '99.1%',
      premiumEstimate: '₹450/month for ₹50L',
      bestFor: 'Young professionals',
      featured: true
    },
    {
      id: 2,
      name: 'ICICI Lombard Health',
      provider: 'ICICI Lombard',
      image: '/images/insurance/icici-health.jpg',
      type: 'health',
      rating: '4.5',
      claimSettlementRatio: '96.8%',
      premiumEstimate: '₹8,500/year for ₹5L',
      bestFor: 'Families',
      featured: true
    },
    {
      id: 3,
      name: 'Max Life Smart Secure',
      provider: 'Max Life',
      image: '/images/insurance/max-term.jpg',
      type: 'term-life',
      rating: '4.7',
      claimSettlementRatio: '99.3%',
      premiumEstimate: '₹520/month for ₹1Cr',
      bestFor: 'High coverage seekers',
      featured: true
    },
    {
      id: 4,
      name: 'Star Health Comprehensive',
      provider: 'Star Health',
      image: '/images/insurance/star-health.jpg',
      type: 'health',
      rating: '4.3',
      claimSettlementRatio: '94.2%',
      premiumEstimate: '₹7,200/year for ₹3L',
      bestFor: 'Budget families',
      featured: false
    },
    {
      id: 5,
      name: 'ICICI Lombard Car',
      provider: 'ICICI Lombard',
      image: '/images/insurance/icici-car.jpg',
      type: 'vehicle',
      rating: '4.4',
      claimSettlementRatio: '95.5%',
      premiumEstimate: '₹4,500/year',
      bestFor: 'New car owners',
      featured: false
    }
  ],

  categories: [
    {
      id: 'term-life',
      slug: 'term-life',
      name: 'Term Life Insurance',
      description: 'Pure protection for your family\'s financial future',
      icon: '🛡️',
      image: '/images/insurance/category-term.jpg',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'health',
      slug: 'health',
      name: 'Health Insurance',
      description: 'Medical coverage for you and your loved ones',
      icon: '❤️',
      image: '/images/insurance/category-health.jpg',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'vehicle',
      slug: 'vehicle',
      name: 'Vehicle Insurance',
      description: 'Protect your car or bike from accidents & theft',
      icon: '🚗',
      image: '/images/insurance/category-vehicle.jpg',
      color: 'from-green-500 to-emerald-600'
    }
  ],

  faqData: [
    {
      question: 'What is the difference between term and whole life insurance?',
      answer: 'Term insurance provides coverage for a specific period (e.g., 20-30 years) at lower premiums, while whole life insurance covers you for life but costs more and includes an investment component.'
    },
    {
      question: 'How much term insurance coverage do I need?',
      answer: 'A common rule is 10-15 times your annual income. Consider your debts, dependents, future expenses (children\'s education), and existing coverage to determine the right amount.'
    },
    {
      question: 'What is claim settlement ratio and why does it matter?',
      answer: 'Claim settlement ratio shows the percentage of claims an insurer paid out vs. rejected. A ratio above 95% is considered good. It indicates the likelihood of your claim being honored.'
    },
    {
      question: 'When should I buy health insurance?',
      answer: 'Buy health insurance as early as possible, ideally in your 20s or early 30s. Premiums are lower when you\'re young and healthy, and you can avoid waiting periods for pre-existing conditions.'
    }
  ],

  whyMatters: [
    {
      title: 'Financial Security',
      description: 'Protect your family from unexpected expenses and ensure their future is secure even in your absence',
      points: [
        'Covers outstanding loans and debts',
        'Ensures children\'s education continues',
        'Maintains family\'s lifestyle',
        'Provides emergency funds'
      ]
    },
    {
      title: 'Tax Benefits',
      description: 'Save significantly on taxes while securing your future with various insurance policies',
      points: [
        'Section 80C: Up to ₹1.5L deduction on life insurance',
        'Section 80D: Up to ₹25K for health insurance',
        'Additional ₹50K for senior citizen health insurance',
        'Tax-free maturity benefits'
      ]
    },
    {
      title: 'Medical Peace of Mind',
      description: 'Access quality healthcare without worrying about the financial burden',
      points: [
        'Cashless treatment at network hospitals',
        'Coverage for pre and post hospitalization',
        'Day care procedures included',
        'No claim bonus rewards'
      ]
    },
    {
      title: 'Long-term Wealth Building',
      description: 'Build a secure financial foundation while protecting your loved ones',
      points: [
        'Disciplined savings habit',
        'Protection + investment in one',
        'Inflation-beating returns',
        'Legacy for next generation'
      ]
    }
  ],

  calculatorGuide: {
    title: 'How to Calculate Your Coverage',
    steps: [
      {
        step: 1,
        title: 'Calculate Total Income',
        description: 'Multiply your annual income by 10-15 years'
      },
      {
        step: 2,
        title: 'Add Future Expenses',
        description: 'Include children\'s education, marriage, and other goals'
      },
      {
        step: 3,
        title: 'Consider Existing Liabilities',
        description: 'Add home loan, car loan, and other debts'
      },
      {
        step: 4,
        title: 'Subtract Existing Coverage',
        description: 'Deduct any existing insurance or savings'
      }
    ],
    formula: 'Required Coverage = (Annual Income × 10-15) + Future Expenses + Liabilities - Existing Coverage'
  }
};