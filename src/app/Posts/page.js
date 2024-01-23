import Link from "next/link";
import {sql} from "@vercel/postgres"
export default async function PostsLinks() {
  const posts = await sql`SELECT * FROM posts`;
  return (
  <>
  <h1>Posts</h1>
  {posts.map((posts)=>{
    return(
      <div key={posts.id}>
        <Link href={`/posts${posts.id}`}>{posts.title}, {posts.username}</Link>
      </div>)})};
  </>
  );}