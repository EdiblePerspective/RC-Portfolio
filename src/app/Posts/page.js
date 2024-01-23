import Link from "next/link";
import {sql} from "@vercel/postgres"
export default async function PostsLinks() {
  const posts = await sql`SELECT * FROM posts`;
  return (
  <>
  <h1>Posts</h1>
  {posts.rows.map((post)=>{
    return(
      <div key={post.id}>
        <Link href={`/posts${post.id}`}>{post.title}, {post.username}</Link>
      </div>)})};
  </>
  );}