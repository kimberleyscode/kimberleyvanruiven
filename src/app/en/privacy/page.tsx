import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/privacy',
    languages: { 'nl-NL': '/privacy', 'en': '/en/privacy' },
  },
  title: 'Privacy policy · Kimberley van Ruiven',
  description: 'How kimberleyvanruiven.nl handles your personal data, cookies and AI transparency.',
  openGraph: {
    title: 'Privacy policy · Kimberley van Ruiven',
    description: 'How kimberleyvanruiven.nl handles your personal data, cookies and AI transparency.',
    locale: 'en_GB',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'For organisations that choose a human-centred future with technology · Kimberley van Ruiven' }],
  },
};

export default function Privacy() {
  return (
    <C2Tekstpagina
      label="Legal"
      regels={['Privacy', 'policy']}
      bijgewerkt="July 2026"
      locale="en"
      anderePad="/privacy"
      scatter={[[2, 5.2, '74%', '10%'], [19, 3.2, '60%', '64%'], [10, 2.6, '86%', '84%']]}
    >
      {/* Een vertaald privacybeleid is een dienst aan de lezer, geen juridisch document:
          bij twijfel geldt de Nederlandse tekst. Dat staat er daarom expliciet bij. */}
      <section>
        <h2>About this translation</h2>
        <p>
          This is an English rendering of the Dutch privacy policy, offered for convenience. In case of any difference in meaning, the <Link href="/privacy">Dutch version</Link> is the one that applies.
        </p>
      </section>

      <section>
        <h2>Who is responsible?</h2>
        <p>
          Kimberley van Ruiven is the data controller within the meaning of the General Data Protection Regulation (GDPR). Contact: <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>

      <section>
        <h2>Which data is processed?</h2>
        <p>
          This website collects no personal data through forms or tracking. For visitor statistics the site uses Vercel Web Analytics: a privacy-friendly measurement without cookies, storing no personal data and leaving visitors individually unidentifiable. A cookie banner is therefore not needed.
        </p>
        <p>
          When you get in touch through this website (by email or through a scheduling link) or use external services, the privacy terms of those services apply:
        </p>
        <ul>
          <li>Google Calendar: for booking an intro call. Google processes data in line with its own privacy policy.</li>
          <li>LinkedIn: when visiting the profile or sending messages.</li>
          <li>GitHub: when viewing code and projects through the links on this site.</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          This website places no tracking or analytics cookies of its own; the visitor statistics work entirely without cookies. External parties (such as those named above) may place cookies when you visit their services. That falls outside the responsibility of Kimberley van Ruiven.
        </p>
      </section>

      <section>
        <h2>Your rights under the GDPR</h2>
        <p>Under the GDPR you have the following rights:</p>
        <ul>
          <li>Right of access: you can request which data about you is stored.</li>
          <li>Right to rectification: having incorrect data corrected.</li>
          <li>Right to erasure: having data deleted (the &ldquo;right to be forgotten&rdquo;).</li>
          <li>Right to restriction: having the processing stopped, temporarily or otherwise.</li>
          <li>Right to object: objecting to processing based on legitimate interest.</li>
          <li>Right to data portability: requesting your data in a machine-readable format.</li>
        </ul>
        <p>
          For questions or to exercise your rights: <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>. You also have the right to lodge a complaint with the Dutch data protection authority, the <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>.
        </p>
      </section>

      <section>
        <h2>AI transparency and the EU AI Act</h2>
        <p>
          In line with the EU AI Act, and from my own values around ethical technology, I am open about the use of AI tools. This website was developed partly with the help of AI (among other things for design, text and code); the content has been checked, reviewed and approved by me, Kimberley van Ruiven. In advisory work I use AI as a supporting aid: conclusions and recommendations are always human work and fall under my professional responsibility. No automated decisions are made about you as a person through this website.
        </p>
        <p>
          Exactly how I work with AI, which tools I use and when I deliberately leave AI alone is set out in <Link href="/en/how-i-work-with-ai">how I work with AI</Link>.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          This privacy policy may be amended when the services or the law change. The most current version is always the one on this page.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
