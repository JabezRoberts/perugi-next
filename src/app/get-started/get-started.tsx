// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Mail, Phone, MapPin, Globe, Send, Check } from 'lucide-react'
// import { siteConfig } from '@/lib/data'
// import AnimatedSection from '@/components/AnimatedSection'

// export default function ContactClient() {
//   const [submitted, setSubmitted] = useState(false)
//   const [formData, setFormData] = useState({ name: '', businessName: '', email: '', phone: '', services: '', revenue: '', message: '' })

//   const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   return (
//     <>
//       {/* Hero */}
//       <section className="relative min-h-[50vh] w-full flex items-center bg-background pt-28 pb-12">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="max-w-3xl">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Contact Us</span>
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
//               Let&apos;s talk about your <span className="text-emerald-500">business</span>.
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-xl">
//               Whether you need bookkeeping support, financial organization, or operational visibility, we&apos;re here to help.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="w-full py-16 lg:py-24 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-5 gap-12">
//             {/* Info */}
//             <AnimatedSection animation="fade-left" className="lg:col-span-2">
//               <h2 className="text-2xl lg:text-3xl font-bold mb-6">
//                 Schedule a <span className="text-emerald-500">consultation</span>.
//               </h2>
//               <div className="space-y-5 mb-10">
//                 {[
//                   { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
//                   { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
//                   { icon: MapPin, label: 'Location', value: siteConfig.address, href: undefined },
//                 ].map((item) => (
//                   <div key={item.label} className="flex items-center gap-4">
//                     <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
//                       <item.icon className="w-5 h-5 text-emerald-500" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-muted-foreground">{item.label}</p>
//                       {item.href ? (
//                         <a href={item.href} className="font-medium hover:text-emerald-500 transition-colors">{item.value}</a>
//                       ) : (
//                         <span className="font-medium">{item.value}</span>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <p className="text-sm text-muted-foreground mb-3">Follow us</p>
//                 <div className="flex items-center gap-3">
//                   <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all" aria-label="Instagram">
//                     <Globe className="w-4 h-4" />
//                   </a>
//                   <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all" aria-label="LinkedIn">
//                     <Globe className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </AnimatedSection>

//             {/* Form */}
//             <AnimatedSection animation="fade-right" className="lg:col-span-3">
//               <div className="p-6 lg:p-8 rounded-3xl bg-card border border-border">
//                 {submitted ? (
//                   <div className="flex flex-col items-center justify-center py-20 text-center">
//                     <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
//                       <Check className="w-10 h-10 text-emerald-500" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
//                     <p className="text-muted-foreground max-w-md">We&apos;ve received your message and will get back to you within 24 hours.</p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="grid sm:grid-cols-2 gap-5">
                      
//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-red-400">*</span></label>
//                         <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="John Brown" />
//                       </div>

//                       <div>
//                         <label htmlFor="businessName" className="block text-sm font-medium mb-2">Business Name</label>
//                         <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="ABC Company Limited" />
//                       </div>
//                     </div>

//                     <div className="grid sm:grid-cols-2 gap-5">
                      
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-400">*</span></label>
//                         <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="mail@company.com" />
//                       </div>

//                       <div>
//                         <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
//                         <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="+1 (555) 000-0000" />
//                       </div>
//                     </div>

//                     <div className="grid sm:grid-cols-3 gap-5">
//                       <div>
//                         <label htmlFor="services" className="block text-sm font-medium mb-2">Services Needed</label>
//                         <select id="services" name="services" value={formData.services} onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all">
//                           <option value="">Select a service</option>
//                           <option value="bookkeeping">Monthly Bookkeeping</option>
//                           <option value="reporting">Financial Reporting</option>
//                           <option value="payroll">Payroll Support</option>
//                           <option value="billing">Invoice Billing & Payment Management</option>
//                           <option value="operations">Financial Operations</option>
//                           <option value="insights">Business Insights</option>
//                           <option value="consultation">Monthly Consultation & Reporting</option>
//                           <option value="dashboards">Advanced KPI Dashboards</option>
//                           <option value="multiple">Multiple Services</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label htmlFor="revenue" className="block text-sm font-medium mb-2">Avg Monthly Transactions</label>
//                         <select id="revenue" name="revenue" value={formData.revenue} onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all">
//                           <option value="">Select range</option>
//                           <option value="0-50">0 to 50</option>
//                           <option value="51-100k">51 to 100</option>
//                           <option value="101-199">101 to 199</option>
//                           <option value="199+">200+</option>
//                         </select>
//                       </div>
                      
//                       <div>
//                         <label htmlFor="revenue" className="block text-sm font-medium mb-2">No. of Bank Accounts</label>
//                         <select id="revenue" name="revenue" value={formData.revenue} onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all">
//                           <option value="">Select range</option>
//                           <option value="0-100k">Under $100K USD</option>
//                           <option value="100-500k">$100K - $500K USD</option>
//                           <option value="500k-1m">$500K - $1M USD</option>
//                           <option value="1-5m">$1M - $5M USD</option>
//                           <option value="5m+">$5M+ USD</option>
//                         </select>
//                       </div>

