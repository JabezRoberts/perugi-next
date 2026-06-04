export const siteConfig = {
  name: 'Perugi Partners',
  tagline: 'Financial Clarity for Modern Businesses',
  email: 'info@perugipartners.com',
  phone: '+1 (876) 501-4318',
  instagram: '@perugipartners',
  linkedin: 'Perugi Partners',
  address: 'Kingston, Jamaica',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  // { label: 'Get Started', href: '/get-started' },
]

export const services = [
  {
    title: 'Bookkeeping',
    description: 'Monthly bookkeeping, transaction categorization, reconciliation, and organized financial records.',
    image: '/images/service-bookkeeping.jpg',
    features: ['Transaction categorization', 'Reconciliation', 'Monthly bookkeeping', 'Expense tracking', 'Income tracking'],
    href: '/bookkeeping',
  },
  {
    title: 'Financial Reporting',
    description: 'Clear monthly reports including Profit & Loss, Balance Sheets, and Cash Flow summaries.',
    image: '/images/service-reporting.jpg',
    features: ['Profit & Loss statements', 'Balance Sheets', 'Cash Flow summaries', 'Monthly reporting'],
    href: '/services',
  },
  {
    title: 'Payroll Support',
    description: 'Payroll tracking, employee payment records, and reporting support for your team.',
    image: '/images/service-operations.jpg',
    features: ['Payroll tracking', 'Employee payment records', 'Payroll organization', 'Reporting support'],
    href: '/services',
  },
  {
    title: 'Financial Operations Support',
    description: 'Expense visibility, financial systems, workflow organization, and operational tracking.',
    image: '/images/hero-workspace.jpg',
    features: ['Expense visibility', 'Financial systems', 'Workflow organization', 'Operational financial tracking'],
    href: '/services',
  },
  {
    title: 'KPI & Performance Tracking',
    description: 'Margin visibility, KPI tracking, spending analysis, and financial trend analysis.',
    image: '/images/pricing-hero.jpg',
    features: ['Margin visibility', 'KPI tracking', 'Spending analysis', 'Financial trend analysis'],
    href: '/services',
  },
]

export const pricingPlans = [
  {
    name: 'Small Business Starter',
    price: '$35K-$60K',
    currency: 'JMD/month',
    description: 'Perfect for freelancers, contractors, small stores, restaurants, and small agencies.',
    bestFor: ['Freelancers', 'Contractors', 'Small stores', 'Restaurants', 'Small agencies'],
    features: ['Transaction categorization', 'Monthly reconciliation', 'Monthly P&L', 'Simple balance sheet', 'Basic cash flow tracking'],
    cta: 'Get Started',
    href: '/contact',
  },
  {
    name: 'Growing Business',
    price: '$75K-$150K',
    currency: 'JMD/month',
    description: 'For growing businesses, multi-person teams, and higher transaction volume.',
    bestFor: ['Growing businesses', 'Multi-person teams', 'Higher transaction volume'],
    features: ['Everything in Starter', 'Payroll support', 'Accounts receivable/payable tracking', 'Monthly review calls', 'Expense analysis'],
    cta: 'Get Started',
    href: '/contact',
    popular: true,
  },
  {
    name: 'Operational Finance Support',
    price: '$150K-$300K+',
    currency: '/month',
    description: 'For businesses needing deeper financial support, scaling companies, and operationally complex businesses.',
    bestFor: ['Scaling companies', 'Operationally complex businesses', 'Multi-entity operations'],
    features: ['Advanced reporting', 'Forecasting', 'Budgeting', 'KPI tracking', 'Operational financial insights'],
    cta: 'Contact Us',
    href: '/contact',
  },
]

export const testimonials = [
  { quote: 'They turned our monthly chaos into a 10-minute dashboard review. I finally understand my numbers.', name: 'Sarah Chen', role: 'Founder, Luxe Studio' },
  { quote: 'Finally, a team that speaks founder, not accountant. Perugi makes finance approachable.', name: 'Marcus Johnson', role: 'CEO, TechStart JA' },
  { quote: 'Clean reporting, fast responses, zero drama. Exactly what we needed as we scaled.', name: 'Aisha Patel', role: 'COO, GreenLeaf Co.' },
  { quote: 'Our fundraising prep was 10x easier with Perugi\'s books and reporting. Investors were impressed.', name: 'David Williams', role: 'Founder, CaribConnect' },
  { quote: 'We actually understand our margins now. That clarity changed how we run the business.', name: 'Rachel Thompson', role: 'Owner, Island Eats' },
  { quote: 'Onboarding was smooth and they kept us on track from day one. Highly recommend.', name: 'James Mitchell', role: 'Director, BuildRight JA' },
]

