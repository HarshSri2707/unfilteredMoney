// // // // import { useState, useRef, useEffect } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // ─────────────────────────────────────────────
// // // // //  FilterBar  — Search (left) + Category dropdown (right)
// // // // //  Sticky, sits above TopPicks
// // // // // ─────────────────────────────────────────────
// // // // const FilterBar = ({
// // // //   categories = [],
// // // //   selectedCategory,
// // // //   setSelectedCategory,
// // // //   searchValue,
// // // //   setSearchValue,
// // // // }) => {
// // // //   const [dropdownOpen, setDropdownOpen] = useState(false);
// // // //   const dropdownRef = useRef(null);

// // // //   const allCategory = { id: 'all', name: 'All', slug: 'all' };
// // // //   const finalCategories = [allCategory, ...categories];

// // // //   const activeCat = finalCategories.find((c) => c.slug === selectedCategory) || allCategory;

// // // //   // Close dropdown on outside click
// // // //   useEffect(() => {
// // // //     const handler = (e) => {
// // // //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// // // //         setDropdownOpen(false);
// // // //       }
// // // //     };
// // // //     document.addEventListener('mousedown', handler);
// // // //     return () => document.removeEventListener('mousedown', handler);
// // // //   }, []);

// // // //   return (
// // // //     <div className="sticky top-[56px] sm:top-[112px] z-30 bg-white border-b border-neutral-100 shadow-sm">
// // // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
// // // //         <div className="flex items-center gap-3">

// // // //           {/* ── Search bar (takes ~60% width) ── */}
// // // //           <div className="relative flex-1">
// // // //             <input
// // // //               type="text"
// // // //               value={searchValue}
// // // //               onChange={(e) => setSearchValue(e.target.value)}
// // // //               placeholder="Search articles..."
// // // //               className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
// // // //               style={{ fontFamily: 'Lato, sans-serif' }}
// // // //             />
// // // //             <svg
// // // //               className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
// // // //               fill="none" stroke="currentColor" viewBox="0 0 24 24"
// // // //             >
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// // // //                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
// // // //             </svg>
// // // //           </div>

// // // //           {/* ── Category dropdown (right side) ── */}
// // // //           <div className="relative flex-shrink-0" ref={dropdownRef}>
// // // //             <button
// // // //               onClick={() => setDropdownOpen((p) => !p)}
// // // //               className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-sm font-semibold text-neutral-700 transition-colors whitespace-nowrap"
// // // //               style={{ fontFamily: 'Lato, sans-serif' }}
// // // //             >
// // // //               <span>
// // // //                 {activeCat.slug === 'all'
// // // //                   ? 'Browse by Category'
// // // //                   : activeCat.name}
// // // //               </span>
// // // //               <motion.svg
// // // //                 className="w-4 h-4 text-neutral-500"
// // // //                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
// // // //                 animate={{ rotate: dropdownOpen ? 180 : 0 }}
// // // //                 transition={{ duration: 0.2 }}
// // // //               >
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // // //               </motion.svg>
// // // //             </button>

// // // //             {/* Dropdown panel */}
// // // //             <AnimatePresence>
// // // //               {dropdownOpen && (
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: -6, scale: 0.97 }}
// // // //                   animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //                   exit={{ opacity: 0, y: -6, scale: 0.97 }}
// // // //                   transition={{ duration: 0.15 }}
// // // //                   className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl border border-neutral-200 shadow-lg overflow-hidden z-50"
// // // //                 >
// // // //                   {finalCategories.map((cat) => {
// // // //                     const isActive = selectedCategory === cat.slug;
// // // //                     return (
// // // //                       <button
// // // //                         key={cat.id}
// // // //                         onClick={() => {
// // // //                           setSelectedCategory(cat.slug);
// // // //                           setDropdownOpen(false);
// // // //                         }}
// // // //                         className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
// // // //                           isActive
// // // //                             ? 'bg-primary-50 text-primary-600 font-semibold'
// // // //                             : 'text-neutral-700 hover:bg-neutral-50 font-medium'
// // // //                         }`}
// // // //                         style={{ fontFamily: 'Lato, sans-serif' }}
// // // //                       >
// // // //                         <span>{cat.name}</span>
// // // //                         {isActive && (
// // // //                           <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
// // // //                           </svg>
// // // //                         )}
// // // //                       </button>
// // // //                     );
// // // //                   })}
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FilterBar;


// // // import { useState, useEffect, useCallback } from 'react';
// // // import { motion } from 'framer-motion';

