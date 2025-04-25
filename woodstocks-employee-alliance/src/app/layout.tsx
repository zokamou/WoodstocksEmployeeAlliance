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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <body style={{ width: "100vw", height:"100vh", margin: 0 }}>
        <div style={{marginTop:"80px"}}>
          <Header/>
        </div>
        {children}
      </body>      
    </html>
  );
}

