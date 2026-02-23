
// // import { motion } from 'framer-motion';
// // import { animationConfig } from '../config/animation.config';
// // import { seoConfig } from '../config/seo.config';
// // import Seo from '../components/ui/Seo';

// // const About = () => {
// //   const team = [
// //     {
// //       name: 'Priya Sharma',
// //       role: 'Co-Founder & Credit Card Expert',
// //       experience: '10+ years in Banking',
// //       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
// //     },
// //     {
// //       name: 'Rajesh Kumar',
// //       role: 'Co-Founder & Insurance Specialist',
// //       experience: '12+ years in Insurance',
// //       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
// //     },
// //     {
// //       name: 'Amit Verma',
// //       role: 'Investment Advisor',
// //       experience: 'SEBI Registered, 8+ years',
// //       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
// //     },
// //   ];

// //   const values = [
// //     { icon: '🎯', title: 'Transparency', description: 'We tell you the ugly truth, not just what sounds good' },
// //     { icon: '📊', title: 'Data-Driven', description: 'Every recommendation is backed by thorough analysis' },
// //     { icon: '🤝', title: 'Trust', description: 'We survive on trust, not hidden agendas' },
// //   ];

// //   const stats = [
// //     { number: '50K+', label: 'Monthly Readers' },
// //     { number: '500+', label: 'Products Reviewed' },
// //     { number: '30+', label: 'Years Combined Experience' },
// //   ];

// //   return (
// //     <motion.div {...animationConfig.pageTransition}>
// //       <Seo
// //         title={seoConfig.pages.about.title}
// //         description={seoConfig.pages.about.description}
// //         keywords={seoConfig.pages.about.keywords}
// //         url={`${seoConfig.siteUrl}/about`}
// //       />

// //       {/* Hero Section with Parallax Image Effect */}
// //       <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden bg-neutral-900">
// //         {/* Background Image with Proper Positioning */}
// // <div className="absolute inset-0 overflow-hidden ">
// //   <img
// //     src="/images/about-banner.webp"
// //     alt=""
// //     className="w-full h-full object-cover"
// //     loading="lazy"
// //   />

// //   {/* PRO OVERLAY */}
// //   <div className="absolute inset-0 bg-gradient-to-b 
// //     from-black/60 via-black/45 to-black/60" />
// // </div>


// //         {/* Content */}
// //         <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-center"
// //           >
// //             {/* Badge */}
            

// //             {/* Main Heading */}
// //             <h1
// //               className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray mb-6 leading-tight text-white"
// //               style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
// //             >
// //               We Are the Financial Friends Who Tell You the{' '}
// //               <span className="text-blackelative inline-block">
// //                 Ugly Truth
// //                 {/* <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
// //                   <path d="M0 4C50 8 150 0 200 4" stroke="currentColor" strokeWidth="3" />
// //                 </svg> */}
// //               </span>
// //             </h1>

// //             {/* Subheading */}
// //             <p
// //               className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed max-w-3xl mx-auto mb-8 "
// //               style={{ fontFamily: 'Lato, sans-serif' }}
// //             >
// //               In India, financial advice is often just a sales pitch in disguise. We're here to change that.
// //             </p>

// //             {/* Stats Row */}
           
// //           </motion.div>
// //         </div>

// //         {/* Bottom wave decoration */}
// //         <div className="absolute bottom-0 left-0 right-0 h-12 bg-white">
// //           <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
// //             <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" />
// //           </svg>
// //         </div>
// //       </section>

// //       {/* Story Section - With Icons */}
// //       <section className="pt-4 pb-6 md:pb-10 md:pt-2 bg-white">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <div className="flex items-center gap-3 mb-6">
             
// //               <h2 className="text-2xl md:text-3xl font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
// //                 Our Story
// //               </h2>
// //             </div>
            
