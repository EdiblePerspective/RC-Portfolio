
import {sql} from "@vercel/postgres"
export async function generateMetadata({params}){
    const postA = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
    return {
        title: `Post ${params.id} | RC-Portfolio`,
        description: `${postA.content} | RC-Portfolio`}}

export default async function SelectedPost({params}) {
    const post = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
    return (
    <>
    {post.rows.map((mappedPost)=>{
    return(
    <div key={mappedPost.id}>
    <h1>{mappedPost.title}</h1>
    <h3>{mappedPost.username}</h3>
    <p>{mappedPost.content}</p>
    </div>)})};
    </>
    );}