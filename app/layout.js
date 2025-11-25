import "./globals.css";
import { Amaranth, Poppins } from "next/font/google";
import { LanguageProvider } from "./components/LanguageProvider";
import LanguageSwitcher from "./components/LanguageSwitcher";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
  display: "swap",
});

const amaranth = Amaranth({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-amaranth",
  display: "swap",
});

export const metadata = {
  title: "Vreta Elinstallationer AB",
  description: "Vreta Elinstallationer AB",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${amaranth.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>
          {children}
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}