// //             <div className="space-y-4 text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
// //               <p className="text-base md:text-lg text-justify">
// //                 UnfilteredMoney.com was born out of <strong>frustration and empathy</strong>. We were tired of seeing hardworking Indians 
// //                 (including our friends and family) lose money to hidden fees, terrible insurance exclusions, and sub-par investment schemes.
// //               </p>
// //               <p className="text-base md:text-lg text-justify">
// //                 Your bank relationship manager wants to sell you a ULIP. Your uncle wants you to buy property. 
// //                 The internet is flooded with "sponsored" top 10 lists. <strong>We're different.</strong>
// //               </p>
              
// //               {/* Highlighted Box */}
// //               <div className="bg-primary-50 border-l-4 border-primary-500 p-5 md:p-6 rounded-r-xl my-6">
// //                 <p className="text-base md:text-lg font-semibold text-neutral-900 leading-relaxed text-justify">
// //                   💡 Every financial product comes with fine print. At UnfilteredMoney, we give you the magnifying glass 
// //                   to make well-informed decisions and secure your financial future.
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Mission Section - Gradient Background */}
// //       <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-10 md:mb-12">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6 }}
// //             >
            
// //               <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
// //                 Democratising Financial Intelligence
// //               </h2>
// //               <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                 We don't just tell you <strong>what</strong> to buy; we tell you <strong>why</strong> and, 
// //                 more importantly, <strong className="text-primary-600">why not</strong>.
// //               </p>
// //             </motion.div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
// //             {values.map((value, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
// //                 whileHover={{ y: -8 }}
// //               >
// //                 <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
// //                   <span className="text-4xl">{value.icon}</span>
// //                 </div>
// //                 <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {value.title}
// //                 </h3>
// //                 <p className="text-sm md:text-base text-neutral-600 leading-relaxed text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {value.description}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //        {/* What Sets Us Apart - Enhanced */}
// //       <section className="py-12 md:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
// //         {/* Decorative elements */}
// //         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
// //         <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
// //         <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center mb-10 md:mb-12"
// //           >
// //             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
// //               What Sets Us Apart
// //             </h2>
// //             <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
// //               We combine deep industry knowledge with unwavering commitment to truth
// //             </p>
// //           </motion.div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
// //             {[
// //               { title: 'Experience', icon: '🎓', text: 'Deep understanding of the Indian financial system' },
// //               { title: 'Expertise', icon: '✅', text: 'Fact-checked against IRDAI and SEBI circulars' },
// //               { title: 'Trust', icon: '🔒', text: 'No product placements, no compromised advice' }
// //             ].map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// //                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
// //                 whileHover={{ y: -5 }}
// //               >
// //                 <div className="text-4xl mb-4">{item.icon}</div>
// //                 <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {item.title}
// //                 </h3>
// //                 <p className="text-white/90 leading-relaxed text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {item.text}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team Section - Enhanced */}
// //       <section className="py-12 md:py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-10 md:mb-12">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6 }}
// //             >
             
// //               <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
// //                 Meet the Experts
// //               </h2>
// //               <p className="text-base md:text-lg text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                 Ex-bankers, insurance underwriters, and registered investment advisors
// //               </p>
// //             </motion.div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
// //             {team.map((member, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 className="group text-center"
// //               >
// //                 <div className="relative mb-5 mx-auto w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-primary-200 transition-all duration-300">
// //                   <img
// //                     src={member.image}
// //                     alt={member.name}
// //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                     onError={(e) => {
// //                       e.target.style.display = 'none';
// //                       e.target.nextSibling.style.display = 'flex';
// //                     }}
// //                   />
// //                   <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center" style={{ display: 'none' }}>
// //                     <span className="text-6xl">👤</span>
// //                   </div>
// //                   {/* Overlay on hover */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
// //                     <span className="text-white text-sm font-semibold">View Profile</span>
// //                   </div>
// //                 </div>
// //                 <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {member.name}
// //                 </h3>
// //                 <p className="text-sm md:text-base text-primary-600 font-semibold mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {member.role}
// //                 </p>
// //                 <p className="text-xs md:text-sm text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {member.experience}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

     
// //     </motion.div>
// //   );
// // };

