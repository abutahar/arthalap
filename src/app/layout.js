import Header from "./shared/Header";

export const metadata = {
  title: "Arthalap",
  description: "Arthalap Economic Journal BD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
