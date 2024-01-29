
import {sql} from "@vercel/postgres"
import SaveCommentButton from "./components/saveCommentButton";
export async function generateMetadata({params}){
    const postA = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
    return {
        title: `Post ${params.id} | RC-Portfolio`,
        description: `${postA.content} | RC-Portfolio`}}

export default async function SelectedPost({params}) {
    const post = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
    const comments=await sql`SELECT * FROM comments WHERE postId = ${params.id}`;
    async function handleAddComment(formData){
        "use server";
        const comUsername=formData.get("comUsername");
        const comContent=formData.get("comContent");
        await sql`INSERT INTO comments (username, postId, content) VALUES (${comUsername},${params.id},${comContent})`;;
    }
    return (
    <>
    {post.rows.map((mappedPost)=>{
    return(
    <div key={mappedPost.id}>
    <h1>{mappedPost.title}</h1>
    <h3>{mappedPost.username}</h3>
    <p>{mappedPost.content}</p>
    </div>)})};
    {comments.rows.map((mappedComments)=>{
    return(
    <div key={mappedComments.postId}>
    <h4>{mappedComments.username}</h4>
    <p>{mappedComments.content}</p>
    </div>)})};
    <div>
        <h3>Add Comment</h3>
        <form action={handleAddComment}>
        <label htmlFor="comUsername">Username</label>
        <input name="comUsername" id="comUsername" placeholder="Username" />

        <label htmlFor="comContent">Content</label>
        <input name="comContent" id="comContent" placeholder="Content" />
        <SaveCommentButton />
        </form>

    </div>
    </>
    );}