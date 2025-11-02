import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'AI Consulting Northern BC | AI Terrace BC | Kaizen Strategic AI - Digital Strategy & AI Integration',
  description: 'Leading AI consulting firm in Northern BC. AI automation, integration, and digital strategy services for businesses in Terrace, Kitimat, Prince Rupert, and Smithers. AI solutions that work for your business.',
  keywords: [
    'AI Northern BC',
    'AI Terrace BC',
    'AI Kitimat BC',
    'AI Prince Rupert BC',
    'AI Smithers BC',
    'Artificial Intelligence Northern BC',
    'AI consulting Northern BC',
    'AI automation Northern BC',
    'AI integration Northern BC',
    'AI services Northern BC',
    'machine learning Northern BC',
    'digital strategy Northern BC',
    'AI consulting Terrace',
    'AI consulting Kitimat',
    'AI consulting Prince Rupert',
    'AI business solutions',
    'automation services',
    'AI implementation',
  ].join(', '),
  openGraph: {
    title: 'AI Consulting Northern BC | Kaizen Strategic AI',
    description: 'Leading AI consulting and digital strategy services in Northern BC. AI automation, integration, and governance for businesses in Terrace, Kitimat, Prince Rupert, and Smithers.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <ServicesSection />
      <HowItWorksSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
