export const metadata = {
  title: 'RC-Portfolio',
  description: 'Junior Developer Portfolio Website',
}
import Link from "next/link";

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <nav>

      </nav>
      <body>{children}</body>
    </html>
  )
}