// // // // ─────────────────────────────────────────────────────────
// // // //  FilterBar
// // // //  Row 1 → Category pills
// // // //  Row 2 → Search bar (full width)
// // // //  Sticky top = dynamically measured navbar height
// // // // ─────────────────────────────────────────────────────────
// // // const FilterBar = ({
// // //   categories = [],
// // //   selectedCategory,
// // //   setSelectedCategory,
// // //   searchValue,
// // //   setSearchValue,
// // // }) => {
// // //   const [navbarHeight, setNavbarHeight] = useState(0);

// // //   const measureNavbar = useCallback(() => {
// // //     const el =
// // //       document.querySelector('[data-navbar]') ||
// // //       document.querySelector('nav')           ||
// // //       document.querySelector('header');
// // //     if (el) setNavbarHeight(el.getBoundingClientRect().height);
// // //   }, []);

// // //   useEffect(() => {
// // //     measureNavbar();
// // //     window.addEventListener('resize', measureNavbar);
// // //     return () => window.removeEventListener('resize', measureNavbar);
// // //   }, [measureNavbar]);

// // //   const finalCats = [{ id: 'all', name: 'All', slug: 'all' }, ...categories];

// // //   return (
// // //     <div
// // //       className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
// // //       style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
// // //     >
// // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 pb-2.5 flex flex-col gap-2">

// // //         {/* Row 1 — pills */}
// // //         <div
// // //           className="flex items-center gap-2 overflow-x-auto"
// // //           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
// // //         >
// // //           {finalCats.map((cat) => {
// // //             const active = selectedCategory === cat.slug;
// // //             return (
// // //               <motion.button
// // //                 key={cat.id}
// // //                 onClick={() => setSelectedCategory(cat.slug)}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
// // //                   active
// // //                     ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
// // //                     : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900'
// // //                 }`}
// // //                 style={{ fontFamily: 'Lato, sans-serif' }}
// // //               >
// // //                 {cat.name}
// // //               </motion.button>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Row 2 — search */}
// // //         <div className="relative w-full">
// // //           <input
// // //             type="text"
// // //             value={searchValue}
// // //             onChange={(e) => setSearchValue(e.target.value)}
// // //             placeholder="Search..."
// // //             className="w-full pl-4 pr-9 py-2 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-1 focus:ring-primary-100 transition-all"
// // //             style={{ fontFamily: 'Lato, sans-serif' }}
// // //           />
// // //           {searchValue ? (
// // //             <button
// // //               onClick={() => setSearchValue('')}
// // //               className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
// // //             >
// // //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
// // //               </svg>
// // //             </button>
// // //           ) : (
// // //             <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
// // //               fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// // //                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
// // //             </svg>
// // //           )}
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FilterBar;

// // import { useState, useEffect, useCallback } from 'react';
// // import { motion } from 'framer-motion';

// // // ─────────────────────────────────────────────────────────
// // //  FilterBar
// // //  Row 1 → Category pills  (hover = primary blue)
// // //  Row 2 → Search bar      (white background)
// // //  Sticky top = dynamically measured navbar height
// // // ─────────────────────────────────────────────────────────
// // const FilterBar = ({
// //   categories = [],
// //   selectedCategory,
// //   setSelectedCategory,
// //   searchValue,
// //   setSearchValue,
// // }) => {
// //   const [navbarHeight, setNavbarHeight] = useState(0);

// //   const measureNavbar = useCallback(() => {
// //     const el =
// //       document.querySelector('[data-navbar]') ||
// //       document.querySelector('nav')           ||
// //       document.querySelector('header');
// //     if (el) setNavbarHeight(el.getBoundingClientRect().height);
// //   }, []);

// //   useEffect(() => {
// //     measureNavbar();
// //     window.addEventListener('resize', measureNavbar);
// //     return () => window.removeEventListener('resize', measureNavbar);
// //   }, [measureNavbar]);

// //   const finalCats = [{ id: 'all', name: 'All', slug: 'all' }, ...categories];

// //   return (
// //     <div
// //       className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
// //       style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
// //     >
// //       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 pb-2.5 flex flex-col gap-2">

// //         {/* ── Row 1: Category pills ── */}
// //         <div
// //           className="flex items-center gap-2 overflow-x-auto"
// //           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
// //         >
// //           {finalCats.map((cat) => {
// //             const active = selectedCategory === cat.slug;
// //             return (
// //               <motion.button
// //                 key={cat.id}
// //                 onClick={() => setSelectedCategory(cat.slug)}
// //                 whileTap={{ scale: 0.95 }}
// //                 className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
// //                   active
// //                     ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
// //                     /* ↓ on hover: border + text turn primary blue */
// //                     : 'bg-white text-neutral-600 border-neutral-200 hover:bg-primary-600 hover:text-white hover:border-primary-600'
// //                 }`}
// //                 style={{ fontFamily: 'Lato, sans-serif' }}
// //               >
// //                 {cat.name}
// //               </motion.button>
// //             );
// //           })}
// //         </div>

