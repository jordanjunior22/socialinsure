import './globals.css'

export const metadata = {
  title: 'Social Insure',
  description: 'A web and mobile platform to social insure the live and dreams of those you love and care about.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
