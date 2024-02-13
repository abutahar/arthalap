export const metadata = {
  title: "Arthalap",
  description: "Arthalap Economic Journal BD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="md:w-10/12  m-0 p-0 h-[100vh]">{children}</body>
    </html>
  );
}