// //         {/* ── Row 2: Search bar — white background ── */}
// //         <div className="relative w-full">
// //           <input
// //             type="text"
// //             value={searchValue}
// //             onChange={(e) => setSearchValue(e.target.value)}
// //             placeholder="Search..."
// //             className="w-full pl-4 pr-9 py-2 rounded-full border border-neutral-200 bg-white text-sm font-semibold text-neutral-700 placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
// //             style={{ fontFamily: 'Lato, sans-serif' }}
// //           />
// //           {searchValue ? (
// //             <button
// //               onClick={() => setSearchValue('')}
// //               className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
// //             >
// //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </button>
// //           ) : (
// //             <svg
// //               className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
// //               fill="none" stroke="currentColor" viewBox="0 0 24 24"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
// //             </svg>
// //           )}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterBar;


// import { useState, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';

// // ─────────────────────────────────────────────────────────
// //  FilterBar — Responsive
// //
// //  Desktop (lg+):  Single row → pills (left) + search (right)
// //  Mobile/Tablet:  Row 1 → pills (scrollable)
// //                  Row 2 → search bar (full width)
// //                  Small gap between rows
// // ─────────────────────────────────────────────────────────
// const FilterBar = ({
//   categories = [],
//   selectedCategory,
//   setSelectedCategory,
//   searchValue,
//   setSearchValue,
// }) => {
//   const [navbarHeight, setNavbarHeight] = useState(0);

//   const measureNavbar = useCallback(() => {
//     const el =
//       document.querySelector('[data-navbar]') ||
//       document.querySelector('nav')           ||
//       document.querySelector('header');
//     if (el) setNavbarHeight(el.getBoundingClientRect().height);
//   }, []);

//   useEffect(() => {
//     measureNavbar();
//     window.addEventListener('resize', measureNavbar);
//     return () => window.removeEventListener('resize', measureNavbar);
//   }, [measureNavbar]);

//   const finalCats = [{ id: 'all', name: 'All', slug: 'all' }, ...categories];
//   const searchPlaceholder = `Search for ${categories[0]?.name?.toLowerCase() || 'products'}...`;

//   const SearchInput = ({ className = '' }) => (
//     <div className={`relative w-full ${className}`}>
//       <input
//         type="text"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//         placeholder={searchPlaceholder}
//         className="w-full pl-4 pr-9 py-1.5 rounded-full border border-neutral-300 bg-white text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
//         style={{ fontFamily: 'Lato, sans-serif' }}
//       />
//       {searchValue ? (
//         <button
//           onClick={() => setSearchValue('')}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       ) : (
//         <svg
//           className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
//           fill="none" stroke="currentColor" viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//             d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
//         </svg>
//       )}
//     </div>
//   );

//   const Pills = ({ size = 'md' }) => (
//     <div
//       className="flex items-center gap-2 overflow-x-auto min-w-0"
//       style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//     >
//       {finalCats.map((cat) => {
//         const active = selectedCategory === cat.slug;
//         return (
//           <motion.button
//             key={cat.id}
//             onClick={() => setSelectedCategory(cat.slug)}
//             whileTap={{ scale: 0.95 }}
//             className={`flex-shrink-0 rounded-full font-semibold border transition-all duration-150 ${
//               size === 'sm'
//                 ? 'px-3 py-1 text-xs'
//                 : 'px-4 py-1.5 text-sm'
//             } ${
//               active
//                 ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
//                 : 'bg-white text-neutral-600 border-neutral-300 hover:bg-primary-600 hover:text-white hover:border-primary-600'
//             }`}
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             {cat.name}
//           </motion.button>
//         );
//       })}
//     </div>
//   );

//   return (
//     <div
//       className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
//       style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
//     >
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ── DESKTOP (lg+): single row ── */}
//         <div className="hidden lg:flex items-center gap-3 py-3">
//           <div className="flex-1 min-w-0">
//             <Pills size="md" />
//           </div>
//           <div className="flex-shrink-0 w-56">
//             <SearchInput />
//           </div>
//         </div>

//         {/* ── MOBILE / TABLET (<lg): 2 rows with small gap ── */}
//         <div className="lg:hidden py-2.5 flex flex-col gap-2">
//           {/* Row 1: pills */}
//           <Pills size="sm" />
//           {/* Row 2: search full width */}
//           <SearchInput />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FilterBar;

