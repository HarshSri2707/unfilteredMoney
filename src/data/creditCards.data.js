export const creditCardsData = {
  topPicks: [
    {
      id: 'hdfc-regalia',
      name: 'HDFC Regalia',
      bank: 'HDFC Bank',
      image: '/picks/credit-cards.avif',
      category: 'travel',
      rating: 4.5,
      annualFee: '₹2,500',
      feeWaiver: 'On ₹3L annual spend',
      pros: [
        'Great airport lounge access (domestic & international)',
        'Good reward points on dining & travel',
        'Complimentary golf sessions',
      ],
      cons: [
        'High annual fee if waiver not met',
        'Limited fuel surcharge waiver',
      ],
      bestFor: 'Frequent travelers who value lounge access',
    },
    {
      id: 'axis-magnus',
      name: 'Axis Magnus',
      bank: 'Axis Bank',
      image: '/images/cards/axis-magnus.webp',
      category: 'premium',
      rating: 4.7,
      annualFee: '₹10,000',
      feeWaiver: 'None (₹10,000 vouchers provided)',
      pros: [
        'Excellent milestone benefits',
        'High reward rate on all spends',
        'Premium travel & lifestyle benefits',
      ],
      cons: [
        'Very high annual fee',
        'Devaluations in recent years',
      ],
      bestFor: 'High spenders seeking premium benefits',
    },
    {
      id: 'amazon-pay',
      name: 'Amazon Pay ICICI',
      bank: 'ICICI Bank',
      image: '/images/cards/amazon-pay.webp',
      category: 'cashback',
      rating: 4.3,
      annualFee: 'Nil',
      feeWaiver: 'Lifetime free',
      pros: [
        'Lifetime free card',
        '5% cashback on Amazon (Prime members)',
        '1% unlimited cashback elsewhere',
      ],
      cons: [
        'Benefits restricted to Amazon & bill payments',
        'No lounge access',
      ],
      bestFor: 'Amazon shoppers & online spenders',
    },
  ],
  
  categories: [
    {
      slug: 'lifetime-free',
      name: 'Best Lifetime Free Cards',
      description: 'No annual fee, ever. Perfect for beginners.',
    },
    {
      slug: 'travel',
      name: 'Best for Travel/Airport Lounge',
      description: 'Premium lounge access and travel benefits.',
    },
    {
      slug: 'fuel-cashback',
      name: 'Best for Fuel & Cashback',
      description: 'Save on fuel and everyday purchases.',
    },
  ],
  
  faqData: [
    {
      question: 'What is a lifetime free credit card?',
      answer: 'A lifetime free credit card has no joining fee or annual fee for as long as you hold the card. You never have to pay just to keep the card active.',
    },
    {
      question: 'Can I get credit card annual fee waived?',
      answer: 'Yes, most premium cards waive the annual fee if you meet certain spending thresholds, typically ranging from ₹1.5L to ₹3L per year.',
    },
    {
      question: 'How to choose the right credit card?',
      answer: 'Choose based on your spending pattern. If you travel often, pick travel cards. If you shop online, pick cashback cards. Always check the annual fee vs. benefits ratio.',
    },
  ],
};