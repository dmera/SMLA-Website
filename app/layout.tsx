import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PlausibleProvider } from "@/components/plausible-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMLA - Refugios Regenerativos en los Andes",
  description: "Construimos refugios. Regeneramos montañas. Sé dueño de un refugio que protege la vida silvestre y genera un futuro regenerativo.",
  keywords: "refugios, montaña, conservación, copropiedad, Andes, regeneración",
  authors: [{ name: "SMLA" }],
  creator: "SMLA",
  publisher: "SMLA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://example.com",
    siteName: "SMLA",
    title: "SMLA - Refugios Regenerativos en los Andes",
    description: "Construimos refugios. Regeneramos montañas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMLA - Refugios Regenerativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMLA - Refugios Regenerativos en los Andes",
    description: "Construimos refugios. Regeneramos montañas.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://example.com",
    languages: {
      "es-ES": "https://example.com/es",
      "en-US": "https://example.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PlausibleProvider>
            <LocaleProvider>
              <div className="min-h-screen flex flex-col">
                <NavBar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </LocaleProvider>
          </PlausibleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
