import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const BASE_URL = "https://tejasdangle.com"; // Update with actual domain once live

export const metadata: Metadata = {
  // Core SEO
  title: {
    default: "Tejas Dangle & Associates | Chartered Accountants",
    template: "%s | Tejas Dangle & Associates",
  },
  description:
    "CA Tejas Mahendra Dangle — Chartered Accountants offering expert Accounting, Audit, Taxation, Advisory & Financing services in Nashik & Mumbai. 1st Attempt CA Final. Ex-IDFC First Bank analyst. Call: +91 7030535953",
  keywords: [
    "chartered accountant nashik",
    "CA nashik",
    "chartered accountant mumbai",
    "tax filing nashik",
    "GST consultant nashik",
    "audit firm nashik",
    "income tax return nashik",
    "CA tejas dangle",
    "financial reporting",
    "risk control",
    "business advisory nashik",
    "ICAI member",
  ],
  authors: [{ name: "CA Tejas Mahendra Dangle" }],
  creator: "Tejas Dangle & Associates",
  publisher: "Tejas Dangle & Associates",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // Open Graph (Facebook, WhatsApp, LinkedIn previews)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Tejas Dangle & Associates",
    title: "Tejas Dangle & Associates | Chartered Accountants",
    description:
      "Expert CA services in Accounting, Audit, Taxation, Advisory & Financing. Precision. Integrity. Growth.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`, // Add a 1200x630 image to /public later
        width: 1200,
        height: 630,
        alt: "Tejas Dangle & Associates – Chartered Accountants",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Tejas Dangle & Associates | Chartered Accountants",
    description:
      "Expert CA services in Accounting, Audit, Taxation, Advisory & Financing. Precision. Integrity. Growth.",
    images: [`${BASE_URL}/og-image.png`],
  },
  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },
  // Local Business verification (update once domain/GMB is live)
  category: "Financial Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-brand-slate text-brand-navy relative`}>
        {children}
        
        {/* Sticky WhatsApp Button */}
        <a
          href="https://wa.me/917030535953"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="group-hover:scale-110 transition-transform"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