//                     </div>
//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-red-400">*</span></label>
//                       <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
//                         placeholder="Tell us about your business and what you need help with..." />
//                     </div>
//                     <button type="submit"
//                       className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
//                       Send Message <Send className="w-4 h-4" />
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Discussion Points */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="text-center mb-14">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               What we&apos;ll <span className="text-emerald-500">discuss</span>.
//             </h2>
//           </AnimatedSection>
//           <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
//             {['Current systems', 'Financial challenges', 'Reporting needs', 'Growth goals', 'Operational concerns'].map((point, i) => (
//               <AnimatedSection key={point} delay={i * 0.08} className="p-5 rounded-2xl bg-card border border-border text-center">
//                 <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-500 mx-auto mb-3">{i + 1}</span>
//                 <p className="font-medium">{point}</p>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
//           <AnimatedSection>
//             <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
//               Modern businesses deserve modern financial <span className="text-emerald-500">support</span>.
//             </h2>
//             <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
//               Perugi Partners helps businesses operate with greater clarity, confidence, and control.
//             </p>
//             <a href={`mailto:${siteConfig.email}`}
//               className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
//               <Mail className="w-4 h-4" /> Send us an email
//             </a>
//           </AnimatedSection>
//         </div>
//       </section>
//     </>
//   )
// }



// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Mail, Phone, MapPin, Globe, Send, Check } from 'lucide-react'
// import { siteConfig } from '@/lib/data'
// import AnimatedSection from '@/components/AnimatedSection'

// interface GetStartedFormData {
//   name: string
//   businessName: string
//   email: string
//   phone: string
//   services: string[]
//   transactions: string
//   bankAccounts: string
//   employees: string
//   software: string
//   booksStatus: string
//   payrollNeeded: string
//   businessChallenges: string
// }

// export default function GetStarted() {
//   const [submitted, setSubmitted] = useState(false)
//   const [formData, setFormData] = useState<GetStartedFormData>({
//     name: '',
//     businessName: '',
//     email: '',
//     phone: '',
//     services: [],
//     transactions: '',
//     bankAccounts: '',
//     employees: '',
//     software: '',
//     booksStatus: '',
//     payrollNeeded: '',
//     businessChallenges: '',
//   })

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       services: checked
//         ? [...prev.services, value]
//         : prev.services.filter((service) => service !== value),
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//   const { name, value } = e.target;

//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

//   return (
//     <>
//       {/* Hero */}
//       <section className="relative min-h-[50vh] w-full flex items-center bg-background pt-28 pb-6">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="max-w-3xl">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Get Started</span>
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
//               How can we help your <span className="text-emerald-500">business</span>?
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-xl">
//               Whether you need bookkeeping support, financial clarity, or consistent financial reporting, we&apos;re here to help.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>


//       {/* Process Section */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

//           <AnimatedSection className="text-center mb-14">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
//               Our Process
//             </span>

//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Getting started is <span className="text-emerald-500">simple</span>.
//             </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               We keep onboarding straightforward so you can focus on running your business.
//             </p>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-5 gap-5">

//             {[
//               {
//                 step: '01',
//                 title: 'Submit Form',
//                 text: 'Complete the questionnaire below so we can understand your business and bookkeeping needs.',
//               },
//               {
//                 step: '02',
//                 title: 'Consultation',
//                 text: 'We schedule a conversation to discuss your operations, goals, and current financial processes.',
//               },
//               {
//                 step: '03',
//                 title: 'Provide Statements',
//                 text: 'Send your three most recent bank statements for every account used in your business.',
//               },
//               {
//                 step: '04',
//                 title: 'Receive Proposal',
//                 text: 'We review your requirements and provide a clear service proposal and pricing.',
//               },
//               {
//                 step: '05',
//                 title: 'We Get To Work',
//                 text: 'After signing, you add us to QuickBooks and we begin delivering services.',
//               },
//             ].map((item, i) => (
//               <AnimatedSection
//                 key={item.step}
//                 delay={i * 0.1}
//                 className="p-6 rounded-3xl bg-card border border-border"
//               >
//                 <div className="text-emerald-500 font-bold text-sm mb-3">
//                   {item.step}
//                 </div>

//                 <h3 className="font-semibold text-lg mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-muted-foreground">
//                   {item.text}
//                 </p>
//               </AnimatedSection>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* Get Started Form */}
//       <section className="w-full py-16 lg:py-24 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <div className="">
//             {/* Form */}
//             <AnimatedSection animation="fade-right" className="lg:col-span-3">
//               <div className="p-6 lg:p-8 rounded-3xl bg-card border border-border">
//                 {submitted ? (
//                   <div className="flex flex-col items-center justify-center py-20 text-center">
//                     <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
//                       <Check className="w-10 h-10 text-emerald-500" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
//                     <p className="text-muted-foreground max-w-md">We&apos;ve received your message and will get back to you within 24 hours.</p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     {/* Contact Information */}
//                     <div className="grid sm:grid-cols-2 gap-5">

