import Header from "./components/Header";

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "App by PhDBui",
  description: "Web development tutorials and courses",
  keywords: "web development, web design, javascript, react, node",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header></Header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