// import { useState, useEffect, useCallback, useRef, memo } from 'react';
// import { motion } from 'framer-motion';

// // ───── Sub-components Moved OUTSIDE to prevent focus loss ─────

// const SearchInput = ({ searchQuery, setSearchQuery, handleClear, inputRef, placeholder }) => (
//   <div className="relative w-full">
//     <input
//       ref={inputRef}
//       type="text"
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       placeholder={placeholder}
//       autoComplete="off"
//       spellCheck="false"
//       className="
//         w-full
//         pl-10 pr-9 py-2
//         rounded-full
//         border border-neutral-300
//         bg-white
//         text-sm font-medium text-neutral-700
//         placeholder:text-neutral-400 placeholder:font-normal
//         focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100
//         transition-all duration-200
//       "
//       style={{ fontFamily: 'Lato, sans-serif' }}
//     />

//     {/* Left Search Icon */}
//     <button
//       type="button"
//       tabIndex={-1}
//       onClick={() => inputRef.current?.focus()}
//       className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
//     >
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
//         />
//       </svg>
//     </button>

//     {/* Clear Button */}
//     {searchQuery && (
//       <button
//         type="button"
//         onClick={handleClear}
//         className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors"
//         aria-label="Clear search"
//       >
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2.5}
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//     )}
//   </div>
// );

// const Pills = ({ finalCats, selectedCategory, setSelectedCategory, size }) => (
//   <div
//     className="flex items-center gap-2 overflow-x-auto min-w-0"
//     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//   >
//     {finalCats.map((cat) => {
//       const active = selectedCategory === cat.slug;
//       return (
//         <motion.button
//           key={cat.id || cat.slug}
//           type="button"
//           onClick={() => setSelectedCategory(cat.slug)}
//           whileTap={{ scale: 0.95 }}
//           className={`
//             flex-shrink-0 rounded-full font-semibold border transition-all duration-150
//             ${size === 'sm' ? 'px-3 py-1 text-xs' : 'px-4 py-1 text-sm'}
//             ${
//               active
//                 ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
//                 : 'bg-white text-neutral-600 border-neutral-300 hover:bg-primary-600 hover:text-white hover:border-primary-600'
//             }
//           `}
//           style={{ fontFamily: 'Lato, sans-serif' }}
//         >
//           {cat.name}
//         </motion.button>
//       );
//     })}
//   </div>
// );

// // ───── Main Component ─────

// const FilterBar = ({
//   categories = [],
//   selectedCategory,
//   setSelectedCategory,
//   searchValue,
//   setSearchValue,
// }) => {
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const [searchQuery, setSearchQuery] = useState(searchValue || '');
//   const inputRef = useRef(null);

//   // Measure Navbar
//   const measureNavbar = useCallback(() => {
//     const el = document.querySelector('[data-navbar]') || 
//                document.querySelector('nav') || 
//                document.querySelector('header');
//     if (el) setNavbarHeight(el.getBoundingClientRect().height);
//   }, []);

//   useEffect(() => {
//     measureNavbar();
//     window.addEventListener('resize', measureNavbar);
//     return () => window.removeEventListener('resize', measureNavbar);
//   }, [measureNavbar]);

//   // Debounce: Update parent only
//   useEffect(() => {
//     const t = setTimeout(() => {
//       if (searchQuery !== searchValue) {
//         setSearchValue(searchQuery);
//       }
//     }, 350);
//     return () => clearTimeout(t);
//   }, [searchQuery, setSearchValue, searchValue]);

//   // Sync if parent clears search
//   useEffect(() => {
//     if (searchValue !== searchQuery) {
//       setSearchQuery(searchValue || '');
//     }
//   }, [searchValue]);

//   const finalCats = [{ id: 'all', name: 'All', slug: 'all' }, ...categories];
//   const searchPlaceholder = categories[0]?.name
//     ? `Search ${categories[0].name.toLowerCase()}...`
//     : 'Search...';

//   const handleClear = () => {
//     setSearchQuery('');
//     setSearchValue('');
//     inputRef.current?.focus();
//   };

