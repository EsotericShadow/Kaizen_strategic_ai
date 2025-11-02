import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Tools & Business Tools Northern BC | AI Risk Register, Templates | Kaizen Strategic AI',
  description: 'Free AI and business tools for Northern BC businesses. Access NC-AI-001 AI Risk Register Template, calculators, and templates. Practical tools aligned with ISO 42001:2023.',
  keywords: [
    'free AI tools Northern BC',
    'AI risk register template',
    'business tools Northern BC',
    'AI governance templates',
    'NC-AI-001',
    'ISO 42001 templates',
  ].join(', '),
  alternates: {
    canonical: 'https://kaizenstrategic.ai/tools',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

