import { Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "Tatielly Pereira — Automação Comercial e Residencial",
  description:
    "Mais tecnologia, mais conforto, mais segurança, mais para você. Soluções inteligentes de automação comercial e residencial que transformam ambientes e facilitam o seu dia a dia.",
  keywords: [
    "automação residencial",
    "automação comercial",
    "casa inteligente",
    "interruptor inteligente",
    "Brasília",
  ],
  openGraph: {
    title: "Tatielly Pereira — Automação Comercial e Residencial",
    description:
      "Soluções inteligentes que transformam ambientes e facilitam o seu dia a dia. Do seu jeito, no seu tempo.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
