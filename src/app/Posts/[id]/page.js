
import {sql} from "@vercel/postgres"
export async function generateMetadata(){
    const post = await sql(`SELECT * FROM posts WHERE id = $1`,[id]);
    return {
        title: `${post.title} | RC-Portfolio`,
        description: `${post.body} | RC-Portfolio`}}

export default async function SelectedPost() {
    const post = await sql(`SELECT * FROM posts WHERE id = $1`,[id]);
    return (
    <>
    <h1>{post.title}</h1>
    <h3>{post.username}</h3>
    <p>{post.body}</p>
    </>
    );}