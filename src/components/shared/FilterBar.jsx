import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────────
//  FilterBar  — Search (left) + Category dropdown (right)
//  Sticky, sits above TopPicks
// ─────────────────────────────────────────────
const FilterBar = ({
  categories = [],
  selectedCategory,
  setSelectedCategory,
  searchValue,
  setSearchValue,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const allCategory = { id: 'all', name: 'All', slug: 'all' };
  const finalCategories = [allCategory, ...categories];

  const activeCat = finalCategories.find((c) => c.slug === selectedCategory) || allCategory;

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="sticky top-[56px] sm:top-[112px] z-30 bg-white border-b border-neutral-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">

          {/* ── Search bar (takes ~60% width) ── */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
              style={{ fontFamily: 'Lato, sans-serif' }}
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
            </svg>
          </div>

          {/* ── Category dropdown (right side) ── */}
          <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((p) => !p)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-sm font-semibold text-neutral-700 transition-colors whitespace-nowrap"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              <span>
                {activeCat.slug === 'all'
                  ? 'Browse by Category'
                  : activeCat.name}
              </span>
              <motion.svg
                className="w-4 h-4 text-neutral-500"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Dropdown panel */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl border border-neutral-200 shadow-lg overflow-hidden z-50"
                >
                  {finalCategories.map((cat) => {
                    const isActive = selectedCategory === cat.slug;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-primary-50 text-primary-600 font-semibold'
                            : 'text-neutral-700 hover:bg-neutral-50 font-medium'
                        }`}
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        <span>{cat.name}</span>
                        {isActive && (
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;