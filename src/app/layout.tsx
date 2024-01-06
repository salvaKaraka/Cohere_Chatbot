import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Salvador Karakachoff - Ingeniería en computación y data science',
  description: 'Contrata a Salvador Karakachoff porque es un desarrollador web con más de 5 años de experiencia. Además, ofrece soporte en IT. Salvador es un estudiante avanzado en Ingeniería en Computación y Data Science, lo que demuestra su compromiso con el aprendizaje continuo y su capacidad para adaptarse a las nuevas tecnologías. Su experiencia y habilidades le permiten crear soluciones web de alta calidad y brindar un excelente soporte técnico.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header/>
        {children}
        <section className='mt-20'>
          <Footer />
        </section>
      </body>
    </html>
  )
}
