import "./globals.css";
import Header from "./Components/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{marginTop:"80px"}}>
          <Header/>
        </div>
        {children}
      </body>      
    </html>
  );
}

