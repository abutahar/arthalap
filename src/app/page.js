import MainArea from "./home/MainArea";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import globals from "./globals.css";

export default function Home() {
  return (
    <html>
      <head>
        <title>Arthalap</title>
      </head>
      <body>
        {/* here is three section in this layout */}

        {/* header section */}
        <header className="w-full">
          <Header></Header>
        </header>

        {/* main section */}
        <MainArea></MainArea>

        {/* Footer section */}
        <footer className="w-full bg-green-400">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
