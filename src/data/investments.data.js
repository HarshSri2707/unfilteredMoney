export const investmentsData = {
  topPicks: [
    {
      id: 'parag-parikh-flexi',
      name: 'Parag Parikh Flexi Cap Fund',
      type: 'mutual-fund',
      category: 'Flexi Cap',
      image: '/images/investments/ppfas.webp',
      rating: 4.7,
      returns: {
        '1yr': '28.5%',
        '3yr': '22.3%',
        '5yr': '19.8%',
      },
      expenseRatio: '0.67%',
      minSIP: '₹1,000',
      pros: [
        'International equity exposure (up to 35%)',
        'Value-focused investment approach',
        'Consistent long-term performance',
      ],
      cons: [
        'Higher volatility due to international exposure',
        'May underperform in pure bull markets',
      ],
      bestFor: 'Long-term investors seeking diversification',
    },
    {
      id: 'nifty-50-index',
      name: 'Nifty 50 Index Funds',
      type: 'mutual-fund',
      category: 'Index Fund',
      image: '/images/investments/nifty50.webp',
      rating: 4.5,
      returns: {
        '1yr': '25.2%',
        '3yr': '18.7%',
        '5yr': '16.4%',
      },
      expenseRatio: '0.10%',
      minSIP: '₹100',
      pros: [
        'Ultra-low expense ratio',
        'Tracks market performance exactly',
        'Best for passive investors',
      ],
      cons: [
        'No chance of outperforming the market',
        'Concentrated in top 50 companies only',
      ],
      bestFor: 'Passive investors and beginners',
    },
  ],
  
  categories: [
    {
      slug: 'mutual-funds',
      name: 'Mutual Funds',
      description: 'SIP recommendations and fund analysis',
    },
    {
      slug: 'stocks',
      name: 'Stock Market',
      description: 'Stock analysis and investment strategies',
    },
    {
      slug: 'fixed-income',
      name: 'Fixed Income',
      description: 'FDs, Bonds, and debt instruments',
    },
  ],
  
  faqData: [
    {
      question: 'What is the difference between SIP and lump sum?',
      answer: 'SIP (Systematic Investment Plan) invests a fixed amount monthly, averaging out market volatility. Lump sum invests everything at once. SIP is better for salaried individuals.',
    },
    {
      question: 'Should I invest in direct or regular mutual funds?',
      answer: 'Always choose Direct plans. They have lower expense ratios (0.5-1% less) because there\'s no distributor commission. Over 20 years, this saves lakhs.',
    },
    {
      question: 'How much should I invest in equity vs debt?',
      answer: 'A common rule: 100 minus your age = equity allocation. So at 30, keep 70% in equity, 30% in debt. Adjust based on risk appetite and goals.',
    },
  ],
};