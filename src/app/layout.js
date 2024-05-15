import './globals.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'Priya Jewellers',
  description: 'Created by Aryan Gupta',
}

export default function RootLayout({ children }) {
  return (
    <html className='light' lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
