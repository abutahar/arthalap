import global from "./globals.css";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";

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
        <main>
          <div className="md:grid grid-cols-8 bg-slate-600">
            <div className="hidden md:block col-span-2 bg-slate-200">
              <Sidebar></Sidebar>
            </div>
            <div className="grid col-span-4 bg-red-400">
              {/* here is content area in pc */}
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                rem!
              </p>
            </div>
            <div className="col-span-2 bg-slate-200">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, aperiam.
              </p>
            </div>
          </div>
        </main>

        {/* Footer section */}
        <footer className="w-full bg-green-400">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