//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium mb-2">
//                           Name <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           aria-label="Full Name"
//                           autoComplete="name"
//                           required
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="John Brown"
//                         />
//                       </div>

//                       <div>
//                         <label htmlFor="businessName" className="block text-sm font-medium mb-2">
//                           Business Name
//                         </label>
//                         <input
//                           type="text"
//                           id="businessName"
//                           name="businessName"
//                           aria-label="Business Name"
//                           autoComplete="organization"
//                           value={formData.businessName}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="ABC Company Limited"
//                         />
//                       </div>

//                     </div>

//                     <div className="grid sm:grid-cols-2 gap-5">

//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium mb-2">
//                           Email <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           aria-label="Email Address"
//                           autoComplete="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="mail@company.com"
//                         />
//                       </div>

//                       <div>
//                         <label htmlFor="phone" className="block text-sm font-medium mb-2">
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           aria-label="Phone Number"
//                           autoComplete="tel"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                           placeholder="+1 (555) 000-0000"
//                         />
//                       </div>

//                     </div>

//                     {/* Services Needed */}
//                     <div>
//                       <label className="block text-sm font-medium mb-3">
//                         Services Needed
//                       </label>

//                       <div
//                         className="grid sm:grid-cols-2 gap-3"
//                         role="group"
//                         aria-label="Services Needed"
//                       >
//                         {[
//                           {
//                             value: "bookkeeping",
//                             label: "Monthly Bookkeeping",
//                           },
//                           {
//                             value: "accountsReceivable",
//                             label: "Accounts Receivable Management",
//                           },
//                           {
//                             value: "accountsPayable",
//                             label: "Accounts Payable Management",
//                           },
//                           {
//                             value: "transactionReceiptMatching",
//                             label: "Match Transactions to Invoices/Receipts",
//                           },
//                           {
//                             value: "payroll",
//                             label: "Payroll Support",
//                           },
//                           {
//                             value: "financialReporting",
//                             label: "Financial Reporting",
//                           },
//                           {
//                             value: "cleanup",
//                             label: "Bookkeeping Cleanup / Catch-Up",
//                           },
//                           {
//                             value: "kpiDashboard",
//                             label: "Monthly KPI Dashboard",
//                           },
//                         ].map((service) => (
//                           <label
//                             key={service.value}
//                             className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background cursor-pointer hover:border-emerald-500/50 transition-colors"
//                           >
//                             <input
//                               type="checkbox"
//                               name="services"
//                               value={service.value}
//                               checked={formData.services.includes(service.value)}
//                               onChange={handleCheckboxChange}
//                               aria-label={service.label}
//                               className="h-4 w-4"
//                             />
//                             <span>{service.label}</span>
//                           </label>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Qualification Questions */}
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

//                       <div>
//                         <label htmlFor="transactions" className="block text-sm font-medium mb-2">
//                           Average Monthly Transactions
//                         </label>
//                         <select
//                           id="transactions"
//                           name="transactions"
//                           aria-label="Average Monthly Transactions"
//                           value={formData.transactions}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                         >
//                           <option value="">Select range</option>
//                           <option value="0-50">0 - 50</option>
//                           <option value="51-100">51 - 100</option>
//                           <option value="101-200">101 - 200</option>
//                           <option value="201-500">201 - 500</option>
//                           <option value="500+">500+</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label htmlFor="bankAccounts" className="block text-sm font-medium mb-2">
//                           Number of Bank Accounts
//                         </label>
//                         <select
//                           id="bankAccounts"
//                           name="bankAccounts"
//                           aria-label="Number of Bank Accounts"
//                           value={formData.bankAccounts}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                         >
//                           <option value="">Select range</option>
//                           <option value="1">1</option>
//                           <option value="2-3">2 - 3</option>
//                           <option value="4-5">4 - 5</option>
//                           <option value="6+">6+</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label htmlFor="employees" className="block text-sm font-medium mb-2">
//                           Number of Employees
//                         </label>
//                         <select
//                           id="employees"
//                           name="employees"
//                           aria-label="Number of Employees"
//                           value={formData.employees}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                         >
//                           <option value="">Select range</option>
//                           <option value="0">No Employees</option>
//                           <option value="1-5">1 - 5</option>
//                           <option value="6-15">6 - 15</option>
//                           <option value="16-50">16 - 50</option>
//                           <option value="50+">50+</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label htmlFor="software" className="block text-sm font-medium mb-2">
//                           Accounting Software
//                         </label>
//                         <select
//                           id="software"
//                           name="software"
//                           aria-label="Accounting Software"
//                           value={formData.software}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                         >
//                           <option value="">Select one</option>
//                           <option value="quickbooks">QuickBooks</option>
//                           <option value="xero">Xero</option>
//                           <option value="sage">Sage</option>
//                           <option value="excel">Excel Only</option>
//                           <option value="none">No Software</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label htmlFor="booksStatus" className="block text-sm font-medium mb-2">
//                           Are Your Financials Up to Date?
//                         </label>
//                         <select
//                           id="booksStatus"
//                           name="booksStatus"
//                           aria-label="Are Your Financials Up to Date?"
//                           value={formData.booksStatus}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                         >
//                           <option value="">Select one</option>
//                           <option value="current">Current</option>
//                           <option value="1-3">1 - 3 Months Behind</option>
//                           <option value="4-12">4 - 12 Months Behind</option>
//                           <option value="12+">More Than 12 Months Behind</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label htmlFor="payrollNeeded" className="block text-sm font-medium mb-2">
//                           Need Payroll Support?
//                         </label>
//                         <select
//                           id="payrollNeeded"
//                           name="payrollNeeded"
//                           aria-label="Need Payroll Support"
//                           value={formData.payrollNeeded}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
//                         >
//                           <option value="">Select one</option>
//                           <option value="yes">Yes</option>
//                           <option value="no">No</option>
//                         </select>
//                       </div>

