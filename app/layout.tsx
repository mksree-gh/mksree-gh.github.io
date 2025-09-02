// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from '@/components/shared/Footer';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keerthi Sree Marrapu - AI Product Engineer',
  description: 'Product Engineer from IIT Kharagpur with 2+ years experience building AI-powered solutions, data pipelines, and ML tools. Skilled in user-first product thinking and translating vision into impactful outcomes at Hushh.ai and EY.',
  keywords: 'Product Engineer, AI Engineer, Data Engineer, Machine Learning, LangGraph, RAG, Product Management, Hushh.ai, Ernst & Young, IIT Kharagpur, AI Pipeline, DocuSense, Intellectual Humility, AI-driven solutions, Data-driven solutions, User-first product thinking',
  authors: [{ name: 'Keerthi Sree Marrapu' }],
  creator: 'Keerthi Sree Marrapu',
  publisher: 'Keerthi Sree Marrapu',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mksree-gh.github.io/',
    siteName: 'Keerthi Sree Marrapu - Portfolio',
    title: 'Keerthi Sree Marrapu - AI Product Engineer',
    description: 'Product Engineer with 2+ years experience building AI-powered solutions, data pipelines, and ML tools. Specializing in LangGraph, RAG, and product management.',
    images: [
      {
        url: '/profile-art.png',
        width: 1200,
        height: 630,
        alt: 'Keerthi Sree Marrapu - AI Product Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keerthi Sree Marrapu - AI Product Engineer',
    description: 'Product Engineer with 2+ years experience building AI-powered solutions, data pipelines, and ML tools.',
    images: ['/profile-art.png'],
    creator: '@mksree_x',
  },
  alternates: {
    canonical: 'https://mksree-gh.github.io/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  category: 'technology',
  classification: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXZ1YQY655"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HXZ1YQY655');
            `,
          }}
        />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Keerthi Sree Marrapu",
              "jobTitle": "Product Engineer",
              "description": "Product Engineer building AI and data-driven solutions",
              "url": "https://mksree-gh.github.io/",
              "image": "/profile-art.png",
              "sameAs": [
                "https://linkedin.com/in/mksree",
                "https://github.com/mksree-gh"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Hushh.ai",
                  "jobTitle": "Product Engineer"
                },
                {
                  "@type": "Organization", 
                  "name": "Ernst & Young",
                  "jobTitle": "Python Developer Intern"
                }
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "IIT Kharagpur"
              },
              "knowsAbout": [
                "Product Engineering",
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "LangGraph",
                "RAG (Retrieval-Augmented Generation)",
                "Product Management"
              ]
            })
          }}
        />
      </head>
      <body className={jost.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}