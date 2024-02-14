import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