export const faqs = [
  { question: 'How long does onboarding take?', answer: 'Most clients are fully onboarded within 2-3 weeks. We start with a discovery call to understand your business, then map your accounts, set up integrations, and organize any historical data. You\'ll start seeing your first reports within the first month.' },
  { question: 'Which tools do you integrate with?', answer: 'We integrate with most major accounting and business tools including QuickBooks, Xero, Stripe, PayPal, Square, Gusto, Wise, and most bank feeds. If you use something specific, we\'ll find a way to make it work.' },
  { question: 'Can you support fundraising or board reporting?', answer: 'Absolutely. Our Growth and Scale plans include board-ready reporting packages. We\'ve helped multiple clients prepare for fundraises by cleaning up books, creating investor dashboards, and providing financial projections.' },
  { question: 'What if my books are behind?', answer: 'No problem at all. We specialize in catching up books that are months (or even years) behind. We\'ll assess the scope during our initial consultation and create a catch-up plan that works for your timeline and budget.' },
  { question: 'How do I communicate with the team?', answer: 'We offer multiple communication channels including email, scheduled video calls, and Slack for Growth and Scale clients. You\'ll always have a direct line to your dedicated bookkeeper and account manager.' },
]

export const industries = ['Startups', 'Agencies', 'Contractors', 'E-commerce', 'Creators', 'Consultants', 'Restaurants', 'Service businesses']

