import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Bevarc",
  description:
    "Book professional construction services with ease! We specialize in architecture design, interior work, building construction, renovation, modeling, and home painting. Reliable, expert solutions tailored to your needs. Schedule today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased relative z-10`}>
        <div className="fixed w-full bottom-0 left-0 col-span-2 h-full overflow-hidden -z-10 bg-[url('/grid.svg')] bg-contain bg-bottom">
          <div className="relative w-full h-full bg-gradient-to-b from-background to-transparent" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
