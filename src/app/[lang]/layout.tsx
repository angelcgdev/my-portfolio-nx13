import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import styles from "./layout.module.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import { Locale, i18n } from "./i18n-config";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
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
          <div className={styles["gradient-circle"]}></div>
          <header className="sticky top-[-29px] z-10">
            <div className="flex justify-center hover:underline py-1 text-sm bg-white transition-all duration-200 dark:bg-black border-borderc border-b border-dotted">
              <LocaleSwitcher />
            </div>
            <NavBar className="sticky top-0 z-10" />
            <div className="h-[2px] bg-borderc transition-all duration-200" />
          </header>
          {children}
          <Footer dictionary={dictionary} />
          <div className={styles["gradient-circle-button"]}></div>
        </Providers>
      </body>
    </html>
  );
}
