export const investmentsData = {
  topPicks: [
    {
      id: 'parag-parikh-flexi',
      name: 'Parag Parikh Flexi Cap Fund',
      category: 'Mutual Funds',
      image: '/picks/parag-fund.webp',
      type: 'mutual-fund',
      rating: '4.9',
      returns: '15.2% (5Y)',
      expenseRatio: '0.78%',
      pros: [
        'International equity exposure (up to 35%)',
        'Long-term wealth creation track record',
        'Low expense ratio compared to peers',
        'Consistent performance across market cycles'
      ],
      cons: [
        'Higher volatility due to international exposure',
        'Not suitable for short-term investors'
      ],
      bestFor: 'Long-term investors seeking diversified exposure',
      featured: true
    },
    {
      id: 'nps-tier-1',
      name: 'National Pension System (NPS)',
      category: 'Pension Plans',
      image: 'https://www.legalraasta.com/blog/wp-content/uploads/2021/10/nps-tier-1.png',
      type: 'pension',
      rating: '4.7',
      returns: '10-12% (historical)',
      expenseRatio: '0.09%',
      pros: [
        'Lowest expense ratio among all investments',
        'Tax benefits under 80C & 80CCD(1B)',
        'Government-backed security',
        'Flexible investment options'
      ],
      cons: [
        'Lock-in until retirement (60 years)',
        'Mandatory annuity purchase (40%)'
      ],
      bestFor: 'Salaried individuals planning for retirement',
      featured: true
    },
    {
      id: 'axis-small-cap',
      name: 'Axis Small Cap Fund',
      category: 'Mutual Funds',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7TnMOp8HVSWPKWakNTfCgxVNOmGRN5q9VA&s',
      type: 'mutual-fund',
      rating: '4.6',
      returns: '18.5% (5Y)',
      expenseRatio: '0.95%',
      pros: [
        'High growth potential from small-cap stocks',
        'Strong research-driven stock selection',
        'Good risk-adjusted returns',
        'Experienced fund management team'
      ],
      cons: [
        'High volatility and risk',
        'Not suitable for conservative investors'
      ],
      bestFor: 'Aggressive investors with 7+ year horizon',
      featured: true
    }
  ],

  allInvestments: [
    {
      id: 'parag-parikh-flexi',
      name: 'Parag Parikh Flexi Cap',
      category: 'mutual-funds',
      image: '/picks/parag-fund.webp',
      type: 'mutual-fund',
      rating: '4.9',
      returns: '15.2% (5Y)',
      bestFor: 'Long-term investors',
      featured: true
    },
    {
      id: 'nps-tier-1',
      name: 'NPS Tier 1',
      category: 'retirement',
      image: 'https://www.legalraasta.com/blog/wp-content/uploads/2021/10/nps-tier-1.png',
      type: 'pension',
      rating: '4.7',
      returns: '10-12%',
      bestFor: 'Retirement planning',
      featured: true
    },
    {
      id: 'axis-small-cap',
      name: 'Axis Small Cap Fund',
      category: 'mutual-funds',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7TnMOp8HVSWPKWakNTfCgxVNOmGRN5q9VA&s',
      type: 'mutual-fund',
      rating: '4.6',
      returns: '18.5% (5Y)',
      bestFor: 'Aggressive investors',
      featured: true
    },
    {
      id: 'ppf',
      name: 'Public Provident Fund',
      category: 'fixed-income',
      image: '/images/investments/ppf.jpg',
      type: 'fixed-income',
      rating: '4.5',
      returns: '7.1% (fixed)',
      bestFor: 'Safe, tax-free returns',
      featured: false
    },
    {
      id: 'gold-etf',
      name: 'SBI Gold ETF',
      category: 'stocks',
      image: '/images/investments/gold-etf.jpg',
      type: 'etf',
      rating: '4.3',
      returns: '12.8% (5Y)',
      bestFor: 'Portfolio diversification',
      featured: false
    },
    {
      id: 'index-fund',
      name: 'UTI Nifty 50 Index Fund',
      category: 'mutual-funds',
      image: '/images/investments/index-fund.jpg',
      type: 'mutual-fund',
      rating: '4.4',
      returns: '13.2% (5Y)',
      bestFor: 'Passive investors',
      featured: false
    }
  ],

  categories: [
    {
      id: 'mutual-funds',
      slug: 'mutual-funds',
      name: 'Mutual Funds',
      description: 'Professionally managed equity & debt funds',
      icon: '📊'
    },
    {
      id: 'fixed-income',
      slug: 'fixed-income',
      name: 'Fixed Income',
      description: 'Safe, guaranteed return investments',
      icon: '🏦'
    },
    {
      id: 'stocks',
      slug: 'stocks',
      name: 'Stocks & ETFs',
      description: 'Direct equity and exchange-traded funds',
      icon: '📈'
    },
    {
      id: 'retirement',
      slug: 'retirement',
      name: 'Retirement Plans',
      description: 'NPS, PPF, and pension schemes',
      icon: '🎯'
    }
  ],

  faqData: [
    {
      question: 'What is the difference between direct and regular mutual funds?',
      answer: 'Direct plans have no distributor commission, resulting in lower expense ratios (0.5-1% less). Over 20 years, this can result in ₹10-15 lakh higher corpus on a ₹10 lakh investment. Always choose direct plans when investing online.'
    },
    {
      question: 'How much should I invest in equity vs debt?',
      answer: 'A common rule is: Equity allocation = 100 - your age. So if you\'re 30, keep 70% in equity and 30% in debt. Adjust based on risk appetite and financial goals. Review annually.'
    },
    {
      question: 'Is NPS better than PPF for retirement?',
      answer: 'NPS offers higher returns (10-12%) but has lock-in until 60. PPF gives lower but guaranteed returns (7.1%) with 15-year maturity. NPS wins for long-term wealth, PPF for safety and liquidity after 5 years.'
    },
    {
      question: 'Should I invest in small-cap or large-cap funds?',
      answer: 'Large-cap funds are stable, suitable for conservative investors. Small-cap funds offer higher returns but with more volatility. Ideal portfolio: 60% large-cap, 30% mid-cap, 10% small-cap for balanced growth.'
    }
  ]
};