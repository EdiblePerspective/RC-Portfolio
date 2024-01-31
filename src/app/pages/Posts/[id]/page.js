
import {sql} from "@vercel/postgres"
import Link from "next/link";
export async function generateMetadata({params}){
    const postA = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
    return {
        title: `Post ${params.id} | RC-Portfolio`,
        description: `${postA.content} | RC-Portfolio`}}

export default async function SelectedPost({params}) {
    const post = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
    const comments=await sql`SELECT * FROM comments WHERE postId = ${params.id}`;
    return (
    <>
    {post.rows.map((mappedPost)=>{
    return(
    <div key={mappedPost.id}>
    <h1>{mappedPost.title}</h1>
    <h3>{mappedPost.username}</h3>
    <p>{mappedPost.content}</p>
    <Link href={`/Posts/${mappedPost.id}/Add-Comment`}>Add a Comment</Link>
    </div>)})};
    
    {comments.rows.map((mappedComments)=>{
    return(
    <div key={mappedComments.postId}>
    <h4>{mappedComments.username}</h4>
    <p>{mappedComments.content}</p>
    </div>)})};

    </>
    );}