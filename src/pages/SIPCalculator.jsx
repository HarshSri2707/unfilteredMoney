import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import { calculatorsData } from '../data/calculators.data';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(calculatorsData.sipDefaults.monthlyInvestment);
  const [expectedReturn, setExpectedReturn] = useState(calculatorsData.sipDefaults.expectedReturn);
  const [timePeriod, setTimePeriod] = useState(calculatorsData.sipDefaults.timePeriod);
  const [results, setResults] = useState(null);

  const calculateSIP = () => {
    const P = monthlyInvestment;
    const r = expectedReturn / 100 / 12; // Monthly rate
    const n = timePeriod * 12; // Total months
    
    // Future Value formula: FV = P × [(1 + r)^n - 1] / r × (1 + r)
    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const invested = P * n;
    const returns = futureValue - invested;
    
    setResults({
      futureValue: Math.round(futureValue),
      invested: Math.round(invested),
      returns: Math.round(returns),
    });
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const formatCurrency = (num) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title="SIP Calculator - Calculate Mutual Fund Returns | UnfilteredMoney"
        description="Calculate your SIP returns with our free mutual fund SIP calculator. Plan your wealth creation with accurate projections."
        keywords="sip calculator, mutual fund calculator, sip returns, investment calculator"
        url={`${seoConfig.siteUrl}/tools/sip-calculator`}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-4xl">📊</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              SIP Calculator
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Plan your wealth creation journey. Calculate how much your monthly SIP investments can grow over time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Enter Your Details</h2>
                  
                  {/* Monthly Investment */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-neutral-700">
                        Monthly Investment
                      </label>
                      <span className="text-lg font-bold text-primary-600">
                        {formatCurrency(monthlyInvestment)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>₹500</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                  {/* Expected Return */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-neutral-700">
                        Expected Return (p.a.)
                      </label>
                      <span className="text-lg font-bold text-green-600">
                        {expectedReturn}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* Time Period */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-neutral-700">
                        Time Period
                      </label>
                      <span className="text-lg font-bold text-purple-600">
                        {timePeriod} Years
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>1 Year</span>
                      <span>40 Years</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">
                      💡 <strong>Tip:</strong> Equity mutual funds have historically given 12-15% returns over 10+ years.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Investment Results</h2>
                  
                  {results && (
                    <>
                      {/* Future Value */}
                      <div className="mb-6 p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white">
                        <p className="text-sm opacity-90 mb-2">Future Value</p>
                        <p className="text-4xl font-bold">{formatCurrency(results.futureValue)}</p>
                      </div>

                      {/* Invested vs Returns */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-xs text-blue-700 mb-1">Total Invested</p>
                          <p className="text-xl font-bold text-blue-900">
                            {formatCurrency(results.invested)}
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-xs text-green-700 mb-1">Est. Returns</p>
                          <p className="text-xl font-bold text-green-900">
                            {formatCurrency(results.returns)}
                          </p>
                        </div>
                      </div>

                      {/* Visual Bar */}
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs text-neutral-600">Investment Breakdown</span>
                        </div>
                        <div className="h-8 flex rounded-lg overflow-hidden">
                          <div 
                            className="bg-blue-500 flex items-center justify-center text-white text-xs font-semibold"
                            style={{ width: `${(results.invested / results.futureValue) * 100}%` }}
                          >
                            {((results.invested / results.futureValue) * 100).toFixed(0)}%
                          </div>
                          <div 
                            className="bg-green-500 flex items-center justify-center text-white text-xs font-semibold"
                            style={{ width: `${(results.returns / results.futureValue) * 100}%` }}
                          >
                            {((results.returns / results.futureValue) * 100).toFixed(0)}%
                          </div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <div className="flex items-center text-xs">
                            <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
                            <span className="text-neutral-600">Principal</span>
                          </div>
                          <div className="flex items-center text-xs">
                            <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                            <span className="text-neutral-600">Returns</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Stats */}
                      <div className="space-y-3 pt-4 border-t border-neutral-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Monthly Investment:</span>
                          <span className="font-semibold">{formatCurrency(monthlyInvestment)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Total Months:</span>
                          <span className="font-semibold">{timePeriod * 12} months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Expected Return:</span>
                          <span className="font-semibold text-green-600">{expectedReturn}% p.a.</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Wealth Multiplier:</span>
                          <span className="font-semibold text-purple-600">
                            {(results.futureValue / results.invested).toFixed(2)}x
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Understanding SIP Returns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-3">💡 How SIP Works</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly in mutual funds. 
                  It follows rupee cost averaging - buying more units when prices are low and fewer when high.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-3">📈 Power of Compounding</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Your returns earn returns. Over long periods (10+ years), compounding significantly 
                  boosts your wealth. That's why starting early makes a huge difference.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SIPCalculator;