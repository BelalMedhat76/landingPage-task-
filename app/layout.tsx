// app/layout.tsx
"use client"
// app/layout.tsx
import './globals.css'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Import the initialized i18n instance
import Navbar from "./components/Navbar";
import Footer from './components/footer'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">

        <body> 
          <Navbar/>
        {children}
        <Footer/>
        </body>
   
      </html>
    </I18nextProvider>
  );
}
