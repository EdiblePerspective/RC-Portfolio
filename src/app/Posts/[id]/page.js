import Link from "next/link";
import {sql} from "@vercel/postgres"
export async function generateMetadata({params}){
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json();
    return {
        title: `${post.title} | RC-Portfolio`,
        description: `${post.body} | RC-Portfolio`,};}

export default async function SelectedPost({params}) {
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post=await response.json();
    
    return (
    <>
    <h1>Post</h1>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    </>
    );}