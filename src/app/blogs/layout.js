import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <div>
          <Header></Header>
        </div>
        <div className="w-screen px-4 lg:w-10/12 mx-auto ">{children}</div>
        <div className="mt-auto">
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
