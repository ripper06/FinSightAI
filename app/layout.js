import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets : ['latin']
})

export const metadata = {
  title: "FinSightAI",
  description: "One stop finance management platform.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` ${inter.className}`}>
          {/* HEADER */}
          <Header/>

          <main className="min-h-screen">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p> Made with 💗 by Jyoti Ranjan Dash!</p>
            </div>
          </footer>
        </body>
    </html>
    </ ClerkProvider>
  );
}
