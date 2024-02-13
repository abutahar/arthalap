import global from './globals.css'
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";

export default function Home() {
  
  return (
    <html>
      <head>
        <title>Arthalap</title>
      </head>
      <body>
        <Header></Header>
        <div className="flex">
          <div className="bg bg-green-100 h-full">
          <Navbar></Navbar>
          </div>
          <div className="bg-red-200">

          <Sidebar></Sidebar>
          </div>
        </div>
        <Footer></Footer>

      </body>
    </html>
  );
}