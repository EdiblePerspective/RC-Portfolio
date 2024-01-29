export const metadata = {
  title: 'RC-Portfolio',
  description: 'Junior Developer Portfolio Website',
}
import Link from "next/link"

import './globals.css'
export default function RootLayout({ children }) {
return (
<html lang="en">
  <body>

    <nav>
      <Link href="/">Home</Link>
        <Link href="/pages/Posts">Posts</Link>
        <Link href="/pages/About">About</Link>
        <Link href="/pages/Games">Games</Link>
    </nav>
    {children}
  </body>
</html>)}
