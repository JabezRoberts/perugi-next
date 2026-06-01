import PricingClient from './PricingClient'
import { faqs } from '@/lib/data'

export const metadata = {
  title: 'Pricing | Perugi Partners',
  description: 'Transparent pricing for growing businesses.',
}

export default function Pricing() {
  return <PricingClient faqs={faqs} />
}