//                     </div>

//                     {/* Business Challenges */}
//                     <div>
//                       <label
//                         htmlFor="businessChallenges"
//                         className="block text-sm font-medium mb-2"
//                       >
//                         Tell Us About Your Business & Challenges
//                         <span className="text-red-400">*</span>
//                       </label>

//                       <textarea
//                         id="businessChallenges"
//                         name="businessChallenges"
//                         aria-label="Business Challenges"
//                         required
//                         rows={5}
//                         value={formData.businessChallenges}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
//                         placeholder="Tell us about your business, bookkeeping needs, current systems, and any challenges you're facing..."
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all"
//                     >
//                       Request Consultation
//                       <Send className="w-4 h-4" />
//                     </button>

//                   </form>
//                 )}
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>


//       {/* Benefits Section */}
//       <section className="w-full py-20 lg:py-28 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

//           <AnimatedSection className="text-center mb-14">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
//               Benefits
//             </span>

//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Why professional <span className="text-emerald-500">bookkeeping</span> matters.
//             </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Good bookkeeping is more than compliance. It gives you the information needed
//               to make better business decisions.
//             </p>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

//             {[
//               {
//                 title: 'Financial Clarity',
//                 text: 'Know exactly where your business stands with accurate and current financial information.',
//               },
//               {
//                 title: 'More Time',
//                 text: 'Delegate a critical operational task to an experienced team and focus on growth.',
//               },
//               {
//                 title: 'Better Spending Decisions',
//                 text: 'Understand how much cash is available so you can avoid unnecessary overspending.',
//               },
//               {
//                 title: 'Improved Cash Flow',
//                 text: 'Stay ahead of potential cash shortages and maintain healthier business finances.',
//               },
//               {
//                 title: 'Smoother Operations',
//                 text: 'Keep payroll, customer payments, and vendor bills organized and under control.',
//               },
//             ].map((item, i) => (
//               <AnimatedSection
//                 key={item.title}
//                 delay={i * 0.08}
//                 className="p-6 rounded-3xl bg-card border border-border"
//               >
//                 <h3 className="font-semibold text-lg mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm">
//                   {item.text}
//                 </p>
//               </AnimatedSection>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* Testimonials */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

//           <AnimatedSection className="text-center mb-14">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
//               Testimonials
//             </span>

//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Trusted by growing businesses.
//             </h2>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-3 gap-6">

//             {[
//               {
//                 quote:
//                   "Perugi Partners helped us get our books organized and gave us visibility into our finances for the first time.",
//                 name: "Sarah M.",
//                 company: "Construction Company",
//               },
//               {
//                 quote:
//                   "Their reporting helped us understand where our money was going and improved our decision making.",
//                 name: "David R.",
//                 company: "Professional Services Firm",
//               },
//               {
//                 quote:
//                   "Reliable, responsive, and easy to work with. They quickly became an important part of our operations.",
//                 name: "Jennifer L.",
//                 company: "Retail Business",
//               },
//             ].map((testimonial, i) => (
//               <AnimatedSection
//                 key={i}
//                 delay={i * 0.1}
//                 className="p-8 rounded-3xl bg-card border border-border"
//               >
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   &quot;{testimonial.quote}&quot;
//                 </p>

//                 <div>
//                   <div className="font-semibold">
//                     {testimonial.name}
//                   </div>

//                   <div className="text-sm text-muted-foreground">
//                     {testimonial.company}
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}

//           </div>
//         </div>
//       </section>


//       {/* Discussion Points */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="text-center mb-14">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               What we&apos;ll <span className="text-emerald-500">discuss</span> during  your consultation.
//             </h2>
//           </AnimatedSection>
//           <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
//             {['Current systems', 'Financial challenges', 'Reporting needs', 'Growth goals', 'Operational concerns'].map((point, i) => (
//               <AnimatedSection key={point} delay={i * 0.08} className="p-5 rounded-2xl bg-card border border-border text-center">
//                 <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-500 mx-auto mb-3">{i + 1}</span>
//                 <p className="font-medium">{point}</p>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
//           <AnimatedSection>
//             <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
//               Modern businesses deserve modern financial <span className="text-emerald-500">support</span>.
//             </h2>
//             <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
//               Perugi Partners helps businesses operate with greater clarity, confidence, and control.
//             </p>
//             <a href={`mailto:${siteConfig.email}`}
//               className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
//               <Mail className="w-4 h-4" /> Send us an email
//             </a>
//           </AnimatedSection>
//         </div>
//       </section>
//     </>
//   )
// }





