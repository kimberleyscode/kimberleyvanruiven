import type { Metadata } from 'next';
import QuizClient from './client';

export const metadata: Metadata = {
  alternates: { canonical: '/concept-2/quiz' },
  title: 'Gebruik jij AI, of gebruikt AI jou? · Kimberley van Ruiven',
  description: 'Ontdek in vijf minuten waar jij en je organisatie staan in bewust AI-gebruik. Gratis quiz, geen registratie nodig.',
  robots: 'noindex, nofollow', // net als de andere concept-2-tools: indexeren pas bij livegang
};

export default function QuizPagina() {
  return <QuizClient />;
}