// // export default About;


// import { motion } from 'framer-motion';
// import { animationConfig } from '../config/animation.config';
// import { seoConfig } from '../config/seo.config';
// import Seo from '../components/ui/Seo';

// const About = () => {
//   const team = [
//     {
//       name: 'Priya Sharma',
//       role: 'Co-Founder & Credit Card Expert',
//       experience: '10+ years in Banking',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
//     },
//     {
//       name: 'Rajesh Kumar',
//       role: 'Co-Founder & Insurance Specialist',
//       experience: '12+ years in Insurance',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
//     },
//     {
//       name: 'Amit Verma',
//       role: 'Investment Advisor',
//       experience: 'SEBI Registered, 8+ years',
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
//     },
//     {
//       name: 'Sneha Patel',
//       role: 'Research Analyst',
//       experience: '6+ years in FinTech',
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
//     },
//   ];

//   const values = [
//     {
//       icon: (
//         <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       ),
//       title: 'Trust',
//       description: 'Your success is our success. We build lasting partnerships based on trust and transparency.',
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
//             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
//             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       ),
//       title: 'Transparency',
//       description: 'We tell you the ugly truth, not just what sounds good.',
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
//             d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//         </svg>
//       ),
//       title: 'Data Driven',
//       description: 'We believe in constant improvement, both for our clients and our own team.',
//     },
//   ];

//   return (
//     <motion.div {...animationConfig.pageTransition}>
//       <Seo
//         title={seoConfig.pages.about.title}
//         description={seoConfig.pages.about.description}
//         keywords={seoConfig.pages.about.keywords}
//         url={`${seoConfig.siteUrl}/about`}
//       />

//       {/* ── HERO SECTION ── */}
//       <section className="relative overflow-hidden bg-neutral-900">
//         {/* Background image */}
//         <div className="absolute inset-0">
//           <img
//             src="/images/about-banner.webp"
//             alt=""
//             className="w-full h-full object-cover opacity-70"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
//         </div>

//         {/* Hero content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug mb-4 md:mb-6"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               We Are the Financial Friends Who Tell You the Ugly Truth
//             </h1>
//             <p
//               className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               In India, financial advice is often just a sales pitch in disguise.
//               We're here to change that.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── OUR STORY ── */}
//       <section className="py-10 md:py-14 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

//             {/* Left: text */}
//             <motion.div
//               initial={{ opacity: 0, x: -24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2
//                 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-5"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               >
//                 Our Story
//               </h2>
//               <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 <p className="text-justify">
//                   UnfilteredMoney.com was born out of <strong className="text-neutral-900">frustration and empathy</strong>. We were tired of seeing hardworking Indians
//                   (including our friends and family) lose money to hidden fees, terrible insurance exclusions, and sub-par investment schemes.
//                 </p>
//                 <p className="text-justify">
//                   Your bank relationship manager wants to sell you a ULIP. Your uncle wants you to buy property.
//                   The internet is flooded with "sponsored" top 10 lists. <strong className="text-neutral-900">We're different.</strong>
//                 </p>
//                 <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-xl">
//                   <p className="text-sm font-semibold text-neutral-900 leading-relaxed text-justify">
//                     💡 Every financial product comes with fine print. At UnfilteredMoney, we give you the magnifying glass
//                     to make well-informed decisions and secure your financial future.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right: image */}
//             <motion.div
//               initial={{ opacity: 0, x: 24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="rounded-2xl overflow-hidden shadow-lg"
//             >
//               <img
//                 src="/images/about-story.webp"
//                 alt="Our Story"
//                 className="w-full h-64 md:h-80 object-cover"
//                 onError={(e) => {
//                   e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop';
//                 }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ── DEMOCRATISING FINANCIAL INTELLIGENCE ── */}
//       <section className="py-10 md:py-14 bg-neutral-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* Center heading */}
//           <motion.div
//             className="text-center mb-8 md:mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2
//               className="text-2xl md:text-3xl font-extrabold text-neutral-900"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               Democratising Financial Intelligence
//             </h2>
//           </motion.div>