// 'use client'

// import { useState } from 'react'
// import { Send, Check, Mail } from 'lucide-react'
// import { siteConfig } from '@/lib/data'
// import AnimatedSection from '@/components/AnimatedSection'

// export default function GetStarted() {
//   const [submitted, setSubmitted] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   const [formData, setFormData] = useState({
//     name: '',
//     businessName: '',
//     email: '',
//     phone: '',
//     services: [] as string[],
//     transactions: '',
//     bankAccounts: '',
//     employees: '',
//     software: '',
//     booksStatus: '',
//     payrollNeeded: '',
//     businessChallenges: '',
//     honeypot: '', // Anti-spam honeypot
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target
//     setFormData(prev => ({
//       ...prev,
//       services: checked
//         ? [...prev.services, value]
//         : prev.services.filter(s => s !== value)
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     // Honeypot spam check
//     if (formData.honeypot && formData.honeypot.length > 0) {
//       setError("Spam detected.")
//       setLoading(false)
//       return
//     }

//     try {
//       const response = await fetch('https://formspree.io/f/mbdeowoo', {
//         method: 'POST',
//         body: new FormData(e.currentTarget),
//         headers: {
//           Accept: 'application/json',
//         },
//       })

//       if (response.ok) {
//         setSubmitted(true)
//       } else {
//         throw new Error('Submission failed')
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again or email us directly.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <>
//       {/* Hero */}
//       <section className="relative min-h-[50vh] w-full flex items-center bg-background pt-28 pb-6">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="max-w-3xl">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Get Started</span>
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
//               How can we help your <span className="text-emerald-500">business</span>?
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-xl">
//               Whether you need bookkeeping support, financial clarity, or consistent financial reporting, we&apos;re here to help.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="text-center mb-14">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Our Process</span>
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Getting started is <span className="text-emerald-500">simple</span>.
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               We keep onboarding straightforward so you can focus on running your business.
//             </p>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-5 gap-5">
//             {[
//               { step: '01', title: 'Submit Form', text: 'Complete the questionnaire below so we can understand your business and bookkeeping needs.' },
//               { step: '02', title: 'Consultation', text: 'We schedule a conversation to discuss your operations, goals, and current financial processes.' },
//               { step: '03', title: 'Provide Statements', text: 'Send your three most recent bank statements for every account used in your business.' },
//               { step: '04', title: 'Receive Proposal', text: 'We review your requirements and provide a clear service proposal and pricing.' },
//               { step: '05', title: 'We Get To Work', text: 'After signing, you add us to QuickBooks and we begin delivering services.' },
//             ].map((item, i) => (
//               <AnimatedSection key={item.step} delay={i * 0.1} className="p-6 rounded-3xl bg-card border border-border">
//                 <div className="text-emerald-500 font-bold text-sm mb-3">{item.step}</div>
//                 <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">{item.text}</p>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Get Started Form */}
//       <section className="w-full py-16 lg:py-24 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="max-w-3xl mx-auto">
//             <div className="p-6 lg:p-10 rounded-3xl bg-card border border-border">
//               {submitted ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-center">
//                   <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
//                     <Check className="w-10 h-10 text-emerald-500" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
//                   <p className="text-muted-foreground">We&apos;ve received your request and will get back to you within 24 hours.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Honeypot Anti-Spam Field */}
//                   <input
//                     type="text"
//                     name="honeypot"
//                     value={formData.honeypot}
//                     onChange={handleChange}
//                     className="hidden"
//                     tabIndex={-1}
//                     autoComplete="off"
//                   />

//                   {/* Contact Info */}
//                   <div className="grid sm:grid-cols-2 gap-5">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-red-400">*</span></label>
//                       <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50" placeholder="John Brown" />
//                     </div>
//                     <div>
//                       <label htmlFor="businessName" className="block text-sm font-medium mb-2">Business Name</label>
//                       <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50" placeholder="ABC Company Limited" />
//                     </div>
//                   </div>

//                   <div className="grid sm:grid-cols-2 gap-5">
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-400">*</span></label>
//                       <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50" placeholder="mail@company.com" />
//                     </div>
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
//                       <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50" placeholder="+1 (555) 000-0000" />
//                     </div>
//                   </div>

