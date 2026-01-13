export const calculatorsData = {
  calculators: [
    {
      id: 'sip',
      slug: 'sip-calculator',
      name: 'SIP Calculator',
      icon: '📊',
      description: 'Calculate your mutual fund SIP returns and wealth growth',
      color: 'from-blue-500 to-blue-600',
      category: 'investments',
    },
    {
      id: 'tax',
      slug: 'tax-calculator',
      name: 'Income Tax Calculator',
      icon: '💰',
      description: 'Compare Old vs New tax regime and calculate your tax liability',
      color: 'from-green-500 to-emerald-600',
      category: 'tax',
    },
    {
      id: 'insurance',
      slug: 'insurance-calculator',
      name: 'Insurance Premium Calculator',
      icon: '🛡️',
      description: 'Get instant quotes for term life and health insurance',
      color: 'from-purple-500 to-purple-600',
      category: 'insurance',
    },
  ],
  
  sipDefaults: {
    monthlyInvestment: 5000,
    expectedReturn: 12,
    timePeriod: 10,
  },
  
  taxSlabs: {
    old: [
      { min: 0, max: 250000, rate: 0 },
      { min: 250000, max: 500000, rate: 5 },
      { min: 500000, max: 1000000, rate: 20 },
      { min: 1000000, max: Infinity, rate: 30 },
    ],
    new: [
      { min: 0, max: 300000, rate: 0 },
      { min: 300000, max: 600000, rate: 5 },
      { min: 600000, max: 900000, rate: 10 },
      { min: 900000, max: 1200000, rate: 15 },
      { min: 1200000, max: 1500000, rate: 20 },
      { min: 1500000, max: Infinity, rate: 30 },
    ],
  },
  
  insuranceFactors: {
    term: {
      ageMultiplier: { 25: 0.5, 30: 0.6, 35: 0.8, 40: 1.0, 45: 1.4, 50: 2.0 },
      smokingMultiplier: 1.5,
      baseRate: 500, // per lakh per year
    },
    health: {
      ageMultiplier: { 25: 1.0, 30: 1.2, 35: 1.5, 40: 2.0, 45: 2.8, 50: 3.5 },
      baseRate: 8000, // for 5L cover
    },
  },
};