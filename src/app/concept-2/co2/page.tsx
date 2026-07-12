import type { Metadata } from 'next';
import CO2Concept2Client from './client';

export const metadata: Metadata = {
  alternates: { canonical: '/concept-2/co2' },
  title: "AI CO₂-calculator · Kimberley van Ruiven",
  description: "Hoeveel CO₂ stoot jouw AI-gebruik uit? Reken het uit en ontdek groenere alternatieven.",
  robots: "noindex, nofollow", // conceptversie; de oude /co2 blijft voorlopig de echte
};

export default function CO2Concept2() {
  return <CO2Concept2Client />;
}
