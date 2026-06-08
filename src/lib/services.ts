import { BookOpen, BarChart3, Users, Wallet } from 'lucide-react'

export const ServicesPageContent = {
  bookkeeping: {
    slug: 'bookkeeping',
    title: 'Bookkeeping',
    description:
      'Accurate, organized bookkeeping that keeps your financial records clean, updated, and ready for decision-making.',

    image: '/images/service-bookkeeping.jpg',

    stats: [
      { value: 'Monthly', label: 'Updated Books' },
      { value: '100%', label: 'Organized Records' },
      { value: 'Real-Time', label: 'Financial Clarity' },
    ],

    painPoints: [
      {
        problem: 'Your financial records are always behind',
        solution:
          'We keep your books updated monthly so you always know where your business stands.',
      },
      {
        problem: 'You don’t know where your money is going',
        solution:
          'Every transaction is categorized and tracked so spending becomes clear and controlled.',
      },
      {
        problem: 'Tax time is stressful and disorganized',
        solution:
          'Clean, structured books make tax season faster, easier, and less stressful.',
      },
    ],

    benefits: [
      {
        title: 'Clear financial records',
        description: 'Know exactly what your business earned, spent, and owes.',
      },
      {
        title: 'Better financial control',
        description: 'Stop guessing and start making informed decisions.',
      },
      {
        title: 'Reduced admin stress',
        description: 'No more chasing receipts or messy spreadsheets.',
      },
    ],

    process: [
      {
        number: '01',
        title: 'Consultation',
        description: 'We understand your business and current financial setup.',
      },
      {
        number: '02',
        title: 'Setup & Cleanup',
        description: 'We organize your accounts and fix existing bookkeeping issues.',
      },
      {
        number: '03',
        title: 'Monthly Bookkeeping',
        description: 'We track, categorize, and reconcile your transactions monthly.',
      },
      {
        number: '04',
        title: 'Ongoing Maintenance',
        description: 'Your books stay updated and consistently accurate.',
      },
    ],

    testimonials: [
      {
        name: 'Small Business Owner',
        company: 'Retail Business',
        quote:
          'Before this, I had no idea what my actual profit was. Now everything is clear every month.',
      },
      {
        name: 'Agency Founder',
        company: 'Marketing Agency',
        quote:
          'The bookkeeping alone helped us understand where we were overspending.',
      },
      {
        name: 'E-commerce Owner',
        company: 'Online Store',
        quote:
          'Tax season used to be chaos. Now everything is already organized.',
      },
    ],
  },

  financialReporting: {
    slug: 'financial-reporting',
    title: 'Financial Reporting',
    description:
      'Clear monthly financial reports that show how your business is performing and where improvements can be made.',

    image: '/images/service-reporting.jpg',

    stats: [
      { value: 'Monthly', label: 'Reports Delivered' },
      { value: 'Clear', label: 'Profit Visibility' },
      { value: 'Actionable', label: 'Insights' },
    ],

    painPoints: [
      {
        problem: 'You don’t understand your monthly performance',
        solution:
          'We translate your numbers into simple monthly reports you can actually read.',
      },
      {
        problem: 'You don’t know if you are profitable',
        solution:
          'We break down revenue, expenses, and profit clearly so you always know your position.',
      },
      {
        problem: 'Financial data is overwhelming',
        solution:
          'We simplify your numbers into structured, easy-to-understand reports.',
      },
    ],

    benefits: [
      {
        title: 'Profit clarity',
        description: 'Understand exactly how much your business is making.',
      },
      {
        title: 'Better decisions',
        description: 'Use real numbers to guide business decisions.',
      },
      {
        title: 'Performance tracking',
        description: 'Monitor growth trends month by month.',
      },
    ],

    process: [
      {
        number: '01',
        title: 'Data Review',
        description: 'We collect and review your financial records.',
      },
      {
        number: '02',
        title: 'Report Preparation',
        description: 'We build structured financial reports.',
      },
      {
        number: '03',
        title: 'Insights Breakdown',
        description: 'We simplify the data into actionable insights.',
      },
      {
        number: '04',
        title: 'Monthly Delivery',
        description: 'You receive clear monthly financial reports.',
      },
    ],

    testimonials: [
      {
        name: 'Business Owner',
        company: 'Service Company',
        quote:
          'I finally understand my monthly performance without needing an accountant.',
      },
      {
        name: 'Startup Founder',
        company: 'Tech Startup',
        quote:
          'The reports helped us identify where we were losing money.',
      },
    ],
  },

  payrollSupport: {
    slug: 'payroll-support',
    title: 'Payroll Support',
    description:
      'Simple, structured payroll tracking and employee payment management for small and growing teams.',

    image: '/images/hero-workspace.jpg',

    stats: [
      { value: 'Accurate', label: 'Payroll Tracking' },
      { value: 'Organized', label: 'Employee Records' },
      { value: 'Reliable', label: 'Payment Support' },
    ],

    painPoints: [
      {
        problem: 'Payroll is inconsistent or confusing',
        solution:
          'We structure and organize payroll so payments are tracked properly.',
      },
      {
        problem: 'Employee payment records are messy',
        solution:
          'We maintain clean records of all employee payments and obligations.',
      },
      {
        problem: 'You’re unsure of payroll totals each month',
        solution:
          'We provide clear payroll summaries so you always know your obligations.',
      },
    ],

    benefits: [
      {
        title: 'Organized payroll records',
        description: 'All employee payments tracked and structured.',
      },
      {
        title: 'Reduced errors',
        description: 'Avoid confusion and missed payments.',
      },
      {
        title: 'Clear obligations',
        description: 'Know exactly what you owe and when.',
      },
    ],

    process: [
      {
        number: '01',
        title: 'Payroll Setup',
        description: 'We organize employee data and payroll structure.',
      },
      {
        number: '02',
        title: 'Tracking System',
        description: 'We build a system to track payments accurately.',
      },
      {
        number: '03',
        title: 'Monthly Management',
        description: 'We manage payroll tracking each month.',
      },
      {
        number: '04',
        title: 'Reporting',
        description: 'You receive clear payroll summaries.',
      },
    ],

    testimonials: [
      {
        name: 'Business Owner',
        company: 'Construction Company',
        quote:
          'Payroll used to be chaotic. Now it’s structured and easy to follow.',
      },
    ],
  },

  financialOperations: {
    slug: 'financial-operations-support',
    title: 'Financial Operations Support',
    description:
      'Understand your cash position and make confident decisions about hiring, spending, and growth.',

    image: '/images/service-operations.jpg',

    stats: [
      { value: 'Clear', label: 'Cash Position' },
      { value: 'Better', label: 'Decision Making' },
      { value: 'Controlled', label: 'Spending Awareness' },
    ],

    painPoints: [
      {
        problem: 'You don’t know how much cash you actually have',
        solution:
          'We give you a clear view of your available cash position.',
      },
      {
        problem: 'You’re unsure if you can afford to hire',
        solution:
          'We help you understand affordability based on your real numbers.',
      },
      {
        problem: 'Business spending feels uncontrolled',
        solution:
          'We highlight spending patterns and operational inefficiencies.',
      },
    ],

    benefits: [
      {
        title: 'Cash flow clarity',
        description: 'Understand exactly how much money is available.',
      },
      {
        title: 'Smarter hiring decisions',
        description: 'Know when you can afford to grow your team.',
      },
      {
        title: 'Controlled spending',
        description: 'See where money is being used and optimize it.',
      },
    ],

    process: [
      {
        number: '01',
        title: 'Financial Overview',
        description: 'We review your current financial position.',
      },
      {
        number: '02',
        title: 'Cash Flow Mapping',
        description: 'We map inflows and outflows clearly.',
      },
      {
        number: '03',
        title: 'Operational Insights',
        description: 'We identify spending and capacity insights.',
      },
      {
        number: '04',
        title: 'Decision Support',
        description: 'We help you make informed business decisions.',
      },
    ],

    testimonials: [
      {
        name: 'Founder',
        company: 'Service Business',
        quote:
          'This helped me finally understand when I can afford to hire.',
      },
    ],
  },
}