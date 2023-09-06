import "./globals.css";

// Fonts
import { Vazirmatn } from "next/font/google";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
  title: "کاروگیمز رول پلی",
  description: "سرور ام تی ای رول پلی ایرانی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