//                   {/* Services Needed */}
//                   <div>
//                     <label className="block text-sm font-medium mb-3">Services Needed</label>
//                     <div className="grid sm:grid-cols-2 gap-3">
//                       {[
//                         { value: "bookkeeping", label: "Monthly Bookkeeping" },
//                         { value: "accountsReceivable", label: "Accounts Receivable Management" },
//                         { value: "accountsPayable", label: "Accounts Payable Management" },
//                         { value: "transactionReceiptMatching", label: "Match Transactions to Invoices/Receipts" },
//                         { value: "payroll", label: "Payroll Support" },
//                         { value: "financialReporting", label: "Financial Reporting" },
//                         { value: "cleanup", label: "Bookkeeping Cleanup / Catch-Up" },
//                         { value: "kpiDashboard", label: "Monthly KPI Dashboard" },
//                       ].map((service) => (
//                         <label key={service.value} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background cursor-pointer hover:border-emerald-500/50 transition-colors">
//                           <input
//                             type="checkbox"
//                             name="services"
//                             value={service.value}
//                             checked={formData.services.includes(service.value)}
//                             onChange={handleCheckboxChange}
//                             className="h-4 w-4 accent-emerald-500"
//                           />
//                           <span>{service.label}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Qualification Questions */}
//                   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                     <div>
//                       <label htmlFor="transactions" className="block text-sm font-medium mb-2">Average Monthly Transactions</label>
//                       <select id="transactions" name="transactions" value={formData.transactions} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
//                         <option value="">Select range</option>
//                         <option value="0-50">0 - 50</option>
//                         <option value="51-100">51 - 100</option>
//                         <option value="101-200">101 - 200</option>
//                         <option value="201-500">201 - 500</option>
//                         <option value="500+">500+</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="bankAccounts" className="block text-sm font-medium mb-2">Number of Bank Accounts</label>
//                       <select id="bankAccounts" name="bankAccounts" value={formData.bankAccounts} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
//                         <option value="">Select range</option>
//                         <option value="1">1</option>
//                         <option value="2-3">2 - 3</option>
//                         <option value="4-5">4 - 5</option>
//                         <option value="6+">6+</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="employees" className="block text-sm font-medium mb-2">Number of Employees</label>
//                       <select id="employees" name="employees" value={formData.employees} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
//                         <option value="">Select range</option>
//                         <option value="0">No Employees</option>
//                         <option value="1-5">1 - 5</option>
//                         <option value="6-15">6 - 15</option>
//                         <option value="16-50">16 - 50</option>
//                         <option value="50+">50+</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="software" className="block text-sm font-medium mb-2">Accounting Software</label>
//                       <select id="software" name="software" value={formData.software} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
//                         <option value="">Select one</option>
//                         <option value="quickbooks">QuickBooks</option>
//                         <option value="xero">Xero</option>
//                         <option value="sage">Sage</option>
//                         <option value="excel">Excel Only</option>
//                         <option value="none">No Software</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="booksStatus" className="block text-sm font-medium mb-2">Are Your Financials Up to Date?</label>
//                       <select id="booksStatus" name="booksStatus" value={formData.booksStatus} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
//                         <option value="">Select one</option>
//                         <option value="current">Current</option>
//                         <option value="1-3">1 - 3 Months Behind</option>
//                         <option value="4-12">4 - 12 Months Behind</option>
//                         <option value="12+">More Than 12 Months Behind</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="payrollNeeded" className="block text-sm font-medium mb-2">Need Payroll Support?</label>
//                       <select id="payrollNeeded" name="payrollNeeded" value={formData.payrollNeeded} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
//                         <option value="">Select one</option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Business Challenges */}
//                   <div>
//                     <label htmlFor="businessChallenges" className="block text-sm font-medium mb-2">
//                       Tell Us About Your Business & Challenges <span className="text-red-400">*</span>
//                     </label>
//                     <textarea
//                       id="businessChallenges"
//                       name="businessChallenges"
//                       required
//                       rows={5}
//                       value={formData.businessChallenges}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 resize-none"
//                       placeholder="Tell us about your business, current challenges, and what you're looking for..."
//                     />
//                   </div>

//                   {error && <p className="text-red-500 text-sm">{error}</p>}

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-70"
//                   >
//                     {loading ? 'Submitting...' : 'Request Consultation'}
//                     <Send className="w-4 h-4" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>


//       {/* Benefits Section */}
//       <section className="w-full py-20 lg:py-28 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

//           <AnimatedSection className="text-center mb-14">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
//               Benefits
//             </span>

//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Why professional <span className="text-emerald-500">bookkeeping</span> matters.
//             </h2>

//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Good bookkeeping is more than compliance. It gives you the information needed
//               to make better business decisions.
//             </p>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

//             {[
//               {
//                 title: 'Financial Clarity',
//                 text: 'Know exactly where your business stands with accurate and current financial information.',
//               },
//               {
//                 title: 'More Time',
//                 text: 'Delegate a critical operational task to an experienced team and focus on growth.',
//               },
//               {
//                 title: 'Better Spending Decisions',
//                 text: 'Understand how much cash is available so you can avoid unnecessary overspending.',
//               },
//               {
//                 title: 'Improved Cash Flow',
//                 text: 'Stay ahead of potential cash shortages and maintain healthier business finances.',
//               },
//               {
//                 title: 'Smoother Operations',
//                 text: 'Keep payroll, customer payments, and vendor bills organized and under control.',
//               },
//             ].map((item, i) => (
//               <AnimatedSection
//                 key={item.title}
//                 delay={i * 0.08}
//                 className="p-6 rounded-3xl bg-card border border-border"
//               >
//                 <h3 className="font-semibold text-lg mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm">
//                   {item.text}
//                 </p>
//               </AnimatedSection>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* Testimonials */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