//   return (
//     <div
//       className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
//       style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
//     >
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Desktop View */}
//         <div className="hidden lg:flex items-center gap-4 py-3">
//           <div className="flex-1 min-w-0">
//             <Pills 
//               finalCats={finalCats} 
//               selectedCategory={selectedCategory} 
//               setSelectedCategory={setSelectedCategory} 
//               size="md" 
//             />
//           </div>
//           <div className="flex-shrink-0 w-96">
//             <SearchInput 
//               searchQuery={searchQuery} 
//               setSearchQuery={setSearchQuery} 
//               handleClear={handleClear} 
//               inputRef={inputRef} 
//               placeholder={searchPlaceholder}
//             />
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="lg:hidden py-2.5 flex flex-col gap-2">
//           <Pills 
//             finalCats={finalCats} 
//             selectedCategory={selectedCategory} 
//             setSelectedCategory={setSelectedCategory} 
//             size="sm" 
//           />
//           <SearchInput 
//             searchQuery={searchQuery} 
//             setSearchQuery={setSearchQuery} 
//             handleClear={handleClear} 
//             inputRef={inputRef} 
//             placeholder={searchPlaceholder}
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FilterBar;


import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

// ───── Sub-components Moved OUTSIDE to prevent focus loss ─────

const SearchInput = ({ searchQuery, setSearchQuery, handleClear, inputRef, placeholder }) => (
  <div className="relative w-full">
    <input
      ref={inputRef}
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder={placeholder}
      autoComplete="off"
      spellCheck="false"
      className="
        w-full
        pl-10 pr-9 py-2.5
        rounded-full
        border border-neutral-300
        bg-white
        text-sm font-medium text-neutral-700
        placeholder:text-neutral-400 placeholder:font-normal
        focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100
        transition-all duration-200
      "
      style={{ fontFamily: 'Lato, sans-serif' }}
    />

    {/* Left Search Icon */}
    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg className="w-4 h-4" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
    </span>

    {/* Clear Button */}
    {searchQuery && (
      <button
        type="button"
        onClick={handleClear}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors"
        aria-label="Clear search"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    )}
  </div>
);

const Pills = ({ finalCats, selectedCategory, setSelectedCategory, size }) => (
  <div
    className="flex items-center gap-2 overflow-x-auto min-w-0"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    {finalCats.map((cat) => {
      const active = selectedCategory === cat.slug;
      return (
        <motion.button
          key={cat.id || cat.slug}
          type="button"
          onClick={() => setSelectedCategory(cat.slug)}
          whileTap={{ scale: 0.95 }}
          className={`
            flex-shrink-0 rounded-full font-semibold border transition-all duration-150
            ${size === 'sm' ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'}
            ${
              active
                ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                : 'bg-white text-neutral-600 border-neutral-300 hover:bg-primary-600 hover:text-white hover:border-primary-600'
            }
          `}
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          {cat.name}
        </motion.button>
      );
    })}
  </div>
);

// ───── Main Component ─────

const FilterBar = ({
  categories = [],
  selectedCategory,
  setSelectedCategory,
  searchValue,
  setSearchValue,
}) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [searchQuery, setSearchQuery] = useState(searchValue || '');
  const inputRef = useRef(null);

  const measureNavbar = useCallback(() => {
    const el = document.querySelector('[data-navbar]') ||
               document.querySelector('nav') ||
               document.querySelector('header');
    if (el) setNavbarHeight(el.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    measureNavbar();
    window.addEventListener('resize', measureNavbar);
    return () => window.removeEventListener('resize', measureNavbar);
  }, [measureNavbar]);

  // Debounce: Update parent only
  useEffect(() => {
    const t = setTimeout(() => {
      if (searchQuery !== searchValue) {
        setSearchValue(searchQuery);
      }
    }, 350);
    return () => clearTimeout(t);
  }, [searchQuery, setSearchValue, searchValue]);

  // Sync if parent clears search
  useEffect(() => {
    if (searchValue !== searchQuery) {
      setSearchQuery(searchValue || '');
    }
  }, [searchValue]);

  const finalCats = [{ id: 'all', name: 'All', slug: 'all' }, ...categories];
  const searchPlaceholder = categories[0]?.name
    ? `Search ${categories[0].name.toLowerCase()}...`
    : 'Search...';

  const handleClear = () => {
    setSearchQuery('');
    setSearchValue('');
    inputRef.current?.focus();
  };

  return (
    <div
      className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
      style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop View */}
        <div className="hidden lg:flex items-center gap-4 py-3">
          <div className="flex-1 min-w-0">
            <Pills
              finalCats={finalCats}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              size="md"
            />
          </div>
          <div className="flex-shrink-0 w-96">
            <SearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleClear={handleClear}
              inputRef={inputRef}
              placeholder={searchPlaceholder}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden py-2.5 flex flex-col gap-2">
          <Pills
            finalCats={finalCats}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            size="sm"
          />
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleClear={handleClear}
            inputRef={inputRef}
            placeholder={searchPlaceholder}
          />
        </div>

      </div>
    </div>
  );
};

export default FilterBar;