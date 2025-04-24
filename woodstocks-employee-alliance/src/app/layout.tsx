import "./globals.css";
import Head from 'next/head';
import {Carlito} from 'next/font/google'
import {Damion} from 'next/font/google'
import Header from "./Components/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div style={{marginTop:"80px"}}>
        <Header/>
      </div>
      <body style={{ width: "100vw", height:"100vh", margin: 0 }}>{children}</body>      
    </html>
  );
}

