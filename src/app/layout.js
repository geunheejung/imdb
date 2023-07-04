import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// SEO에 도움이 된다. 아울러 페이지별로 metaData를 다르게 설정해줄 수 있다.
export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*  Header  */}
        <Header />
        {/* Navbar */}

        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
