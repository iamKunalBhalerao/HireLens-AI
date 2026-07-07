import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/providers/smooth-scroll";
import AuthProvider from "@/providers/auth.provider";
import { getServerUser } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HireLens.ai - Unlock Your Hidden Talent",
  description:
    "HireLens.ai connects you with hidden talent through video and audio submissions. Discover, interview, and hire the best candidates effortlessly.",
  keywords: [
    "video interviews",
    "audio submissions",
    "hire talent",
    "recruiting",
    "talent discovery",
    "remote hiring",
    "job applications",
    "candidate screening",
    "workforce management",
    "HR tech",
    "video screening",
  ],
  authors: [{ name: "HireLens.ai Team" }],
  creator: "HireLens.ai",
  publisher: "HireLens.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hirelens.ai",
    title: "HireLens.ai - Unlock Your Hidden Talent",
    description:
      "Discover, interview, and hire the best candidates with video and audio submissions.",
    siteName: "HireLens.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HireLens.ai - Unlock Your Hidden Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HireLens.ai - Unlock Your Hidden Talent",
    description:
      "Discover, interview, and hire the best candidates with video and audio submissions.",
    images: ["/og-image.png"],
    creator: "@HireLensAI",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user = null;
  let serverReachable = false;

  try {
    user = await getServerUser();
    serverReachable = true;
  } catch {
    serverReachable = false;
  }
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider user={user} serverReachable={serverReachable}>
          <SmoothScroll>{children}</SmoothScroll>
        </AuthProvider>
      </body>
    </html>
  );
}