//           {/* 3 icon cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-2xl border border-neutral-200 p-6 text-center hover:shadow-md transition-all duration-300"
//               >
//                 {/* Icon */}
//                 <div className="flex justify-center mb-3">
//                   {value.icon}
//                 </div>
//                 <h3
//                   className="text-base font-bold text-neutral-900 mb-2"
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 >
//                   {value.title}
//                 </h3>
//                 <p
//                   className="text-xs md:text-sm text-neutral-500 leading-relaxed"
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 >
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── MEET OUR TEAM ── */}
//       <section className="py-10 md:py-14 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* Center heading */}
//           <motion.div
//             className="text-center mb-8 md:mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2
//               className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-2"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               Meet Our Team
//             </h2>
//             <p
//               className="text-sm md:text-base text-neutral-500"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               Our diverse team of experts brings together decades of experience in digital
//               marketing, creative design, and analytics.
//             </p>
//           </motion.div>

//           {/* Team cards grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300"
//               >
//                 {/* Photo */}
//                 <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                       e.target.nextSibling.style.display = 'flex';
//                     }}
//                   />
//                   <div
//                     className="w-full h-full bg-gradient-to-br from-primary-100 to-blue-100 items-center justify-center text-4xl"
//                     style={{ display: 'none' }}
//                   >
//                     👤
//                   </div>
//                 </div>

//                 {/* Info */}
//                 <div className="p-3 md:p-4">
//                   <h3
//                     className="text-sm md:text-base font-bold text-neutral-900 mb-0.5 leading-snug"
//                     style={{ fontFamily: 'Lato, sans-serif' }}
//                   >
//                     {member.name}
//                   </h3>
//                   <p
//                     className="text-xs text-primary-600 font-semibold mb-0.5"
//                     style={{ fontFamily: 'Lato, sans-serif' }}
//                   >
//                     {member.role}
//                   </p>
//                   <p
//                     className="text-xs text-neutral-500 mb-3"
//                     style={{ fontFamily: 'Lato, sans-serif' }}
//                   >
//                     {member.experience}
//                   </p>

