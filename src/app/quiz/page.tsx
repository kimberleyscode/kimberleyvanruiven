import type { Metadata } from 'next';
import QuizClient from './client';

export const metadata: Metadata = {
  alternates: { canonical: '/quiz' },
  title: 'Gebruik jij AI, of gebruikt AI jou? · Kimberley van Ruiven',
  description: 'Ontdek in vijf minuten waar jij en je organisatie staan in bewust AI-gebruik. Gratis quiz, geen registratie nodig.',
};

export default function QuizPagina() {
  return <QuizClient />;
}