//           <AnimatedSection className="text-center mb-14">
//             <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
//               Testimonials
//             </span>

//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Trusted by growing businesses.
//             </h2>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-3 gap-6">

//             {[
//               {
//                 quote:
//                   "Perugi Partners helped us get our books organized and gave us visibility into our finances for the first time.",
//                 name: "Sarah M.",
//                 company: "Construction Company",
//               },
//               {
//                 quote:
//                   "Their reporting helped us understand where our money was going and improved our decision making.",
//                 name: "David R.",
//                 company: "Professional Services Firm",
//               },
//               {
//                 quote:
//                   "Reliable, responsive, and easy to work with. They quickly became an important part of our operations.",
//                 name: "Jennifer L.",
//                 company: "Retail Business",
//               },
//             ].map((testimonial, i) => (
//               <AnimatedSection
//                 key={i}
//                 delay={i * 0.1}
//                 className="p-8 rounded-3xl bg-card border border-border"
//               >
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   &quot;{testimonial.quote}&quot;
//                 </p>

//                 <div>
//                   <div className="font-semibold">
//                     {testimonial.name}
//                   </div>

//                   <div className="text-sm text-muted-foreground">
//                     {testimonial.company}
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}

//           </div>
//         </div>
//       </section>


//       {/* Discussion Points */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="text-center mb-14">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               What we&apos;ll <span className="text-emerald-500">discuss</span> during  your consultation.
//             </h2>
//           </AnimatedSection>
//           <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
//             {['Current systems', 'Financial challenges', 'Reporting needs', 'Growth goals', 'Operational concerns'].map((point, i) => (
//               <AnimatedSection key={point} delay={i * 0.08} className="p-5 rounded-2xl bg-card border border-border text-center">
//                 <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-500 mx-auto mb-3">{i + 1}</span>
//                 <p className="font-medium">{point}</p>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
//           <AnimatedSection>
//             <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
//               Modern businesses deserve modern financial <span className="text-emerald-500">support</span>.
//             </h2>
//             <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
//               Perugi Partners helps businesses operate with greater clarity, confidence, and control.
//             </p>
//             <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
//               <Mail className="w-4 h-4" /> Send us an email
//             </a>
//           </AnimatedSection>
//         </div>
//       </section>
//     </>
//   )
// }




'use client'

