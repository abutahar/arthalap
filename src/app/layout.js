export const metadata = {
  title: 'Arthalap',
  description: 'Arthalap for IU Eco'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="w-3/4 mx-auto h-[100vh] bg-gray-200">{children}</body>
    </html>
  )
}
