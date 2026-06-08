import { BookOpen, FileText, Settings, BarChart3, Users, Check, TrendingUp, Wallet } from "lucide-react";

export const services = [
  {
    title: "Bookkeeping",
    description:
      "Accurate and organized financial records that keep your business running smoothly and provide a reliable foundation for decision-making.",
    icon: BookOpen,
    features: [
      "Monthly reconciliations",
      "Expense categorization",
      "Clean and organized records",
    ],
  },
  {
    title: "Financial Reporting",
    description:
      "Clear reports that help you understand cash flow, profitability, and business performance without digging through spreadsheets.",
    icon: FileText,
    features: [
      "Monthly financial reports",
      "Cash flow visibility",
      "Performance insights",
    ],
  },
  {
    title: "Financial Operations Support",
    description:
      "Practical financial support and systems that help you improve visibility, stay organized, and make informed decisions.",
    icon: Settings,
    features: [
      "Process improvements",
      "Financial guidance",
      "Operational visibility",
    ],
  },
];


export const ServicesList = [
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Organized books, clear reporting, and reliable financial visibility for growing companies.',
    benefits: [
      'Up-to-date financial records',
      'Accurate categorization of transactions',
      'Monthly reconciliation',
      'Clean expense tracking',
    ],
  },
  {
    slug: 'financial-reporting',
    title: 'Financial Reporting',
    description: 'Clear monthly reports that help you understand business performance.',
    benefits: [
      'Profit & Loss statements',
      'Cash flow summaries',
      'Balance sheets',
      'Monthly performance insights',
    ],
  },
  {
    slug: 'payroll-support',
    title: 'Payroll Support',
    description: 'Simple payroll tracking and structured employee payment records.',
    benefits: [
      'Payroll tracking system',
      'Employee payment records',
      'Clear payroll summaries',
      'Organized reporting',
    ],
  },
]

export const AllServices = [
  {
    title: 'Bookkeeping',
    slug: 'bookkeeping',
    description: 'Organized books, clear reporting, and reliable financial visibility for growing companies.',
    icon: BookOpen,
    features: ['Transaction categorization', 'Reconciliation', 'Monthly bookkeeping', 'Expense tracking', 'Income tracking'],
    image: '/images/service-bookkeeping.jpg',
  },
  {
    title: 'Financial Reporting',
    slug: 'financial-reporting',
    description: 'Clear monthly reports that help you understand your business performance.',
    icon: BarChart3,
    features: ['Profit & Loss statements', 'Balance Sheets', 'Cash Flow summaries', 'Monthly reporting'],
    image: '/images/service-reporting.jpg',
  },
  {
    title: 'Payroll Support',
    slug: 'payroll-support',
    description: 'Streamlined payroll tracking and employee payment record management.',
    icon: Users,
    features: ['Payroll tracking', 'Employee payment records', 'Payroll organization', 'Reporting support'],
    image: '/images/hero-workspace.jpg',
  },
  {
    title: 'Financial Operations Support',
    slug: 'financial-operations-support',
    description: 'End-to-end financial operations support for growing businesses.',
    icon: Wallet,
    features: ['Expense visibility', 'Financial systems', 'Workflow organization', 'Operational financial tracking'],
    image: '/images/service-operations.jpg',
  },
  {
    title: 'Business Financial Insights',
    slug: 'financial-insights',
    description: 'Data-driven insights to help you make better business decisions.',
    icon: TrendingUp,
    features: ['Margin visibility', 'KPI tracking', 'Spending analysis', 'Financial trend analysis'],
    image: '/images/pricing-hero.jpg',
  },
];