import { useState } from 'react'
import { Send, Check, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    services: [] as string[],
    transactions: '',
    bankAccounts: '',
    employees: '',
    software: '',
    booksStatus: '',
    payrollNeeded: '',
    businessChallenges: '',
    honeypot: '', // Anti-spam honeypot
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter(s => s !== value)
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Honeypot spam check
    if (formData.honeypot && formData.honeypot.length > 0) {
      setError("Spam detected.")
      setLoading(false)
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/mbdeowoo', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] w-full flex items-center bg-background pt-28 pb-6">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Get Started</span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
              How can we help your <span className="text-emerald-500">business</span>?
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Whether you need bookkeeping support, financial clarity, or consistent financial reporting, we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Getting started is <span className="text-emerald-500">simple</span>.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We keep onboarding straightforward so you can focus on running your business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-5">
            {[
              { step: '01', title: 'Submit Form', text: 'Complete the questionnaire below so we can understand your business and bookkeeping needs.' },
              { step: '02', title: 'Consultation', text: 'We schedule a conversation to discuss your operations, goals, and current financial processes.' },
              { step: '03', title: 'Provide Statements', text: 'Send your three most recent bank statements for every account used in your business.' },
              { step: '04', title: 'Receive Proposal', text: 'We review your requirements and provide a clear service proposal and pricing.' },
              { step: '05', title: 'We Get To Work', text: 'After signing, you add us to QuickBooks and we begin delivering services.' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1} className="p-6 rounded-3xl bg-card border border-border">
                <div className="text-emerald-500 font-bold text-sm mb-3">{item.step}</div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Form */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="p-6 lg:p-10 rounded-3xl bg-card border border-border">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
                  <p className="text-muted-foreground">We&apos;ve received your request and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot Anti-Spam Field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Contact Info */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-red-400">*</span></label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 transition-all" placeholder="John Brown" />
                    </div>
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium mb-2">Business Name</label>
                      <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 transition-all" placeholder="ABC Company Limited" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-400">*</span></label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 transition-all" placeholder="mail@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Services Needed</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { value: "bookkeeping", label: "Monthly Bookkeeping" },
                        { value: "accountsReceivable", label: "Accounts Receivable Management" },
                        { value: "accountsPayable", label: "Accounts Payable Management" },
                        { value: "transactionReceiptMatching", label: "Match Transactions to Invoices/Receipts" },
                        { value: "payroll", label: "Payroll Support" },
                        { value: "financialReporting", label: "Financial Reporting" },
                        { value: "cleanup", label: "Bookkeeping Cleanup / Catch-Up" },
                        { value: "kpiDashboard", label: "Monthly KPI Dashboard" },
                      ].map((service) => (
                        <label key={service.value} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background cursor-pointer hover:border-emerald-500/50 transition-colors">
                          <input
                            type="checkbox"
                            name="services"
                            value={service.value}
                            checked={formData.services.includes(service.value)}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 accent-emerald-500"
                          />
                          <span>{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Qualification Questions */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="transactions" className="block text-sm font-medium mb-2">Average Monthly Transactions</label>
                      <select id="transactions" name="transactions" value={formData.transactions} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
                        <option value="">Select range</option>
                        <option value="0-50">0 - 50</option>
                        <option value="51-100">51 - 100</option>
                        <option value="101-200">101 - 200</option>
                        <option value="201-500">201 - 500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bankAccounts" className="block text-sm font-medium mb-2">Number of Bank Accounts</label>
                      <select id="bankAccounts" name="bankAccounts" value={formData.bankAccounts} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
                        <option value="">Select range</option>
                        <option value="1">1</option>
                        <option value="2-3">2 - 3</option>
                        <option value="4-5">4 - 5</option>
                        <option value="6+">6+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium mb-2">Number of Employees</label>
                      <select id="employees" name="employees" value={formData.employees} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
                        <option value="">Select range</option>
                        <option value="0">No Employees</option>
                        <option value="1-5">1 - 5</option>
                        <option value="6-15">6 - 15</option>
                        <option value="16-50">16 - 50</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="software" className="block text-sm font-medium mb-2">Accounting Software</label>
                      <select id="software" name="software" value={formData.software} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
                        <option value="">Select one</option>
                        <option value="quickbooks">QuickBooks</option>
                        <option value="xero">Xero</option>
                        <option value="sage">Sage</option>
                        <option value="excel">Excel Only</option>
                        <option value="none">No Software</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="booksStatus" className="block text-sm font-medium mb-2">Are Your Financials Up to Date?</label>
                      <select id="booksStatus" name="booksStatus" value={formData.booksStatus} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
                        <option value="">Select one</option>
                        <option value="current">Current</option>
                        <option value="1-3">1 - 3 Months Behind</option>
                        <option value="4-12">4 - 12 Months Behind</option>
                        <option value="12+">More Than 12 Months Behind</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="payrollNeeded" className="block text-sm font-medium mb-2">Need Payroll Support?</label>
                      <select id="payrollNeeded" name="payrollNeeded" value={formData.payrollNeeded} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-border">
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  {/* Business Challenges */}
                  <div>
                    <label htmlFor="businessChallenges" className="block text-sm font-medium mb-2">
                      Tell Us About Your Business & Challenges <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="businessChallenges"
                      name="businessChallenges"
                      required
                      rows={5}
                      value={formData.businessChallenges}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 resize-none"
                      placeholder="Tell us about your business, current challenges, and what you're looking for..."
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-70"
                  >
                    {loading ? 'Submitting...' : 'Request Consultation'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Benefits</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why professional <span className="text-emerald-500">bookkeeping</span> matters.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Good bookkeeping is more than compliance. It gives you the information needed
              to make better business decisions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { title: 'Financial Clarity', text: 'Know exactly where your business stands with accurate and current financial information.' },
              { title: 'More Time', text: 'Delegate a critical operational task to an experienced team and focus on growth.' },
              { title: 'Better Spending Decisions', text: 'Understand how much cash is available so you can avoid unnecessary overspending.' },
              { title: 'Improved Cash Flow', text: 'Stay ahead of potential cash shortages and maintain healthier business finances.' },
              { title: 'Smoother Operations', text: 'Keep payroll, customer payments, and vendor bills organized and under control.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08} className="p-6 rounded-3xl bg-card border border-border">
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by growing businesses.</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Perugi Partners helped us get our books organized and gave us visibility into our finances for the first time.", name: "Sarah M.", company: "Construction Company" },
              { quote: "Their reporting helped us understand where our money was going and improved our decision making.", name: "David R.", company: "Professional Services Firm" },
              { quote: "Reliable, responsive, and easy to work with. They quickly became an important part of our operations.", name: "Jennifer L.", company: "Retail Business" },
            ].map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-card border border-border">
                <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Points */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What we&apos;ll <span className="text-emerald-500">discuss</span> during your consultation.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Current systems', 'Financial challenges', 'Reporting needs', 'Growth goals', 'Operational concerns'].map((point, i) => (
              <AnimatedSection key={point} delay={i * 0.08} className="p-5 rounded-2xl bg-card border border-border text-center">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-500 mx-auto mb-3">{i + 1}</span>
                <p className="font-medium">{point}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Modern businesses deserve modern financial <span className="text-emerald-500">support</span>.
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Perugi Partners helps businesses operate with greater clarity, confidence, and control.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
              <Mail className="w-4 h-4" /> Send us an email
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}