//                   {/* Social icons */}
//                   <div className="flex items-center gap-2 pt-2 border-t border-neutral-100">
//                     {/* LinkedIn */}
//                     <button className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 flex items-center justify-center transition-colors text-neutral-500">
//                       <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//                         <circle cx="4" cy="4" r="2" />
//                       </svg>
//                     </button>
//                     {/* Email */}
//                     <button className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 flex items-center justify-center transition-colors text-neutral-500">
//                       <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── WHAT SETS US APART ── */}
//       <section className="py-10 md:py-14 bg-primary-600 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-8 md:mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2
//               className="text-2xl md:text-3xl font-extrabold text-white mb-2"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               What Sets Us Apart
//             </h2>
//             <p className="text-white/80 text-sm md:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
//               We combine deep industry knowledge with unwavering commitment to truth
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
//             {[
//               { title: 'Experience', icon: '🎓', text: 'Deep understanding of the Indian financial system' },
//               { title: 'Expertise', icon: '✅', text: 'Fact-checked against IRDAI and SEBI circulars' },
//               { title: 'Trust', icon: '🔒', text: 'No product placements, no compromised advice' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
//               >
//                 <div className="text-4xl mb-3">{item.icon}</div>
//                 <h3
//                   className="text-lg font-bold text-white mb-2"
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {item.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </motion.div>
//   );
// };

// export default About;


import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';

const About = () => {
  const team = [
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & Credit Card Expert',
      experience: '10+ years in Banking',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Co-Founder & Insurance Specialist',
      experience: '12+ years in Insurance',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: 'Amit Verma',
      role: 'Investment Advisor',
      experience: 'SEBI Registered, 8+ years',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    },
    {
      name: 'Sneha Patel',
      role: 'Research Analyst',
      experience: '6+ years in FinTech',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Trust',
      description: 'Your success is our success. We build lasting partnerships based on trust and transparency.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Transparency',
      description: 'We tell you the ugly truth, not just what sounds good.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Data Driven',
      description: 'We believe in constant improvement, both for our clients and our own team.',
    },
  ];

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title={seoConfig.pages.about.title}
        description={seoConfig.pages.about.description}
        keywords={seoConfig.pages.about.keywords}
        url={`${seoConfig.siteUrl}/about`}
      />

      {/* ── HERO SECTION — centered, max-w-6xl, rounded banner ── */}
      <section className="bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-[1210px] mx-auto rounded-2xl overflow-hidden bg-neutral-900">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/about-banner.webp"
              alt=""
              className="w-full h-full object-cover opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug mb-4 md:mb-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                We Are the Financial Friends Who Tell You the Ugly Truth
              </h1>
              <p
                className="text-base md:text-lg lg:text-xl font-semibold text-white/90 leading-relaxed max-w-2xl"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                In India, financial advice is often just a sales pitch in disguise.
                We're here to change that.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-5"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Our Story
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                <p className="text-justify font-semibold text-neutral-600">
                  UnfilteredMoney.com was born out of <strong className="text-neutral-900">frustration and empathy</strong>. We were tired of seeing hardworking Indians
                  (including our friends and family) lose money to hidden fees, terrible insurance exclusions, and sub-par investment schemes.
                </p>
                <p className="text-justify font-semibold text-neutral-600">
                  Your bank relationship manager wants to sell you a ULIP. Your uncle wants you to buy property.
                  The internet is flooded with "sponsored" top 10 lists. <strong className="text-neutral-900">We're different.</strong>
                </p>
                <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-xl">
                  <p className="text-sm font-bold text-neutral-900 leading-relaxed text-justify">
                    💡 Every financial product comes with fine print. At UnfilteredMoney, we give you the magnifying glass
                    to make well-informed decisions and secure your financial future.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/images/about-story.webp"
                alt="Our Story"
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop';
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DEMOCRATISING FINANCIAL INTELLIGENCE ── */}
      <section className="py-10 md:py-14 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold text-neutral-900"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Democratising Financial Intelligence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  {value.icon}
                </div>
                <h3
                  className="text-base font-bold text-neutral-900 mb-2"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-xs md:text-sm font-semibold text-neutral-500 leading-relaxed"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET OUR TEAM ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-2"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Meet Our Team
            </h2>
            <p
              className="text-sm md:text-base font-semibold text-neutral-500"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Our diverse team of experts brings together decades of experience in digital
              marketing, creative design, and analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-primary-100 to-blue-100 items-center justify-center text-4xl"
                    style={{ display: 'none' }}
                  >
                    👤
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 md:p-4">
                  <h3
                    className="text-sm md:text-base font-bold text-neutral-900 mb-0.5 leading-snug"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-xs text-primary-600 font-semibold mb-0.5"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-xs font-semibold text-neutral-500 mb-3"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {member.experience}
                  </p>

                  {/* Social icons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-neutral-100">
                    <button className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 flex items-center justify-center transition-colors text-neutral-500">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </button>
                    <button className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 flex items-center justify-center transition-colors text-neutral-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART ── */}
      <section className="py-10 md:py-14 bg-primary-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold text-white mb-2"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              What Sets Us Apart
            </h2>
            <p className="text-white/80 text-sm md:text-base font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>
              We combine deep industry knowledge with unwavering commitment to truth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Experience', icon: '🎓', text: 'Deep understanding of the Indian financial system' },
              { title: 'Expertise', icon: '✅', text: 'Fact-checked against IRDAI and SEBI circulars' },
              { title: 'Trust', icon: '🔒', text: 'No product placements, no compromised advice' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm font-semibold leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default About;