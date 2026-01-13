import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { calculatorsData } from '../data/calculators.data';

const InsuranceCalculator = () => {
  const [insuranceType, setInsuranceType] = useState('term');
  const [age, setAge] = useState(30);
  const [coverAmount, setCoverAmount] = useState(10000000);
  const [policyTerm, setPolicyTerm] = useState(30);
  const [smoker, setSmoker] = useState(false);
  const [premium, setPremium] = useState(null);

  const calculateTermPremium = () => {
    const factors = calculatorsData.insuranceFactors.term;
    
    // Find age multiplier
    const ageKeys = Object.keys(factors.ageMultiplier).map(Number).sort((a, b) => a - b);
    let ageMultiplier = factors.ageMultiplier[25];
    for (const key of ageKeys) {
      if (age >= key) ageMultiplier = factors.ageMultiplier[key];
    }
    
    // Calculate base premium
    const coverInLakhs = coverAmount / 100000;
    let annualPremium = coverInLakhs * factors.baseRate * ageMultiplier;
    
    // Apply smoking surcharge
    if (smoker) {
      annualPremium *= factors.smokingMultiplier;
    }
    
    return Math.round(annualPremium);
  };

  const calculateHealthPremium = () => {
    const factors = calculatorsData.insuranceFactors.health;
    
    // Find age multiplier
    const ageKeys = Object.keys(factors.ageMultiplier).map(Number).sort((a, b) => a - b);
    let ageMultiplier = factors.ageMultiplier[25];
    for (const key of ageKeys) {
      if (age >= key) ageMultiplier = factors.ageMultiplier[key];
    }
    
    // Calculate premium
    const coverInLakhs = coverAmount / 100000;
    const basePremium = factors.baseRate * (coverInLakhs / 5); // Normalized to 5L base
    const annualPremium = basePremium * ageMultiplier;
    
    return Math.round(annualPremium);
  };

  const calculate = () => {
    const annualPremium = insuranceType === 'term' 
      ? calculateTermPremium() 
      : calculateHealthPremium();
    
    setPremium({
      annual: annualPremium,
      monthly: Math.round(annualPremium / 12),
      totalPaid: Math.round(annualPremium * policyTerm),
    });
  };

  useEffect(() => {
    calculate();
  }, [insuranceType, age, coverAmount, policyTerm, smoker]);

  const formatCurrency = (num) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(1)} L`;
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title="Insurance Premium Calculator - Term & Health | UnfilteredMoney"
        description="Calculate term life and health insurance premiums instantly. Get accurate quotes and plan your insurance coverage."
        keywords="insurance calculator, term insurance calculator, health insurance premium"
        url={`${seoConfig.siteUrl}/tools/insurance-calculator`}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-4xl">🛡️</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Insurance Premium Calculator
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get instant premium estimates for term life and health insurance. Plan your coverage wisely.
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
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Calculate Premium</h2>
                  
                  {/* Insurance Type */}
                  <div className="mb-6">
                    <label className="text-sm font-semibold text-neutral-700 block mb-3">
                      Insurance Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setInsuranceType('term')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          insuranceType === 'term'
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">🛡️</div>
                        <div className="text-sm font-semibold text-neutral-900">Term Life</div>
                      </button>
                      <button
                        onClick={() => setInsuranceType('health')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          insuranceType === 'health'
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">❤️</div>
                        <div className="text-sm font-semibold text-neutral-900">Health</div>
                      </button>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-neutral-700">
                        Your Age
                      </label>
                      <span className="text-lg font-bold text-purple-600">
                        {age} years
                      </span>
                    </div>
                    <input
                      type="range"
                      min="18"
                      max="65"
                      step="1"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>18</span>
                      <span>65</span>
                    </div>
                  </div>

                  {/* Cover Amount */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-neutral-700">
                        Cover Amount
                      </label>
                      <span className="text-lg font-bold text-green-600">
                        {formatCurrency(coverAmount)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={insuranceType === 'term' ? 5000000 : 100000}
                      max={insuranceType === 'term' ? 50000000 : 5000000}
                      step={insuranceType === 'term' ? 1000000 : 100000}
                      value={coverAmount}
                      onChange={(e) => setCoverAmount(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>{insuranceType === 'term' ? '₹50L' : '₹1L'}</span>
                      <span>{insuranceType === 'term' ? '₹5Cr' : '₹50L'}</span>
                    </div>
                  </div>

                  {/* Policy Term */}
                  {insuranceType === 'term' && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-neutral-700">
                          Policy Term
                        </label>
                        <span className="text-lg font-bold text-blue-600">
                          {policyTerm} years
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="40"
                        step="5"
                        value={policyTerm}
                        onChange={(e) => setPolicyTerm(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-xs text-neutral-500 mt-2">
                        <span>10 years</span>
                        <span>40 years</span>
                      </div>
                    </div>
                  )}

                  {/* Smoker Toggle */}
                  {insuranceType === 'term' && (
                    <div className="mb-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <span className="text-sm font-semibold text-neutral-700 block">
                            Tobacco/Smoker
                          </span>
                          <span className="text-xs text-neutral-500">
                            Premium increases by 50%
                          </span>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={smoker}
                            onChange={(e) => setSmoker(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                        </div>
                      </label>
                    </div>
                  )}

                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">
                      💡 <strong>Note:</strong> These are estimated premiums. Actual premiums may vary based on medical tests and insurer policies.
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
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Premium Estimate</h2>
                  
                  {premium && (
                    <>
                      {/* Monthly Premium */}
                      <div className="mb-6 p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white">
                        <p className="text-sm opacity-90 mb-2">Monthly Premium</p>
                        <p className="text-4xl font-bold">₹{premium.monthly.toLocaleString('en-IN')}</p>
                        <p className="text-sm opacity-90 mt-2">≈ ₹{Math.round(premium.monthly / 30)}/day</p>
                      </div>

                      {/* Annual Premium */}
                      <div className="mb-6 p-5 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-purple-700">Annual Premium</span>
                          <span className="text-2xl font-bold text-purple-900">
                            ₹{premium.annual.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Coverage Details */}
                      <div className="space-y-3 mb-6 pt-4 border-t border-neutral-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Cover Amount:</span>
                          <span className="font-semibold">{formatCurrency(coverAmount)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Your Age:</span>
                          <span className="font-semibold">{age} years</span>
                        </div>
                        {insuranceType === 'term' && (
                          <>
                            <div className="flex justify-between text-sm">
                              <span className="text-neutral-600">Policy Term:</span>
                              <span className="font-semibold">{policyTerm} years</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-neutral-600">Total Premium Paid:</span>
                              <span className="font-semibold">₹{premium.totalPaid.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-neutral-600">Smoker:</span>
                              <span className="font-semibold">{smoker ? 'Yes' : 'No'}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Cost Breakdown */}
                      <div className="bg-neutral-50 rounded-lg p-5 mb-6">
                        <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                          What you get:
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-neutral-700">
                              {formatCurrency(coverAmount)} coverage for your family
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-neutral-700">
                              {insuranceType === 'term' ? 'Financial security in case of unfortunate events' : 'Medical expenses coverage'}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-neutral-700">
                              Tax benefits under Section {insuranceType === 'term' ? '80C & 10(10D)' : '80D'}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <Button variant="primary" size="lg" fullWidth>
                        Get Personalized Quote
                      </Button>
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
            Insurance Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-3">🛡️ Term Insurance</h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Cover should be 10-15x your annual income</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Buy early for lower premiums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Pure protection, no investment</span>
                  </li>
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-3">❤️ Health Insurance</h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Minimum 5L cover for individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Family floater for better value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Check for room rent limits & sub-limits</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InsuranceCalculator;