import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import { calculatorsData } from '../data/calculators.data';

const TaxCalculator = () => {
  const [income, setIncome] = useState(1000000);
  const [deductions, setDeductions] = useState(50000);
  const [age, setAge] = useState('below60');
  const [regime, setRegime] = useState('both');
  const [results, setResults] = useState(null);

  const calculateTax = (taxableIncome, slabs) => {
    let tax = 0;
    for (const slab of slabs) {
      if (taxableIncome > slab.min) {
        const taxableAmount = Math.min(taxableIncome, slab.max) - slab.min;
        tax += (taxableAmount * slab.rate) / 100;
      }
    }
    return tax;
  };

  const calculateRebate = (tax, taxableIncome) => {
    // Rebate u/s 87A
    if (taxableIncome <= 500000) {
      return Math.min(tax, 12500);
    }
    return 0;
  };

  const calculate = () => {
    const taxableIncome = income - deductions;
    
    // Old Regime
    const oldTax = calculateTax(taxableIncome, calculatorsData.taxSlabs.old);
    const oldRebate = calculateRebate(oldTax, taxableIncome);
    const oldCess = (oldTax - oldRebate) * 0.04; // 4% cess
    const oldTotal = oldTax - oldRebate + oldCess;
    
    // New Regime
    const newTax = calculateTax(income, calculatorsData.taxSlabs.new); // No deductions in new regime
    const newRebate = income <= 700000 ? newTax : 0; // New rebate limit
    const newCess = (newTax - newRebate) * 0.04;
    const newTotal = newTax - newRebate + newCess;
    
    setResults({
      old: {
        taxableIncome,
        tax: Math.round(oldTax),
        rebate: Math.round(oldRebate),
        cess: Math.round(oldCess),
        total: Math.round(oldTotal),
        takeHome: Math.round(income - oldTotal),
      },
      new: {
        taxableIncome: income,
        tax: Math.round(newTax),
        rebate: Math.round(newRebate),
        cess: Math.round(newCess),
        total: Math.round(newTotal),
        takeHome: Math.round(income - newTotal),
      },
    });
  };

  useEffect(() => {
    calculate();
  }, [income, deductions, age]);

  const formatCurrency = (num) => {
    return `₹${num.toLocaleString('en-IN')}`;
  };

  const savings = results ? results.old.total - results.new.total : 0;
  const betterRegime = savings > 0 ? 'new' : 'old';

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title="Income Tax Calculator 2025 - Old vs New Regime | UnfilteredMoney"
        description="Compare old and new tax regime for FY 2024-25. Calculate your income tax and find which regime saves you more money."
        keywords="income tax calculator, tax calculator india, old vs new regime, tax calculation"
        url={`${seoConfig.siteUrl}/tools/tax-calculator`}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-4xl">💰</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Income Tax Calculator
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Compare Old vs New Tax Regime for FY 2024-25. Find out which regime saves you more money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Your Details</h2>
                  
                  {/* Annual Income */}
                  <div className="mb-6">
                    <label className="text-sm font-semibold text-neutral-700 block mb-2">
                      Annual Income
                    </label>
                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your income"
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Gross annual income (before tax)
                    </p>
                  </div>

                  {/* Deductions */}
                  <div className="mb-6">
                    <label className="text-sm font-semibold text-neutral-700 block mb-2">
                      Deductions (80C, 80D, etc.)
                    </label>
                    <input
                      type="number"
                      value={deductions}
                      onChange={(e) => setDeductions(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter deductions"
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Only applicable in Old Regime
                    </p>
                  </div>

                  {/* Age Group */}
                  <div className="mb-6">
                    <label className="text-sm font-semibold text-neutral-700 block mb-2">
                      Age Group
                    </label>
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="below60">Below 60 years</option>
                      <option value="60to80">60 - 80 years</option>
                      <option value="above80">Above 80 years</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">
                      💡 <strong>Note:</strong> New regime doesn't allow most deductions but has lower tax rates.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {results && (
                <div className="space-y-6">
                  {/* Recommendation */}
                  <Card>
                    <div className={`p-6 bg-gradient-to-br ${betterRegime === 'new' ? 'from-green-500 to-emerald-600' : 'from-blue-500 to-blue-600'} text-white rounded-xl`}>
                      <h3 className="text-lg font-bold mb-2">💡 Recommendation</h3>
                      <p className="text-2xl font-bold mb-1">
                        {betterRegime === 'new' ? 'New Tax Regime' : 'Old Tax Regime'}
                      </p>
                      <p className="opacity-90">
                        You save {formatCurrency(Math.abs(savings))} with this regime
                      </p>
                    </div>
                  </Card>

                  {/* Comparison Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Old Regime */}
                    <Card>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-neutral-900">Old Regime</h3>
                          {betterRegime === 'old' && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                              Better
                            </span>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Gross Income:</span>
                            <span className="font-semibold">{formatCurrency(income)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Deductions:</span>
                            <span className="font-semibold text-green-600">-{formatCurrency(deductions)}</span>
                          </div>
                          <div className="flex justify-between text-sm pt-2 border-t border-neutral-200">
                            <span className="text-neutral-600">Taxable Income:</span>
                            <span className="font-semibold">{formatCurrency(results.old.taxableIncome)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Tax:</span>
                            <span className="font-semibold">{formatCurrency(results.old.tax)}</span>
                          </div>
                          {results.old.rebate > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-neutral-600">Rebate u/s 87A:</span>
                              <span className="font-semibold text-green-600">-{formatCurrency(results.old.rebate)}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Cess (4%):</span>
                            <span className="font-semibold">{formatCurrency(results.old.cess)}</span>
                          </div>
                          <div className="flex justify-between text-base font-bold pt-3 border-t border-neutral-200">
                            <span>Total Tax:</span>
                            <span className="text-red-600">{formatCurrency(results.old.total)}</span>
                          </div>
                          <div className="flex justify-between text-sm pt-2">
                            <span className="text-neutral-600">Take Home:</span>
                            <span className="font-bold text-green-600">{formatCurrency(results.old.takeHome)}</span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* New Regime */}
                    <Card>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-neutral-900">New Regime</h3>
                          {betterRegime === 'new' && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                              Better
                            </span>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Gross Income:</span>
                            <span className="font-semibold">{formatCurrency(income)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Deductions:</span>
                            <span className="font-semibold text-neutral-400">Not Allowed</span>
                          </div>
                          <div className="flex justify-between text-sm pt-2 border-t border-neutral-200">
                            <span className="text-neutral-600">Taxable Income:</span>
                            <span className="font-semibold">{formatCurrency(results.new.taxableIncome)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Tax:</span>
                            <span className="font-semibold">{formatCurrency(results.new.tax)}</span>
                          </div>
                          {results.new.rebate > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-neutral-600">Rebate:</span>
                              <span className="font-semibold text-green-600">-{formatCurrency(results.new.rebate)}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Cess (4%):</span>
                            <span className="font-semibold">{formatCurrency(results.new.cess)}</span>
                          </div>
                          <div className="flex justify-between text-base font-bold pt-3 border-t border-neutral-200">
                            <span>Total Tax:</span>
                            <span className="text-red-600">{formatCurrency(results.new.total)}</span>
                          </div>
                          <div className="flex justify-between text-sm pt-2">
                            <span className="text-neutral-600">Take Home:</span>
                            <span className="font-bold text-green-600">{formatCurrency(results.new.takeHome)}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Understanding Tax Regimes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-3">📘 Old Regime</h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Allows deductions under 80C, 80D, HRA, etc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Better for salaried with investments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Higher tax slabs</span>
                  </li>
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-3">📗 New Regime</h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Lower tax rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Simpler calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>No deductions allowed (except standard)</span>
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

export default TaxCalculator;