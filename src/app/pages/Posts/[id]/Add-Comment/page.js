import SaveCommentButton from "./components/saveCommentButton";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function addComment({params}){
async function handleAddComment(formData){
    "use server";
    const comUsername=formData.get("comUsername");
    const comContent=formData.get("comContent");
    await sql`INSERT INTO comments (username, postId, content) VALUES (${comUsername},${params.id},${comContent})`;;
    revalidatePath(`pages/Posts/${params.id}`);
}
return(
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
)}