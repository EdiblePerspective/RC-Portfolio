import Link from "next/link";
import {sql} from "@vercel/postgres";
import { revalidatePath } from "next/cache";
export const metadata = {
  title: 'Posts | RC-Portfolio',
  description: 'Posts',
}

export default async function PostsLinks() {
  revalidatePath("/Posts");
  const posts = await sql`SELECT * FROM posts`;
  return (
  <>
  
  <h1>Posts</h1>
  <Link href="/Posts/Add-Post">Add a Post</Link>
  {posts.rows.map((post)=>{
    return(
      <div key={post.id} className="post">
        <Link href={`/Posts/${post.id}`}>{post.title}, {post.username}</Link>
      </div>)})};
  
  </>
  );}