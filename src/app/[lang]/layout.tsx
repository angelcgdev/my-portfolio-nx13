import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import { Locale, i18n } from "./i18n-config";
import { getDictionary } from "./dictionaries";
import { Providers } from "@/components/Providers";
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata = {
  title: {
    absolute: "Luis Caro",
    template: "%s | Luis Caro",
  },
  description: "my personal web site built by Next.js",
  keywords: [
    "ui",
    "frontend",
    "developer",
    "react",
    "flutter",
    "nextjs",
    "javascript",
    "typescript",
    "programmer",
    "luis caro",
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = await getDictionary(params.lang as Locale);
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${poppins.className} relative`}>
        <Providers>
          <header className="sticky top-0 z-10">
            <NavBar className="sticky top-0 z-10 border-b-2 border-borderc" />
          </header>
          {children}
          <Footer dictionary={dictionary} />
        </Providers>
      </body>
    </html>
  );
}
