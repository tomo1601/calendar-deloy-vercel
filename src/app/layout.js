import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import ThemeSwitcher from "./ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-custom-blue-light`}>
          <Providers>
            {/* <ThemeSwitcher/> */}
            {children}
          </Providers>
      </body>
    </html>
  );
}