export const blogPosts = [
  {
    slug: 'why-modern-bookkeeping-matters',
    title: 'Why Modern Bookkeeping Matters for Growing Businesses',
    excerpt: 'Discover how modern bookkeeping practices can transform your business operations and give you the financial clarity you need to scale.',
    date: '2026-04-15',
    category: 'Bookkeeping',
    image: '/images/blog-bookkeeping.jpg',
    content: `
# Why Modern Bookkeeping Matters for Growing Businesses

In today's fast-paced business environment, traditional bookkeeping methods simply don't cut it anymore. Modern businesses need real-time visibility, automated processes, and insights that drive decision-making.

## The Problem with Traditional Bookkeeping

Most small businesses struggle with:
- Delayed financial reports (often months behind)
- Manual data entry prone to errors
- Lack of visibility into cash flow
- Difficulty tracking expenses and revenue trends

## What Modern Bookkeeping Looks Like

Modern bookkeeping transforms your financial operations through:

### 1. Automation
Automated bank feeds, receipt capture, and transaction categorization eliminate manual data entry and reduce errors by up to 90%.

### 2. Real-Time Dashboards
Cloud-based accounting software gives you access to your financial data anytime, anywhere. No more waiting for month-end reports.

### 3. Proactive Insights
Modern bookkeepers don't just record transactions--they analyze trends, flag anomalies, and provide actionable recommendations.

### 4. Scalable Systems
As your business grows, your bookkeeping system grows with you. From basic expense tracking to multi-entity consolidation.

## The Perugi Approach

At Perugi Partners, we combine cutting-edge technology with human expertise. Our clients receive:
- Monthly reconciliations within 5 business days
- Custom dashboards tailored to their KPIs
- Quarterly business reviews with actionable insights
- Direct access to a dedicated financial team

## Getting Started

Ready to modernize your bookkeeping? [Book a consultation](/contact) and let's discuss how we can transform your financial operations.
    `,
  },
  {
    slug: 'cash-flow-management-tips',
    title: '5 Cash Flow Management Tips Every Entrepreneur Should Know',
    excerpt: 'Cash flow is the lifeblood of any business. Learn practical strategies to manage, forecast, and optimize your cash position.',
    date: '2026-04-08',
    category: 'Financial Strategy',
    image: '/images/blog-cashflow.jpg',
    content: `
# 5 Cash Flow Management Tips Every Entrepreneur Should Know

Cash flow problems are one of the leading causes of business failure. But with the right systems and strategies, you can maintain a healthy cash position and avoid unexpected shortfalls.

## 1. Build a 13-Week Cash Flow Forecast

A 13-week rolling forecast is the gold standard for cash flow management. It gives you:
- Early warning of potential shortfalls
- Time to arrange financing if needed
- Better decision-making about expenses and investments

Update this forecast weekly with actual numbers and adjust your projections accordingly.

## 2. Accelerate Your Invoicing

The faster you invoice, the faster you get paid. Best practices include:
- Invoice immediately upon project completion
- Use automated invoicing tools
- Offer small discounts for early payment (e.g., 2/10 net 30)
- Follow up on overdue invoices promptly

## 3. Negotiate Better Payment Terms

Review your payment terms with both customers and suppliers:
- Ask customers for deposits or milestone payments
- Negotiate longer payment terms with suppliers
- Use credit cards strategically to extend payment windows

## 4. Build a Cash Reserve

Aim to maintain 3-6 months of operating expenses in reserve. This buffer protects you against:
- Seasonal revenue fluctuations
- Unexpected expenses
- Late payments from major clients
- Economic downturns

## 5. Monitor Your Metrics Weekly

Track these key cash flow metrics every week:
- Cash runway (months of operation at current burn rate)
- Days Sales Outstanding (DSO)
- Operating cash flow
- Free cash flow

## How Perugi Can Help

Our financial reporting services include automated cash flow tracking, forecasting, and alerts. [Contact us](/contact) to learn more.
    `,
  },
  {
    slug: 'understanding-financial-statements',
    title: 'Understanding Your Financial Statements: A Founders Guide',
    excerpt: 'Demystify the three core financial statements and learn how to use them to make better business decisions.',
    date: '2026-03-28',
    category: 'Financial Literacy',
    image: '/images/blog-header.jpg',
    content: `
# Understanding Your Financial Statements: A Founder's Guide

Financial statements are more than just compliance documents--they're powerful tools for understanding and growing your business. Let's break down the three core statements every founder should understand.

## The Income Statement (P&L)

Your Income Statement shows revenue, expenses, and profit over a period of time. Key sections:

### Revenue
All money earned from sales of products or services. Track this by source to understand which offerings drive the most income.

### Cost of Goods Sold (COGS)
Direct costs associated with producing your goods or services. This includes materials, labor, and manufacturing overhead.

### Gross Profit
Revenue minus COGS. Your gross profit margin (Gross Profit / Revenue) indicates how efficiently you produce your offerings.

### Operating Expenses
Costs not directly tied to production: rent, salaries, marketing, software, etc.

### Net Income
The bottom line--what's left after all expenses. This is your business's profit or loss.

## The Balance Sheet

A snapshot of your business's financial position at a specific moment:

### Assets
What you own: cash, accounts receivable, inventory, equipment, etc.

### Liabilities
What you owe: accounts payable, loans, credit card balances, etc.

### Equity
The owner's stake in the business: invested capital plus retained earnings.

The fundamental equation: Assets = Liabilities + Equity

## The Cash Flow Statement

Shows how cash moves in and out of your business across three categories:

### Operating Activities
Cash from core business operations: customer payments, supplier payments, payroll.

### Investing Activities
Cash used for or generated from investments: equipment purchases, asset sales.

### Financing Activities
Cash from loans, investments, or distributions to owners.

## Using Financial Statements Together

The magic happens when you analyze all three statements together:
- A profitable business can still run out of cash (check the Cash Flow Statement)
- Growing assets might mean growing debt (check the Balance Sheet)
- Rising revenue doesn't always mean rising profit (check the Income Statement)

## Need Help?

At Perugi Partners, we help founders understand their numbers without the accounting jargon. [Book a consultation](/contact) and let's make your financial statements work for you.
    `,
  },
]

export const processSteps = [
  { number: '01', title: 'Consultation', description: 'We discuss your business, current systems, and financial goals.' },
  { number: '02', title: 'Financial Review', description: 'We assess your existing books and identify areas for improvement.' },
  { number: '03', title: 'Setup & Organization', description: 'We set up your chart of accounts and integrate your financial tools.' },
  { number: '04', title: 'Monthly Bookkeeping', description: 'We handle your monthly transactions, reconciliation, and reporting.' },
  { number: '05', title: 'Ongoing Reporting & Support', description: 'We provide continuous support, insights, and quarterly reviews.' },
]

export const coreValues = [
  { title: 'Clarity', description: 'We make complex financial concepts simple and actionable.' },
  { title: 'Integrity', description: 'We handle your finances with the utmost care and transparency.' },
  { title: 'Responsiveness', description: 'Questions get answered. Quickly.' },
  { title: 'Modern Thinking', description: 'We leverage technology to deliver better insights faster.' },
  { title: 'Education', description: 'We help you understand your numbers, not just report them.' },
  { title: 'Long-term Relationships', description: 'We grow with our clients, adapting as their needs evolve.' },
  { title: 'Operational Excellence', description: 'We deliver consistent, high-quality work every month.' },
]
