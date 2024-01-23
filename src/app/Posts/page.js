import Link from "next/link";
import {sql} from "@vercel/postgres"
export default async function PostsLinks({searchParams}) {
  const response= await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts=await response.json();
  
  if(searchParams.user){
    posts=posts.filter((post)=>post.userID==searchParams.user);
  }
  if(searchParams.sort){
    posts.reverse();
  }
  return (
  <>
  <h1>Posts</h1>
  {posts.map((post)=>{
    return(
      <div key={post.id}>
        <Link href={`/posts${post.id}`}>{post.title}</Link>
      </div>)})};
  </>
  );}