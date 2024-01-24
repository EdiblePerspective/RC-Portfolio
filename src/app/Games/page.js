export const metadata = {
    title: 'Games | RC-Portfolio',
    description: 'Games I created!',}
import Link from "next/link"
export default function Games(){
    return(
        <>
        <div>
        <h2>Games</h2>
        <div><Link href="/Games/Weird-Chess">Weird Chess</Link></div>
        </div>
        </>
    )
}