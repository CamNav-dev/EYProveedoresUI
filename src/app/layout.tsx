import './globals.css'
import Navbar from '@/pages/Landing/Landing/Navbar';
import Footer from '@/pages/Landing/Landing/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
