export const metadata = {
  title: 'RC-Portfolio',
  description: 'Junior Developer Portfolio Website',
}
import Link from "next/link"
import  './globals.css'
export default function RootLayout({ children }) {
return (
<html lang="en">
  <body>
    <nav>
      <Link href="/">Home</Link>
        <Link href="/Posts">Posts</Link>
        <Link href="/About">About</Link>
        <Link href="/Games">Games</Link>
    </nav>
    {children}
  </body>
</html>)}
