export const creditCardsData = {
  topPicks: [
    {
      id: 'hdfc-regalia',
      name: 'HDFC Regalia',
      bank: 'HDFC Bank',
      image: '/picks/hdfc-credit.webp',
      category: 'travel',
      rating: '4.5',
      annualFee: '₹2,500',
      feeWaiver: 'On ₹3L annual spend',
      pros: [
        'Great airport lounge access (domestic & international)',
        'Good reward points on dining & travel',
        'Complimentary golf sessions'
      ],
      cons: [
        'High annual fee if waiver not met',
        'Limited fuel surcharge waiver'
      ],
      bestFor: 'Frequent travelers who value lounge access',
      featured: true
    },
    {
      id: 'axis-magnus',
      name: 'Axis Magnus',
      bank: 'Axis Bank',
      image: '/picks/axis-magnus.webp',
      category: 'premium',
      rating: '4.7',
      annualFee: '₹10,000',
      feeWaiver: 'None (₹10,000 vouchers provided)',
      pros: [
        'Excellent milestone benefits',
        'High reward rate on all spends',
        'Premium travel & lifestyle benefits'
      ],
      cons: [
        'Very high annual fee',
        'Devaluations in recent years'
      ],
      bestFor: 'High spenders seeking premium benefits',
      featured: true
    },
    {
      id: 'amazon-pay',
      name: 'Amazon Pay ICICI',
      bank: 'ICICI Bank',
      image: 'https://m.media-amazon.com/images/G/31/img18/AmazonPay/Affordability/CBCC/Amazoncard_Final._CB570101839_.jpg',
      category: 'cashback',
      rating: '4.3',
      annualFee: 'Nil',
      feeWaiver: 'Lifetime free',
      pros: [
        'Lifetime free card',
        '5% cashback on Amazon (Prime members)',
        '1% unlimited cashback elsewhere'
      ],
      cons: [
        'Benefits restricted to Amazon & bill payments',
        'No lounge access'
      ],
      bestFor: 'Amazon shoppers & online spenders',
      featured: true
    }
  ],

  allCards: [
    {
      id: 'hdfc-regalia',
      name: 'HDFC Regalia',
      bank: 'HDFC Bank',
      image: '/picks/hdfc-credit.webp',
      category: 'travel',
      rating: '4.5',
      annualFee: '₹2,500',
      feeWaiver: 'On ₹3L annual spend',
      pros: [
        'Great airport lounge access',
        'Good reward points on dining & travel'
      ],
      bestFor: 'Frequent travelers',
      featured: true
    },
    {
      id: 'axis-magnus',
      name: 'Axis Magnus',
      bank: 'Axis Bank',
      image: '/picks/axis-magnus.webp',
      category: 'premium',
      rating: '4.7',
      annualFee: '₹10,000',
      feeWaiver: 'None (₹10,000 vouchers)',
      pros: [
        'Excellent milestone benefits',
        'High reward rate on all spends'
      ],
      bestFor: 'High spenders',
      featured: true
    },
    {
      id: 'amazon-pay',
      name: 'Amazon Pay ICICI',
      bank: 'ICICI Bank',
      image: 'https://m.media-amazon.com/images/G/31/img18/AmazonPay/Affordability/CBCC/Amazoncard_Final._CB570101839_.jpg',
      category: 'cashback',
      rating: '4.3',
      annualFee: 'Nil',
      feeWaiver: 'Lifetime free',
      pros: [
        'Lifetime free card',
        '5% cashback on Amazon'
      ],
      bestFor: 'Amazon shoppers',
      featured: true
    },
    {
      id: 'sbi-simplyclick',
      name: 'SBI SimplyCLICK',
      bank: 'SBI Card',
      image: '/images/cards/sbi-simplyclick.jpg',
      category: 'cashback',
      rating: '4.2',
      annualFee: '₹499',
      feeWaiver: 'On ₹1L annual spend',
      pros: [
        '10X rewards on online shopping',
        '1% fuel surcharge waiver'
      ],
      bestFor: 'Online shoppers',
      featured: false
    },
    {
      id: 'flipkart-axis',
      name: 'Flipkart Axis Bank',
      bank: 'Axis Bank',
      image: '/images/cards/flipkart-axis.jpg',
      category: 'lifetime-free',
      rating: '4.1',
      annualFee: 'Nil',
      feeWaiver: 'Lifetime free',
      pros: [
        '5% unlimited cashback on Flipkart',
        '4% on preferred partners'
      ],
      bestFor: 'Flipkart shoppers',
      featured: false
    },
    {
      id: 'icici-sapphiro',
      name: 'ICICI Sapphiro',
      bank: 'ICICI Bank',
      image: '/images/cards/icici-sapphiro.jpg',
      category: 'travel',
      rating: '4.4',
      annualFee: '₹3,500',
      feeWaiver: 'On ₹4L annual spend',
      pros: [
        'Lounge access',
        'Good reward points'
      ],
      bestFor: 'Premium travelers',
      featured: false
    }
  ],

  categories: [
    {
      id: 'lifetime-free',
      slug: 'lifetime-free',
      name: 'Lifetime Free Cards',
      description: 'No annual fee, ever. Perfect for beginners.',
      icon: '🆓'
    },
    {
      id: 'travel',
      slug: 'travel',
      name: 'Travel & Lounge Access',
      description: 'Premium lounge access and travel benefits.',
      icon: '✈️'
    },
    {
      id: 'cashback',
      slug: 'cashback',
      name: 'Cashback Cards',
      description: 'Save on fuel and everyday purchases.',
      icon: '💰'
    },
    {
      id: 'premium',
      slug: 'premium',
      name: 'Premium Cards',
      description: 'Luxury benefits and exclusive privileges.',
      icon: '👑'
    }
  ],

  faqData: [
    {
      question: 'What is a lifetime free credit card?',
      answer: 'A lifetime free credit card has no joining fee or annual fee for as long as you hold the card. You never have to pay just to keep the card active.'
    },
    {
      question: 'Can I get credit card annual fee waived?',
      answer: 'Yes, most premium cards waive the annual fee if you meet certain spending thresholds, typically ranging from ₹1.5L to ₹3L per year.'
    },
    {
      question: 'How to choose the right credit card?',
      answer: 'Choose based on your spending pattern. If you travel often, pick travel cards. If you shop online, pick cashback cards. Always check the annual fee vs. benefits ratio.'
    },
    {
      question: 'What is the best credit card for beginners?',
      answer: 'Lifetime free cards like Amazon Pay ICICI or Flipkart Axis are great for beginners as they have no annual fees and offer decent rewards on online shopping.'
    }
  ],

  tips: [
    {
      title: 'Check Fee Waivers',
      description: 'Most cards waive annual fees on minimum spend',
      detail: 'Premium cards often waive ₹2,500-10,000 annual fees if you spend ₹1.5-3L per year'
    },
    {
      title: 'Read Fine Print',
      description: 'Hidden forex charges can add up quickly',
      detail: 'Forex markup ranges from 1.5% to 3.5%. Some premium cards offer lower rates or waive fees on international transactions'
    },
    {
      title: 'Compare Rewards',
      description: 'Value per point varies between cards',
      detail: 'Reward points value ranges from ₹0.20 to ₹1 per point depending on redemption method'
    },
    {
      title: 'Apply Strategically',
      description: 'Multiple applications hurt credit score',
      detail: 'Each application creates a hard inquiry. Space out applications by at least 3-6 months'
    }
  ]
};