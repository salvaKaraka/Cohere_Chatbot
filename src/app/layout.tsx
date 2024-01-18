import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Chatbot by Salvador Karakachoff',
  description: "A chat-bot trained with personal data. It's thought to be implemented in my personal portfolio. Here is a little demo so you can play around. :D",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden flex flex-col min-h-screen">
        <Header/>
        <section className="flex-1">{children}</section>
        <Footer />
      </body>
    </html>
  )
}
