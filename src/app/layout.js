export const metadata = {
  title: 'RC-Portfolio',
  description: 'Junior Developer Portfolio Website',
}
import Link from "next/link"
import styles from "globals.css"
import {sql} from "@vercel/postgres"
export default function RootLayout({ children }) {
return (
<html lang="en">
  <body>
    <nav>
      <Link href="/">Home</Link>
        <Link href="/Posts">Posts</Link>
        <Link href="/About">About</Link>
        <Link href="/Weird-Chess">Weird Chess</Link>
    </nav>
    {children}
  </body>
</html>)}
