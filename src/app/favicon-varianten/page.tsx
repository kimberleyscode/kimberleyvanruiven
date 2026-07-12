import type { Metadata } from 'next';
import Varianten from './varianten';

export const metadata: Metadata = {
  title: "Favicon & thumbnail · kies maar",
  robots: "noindex, nofollow", // keuzepagina, mag later weg (zoals /bril-varianten)
};

export default function FaviconVarianten() {
  return <Varianten />;
}
