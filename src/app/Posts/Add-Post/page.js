export const metadata = {
    title: 'Add Post | RC-Portfolio',
    description: 'Add new post',
}
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SavePostButton from "./components/savePostButton";
export default function addPost(){
    async function handleAddPost(formData){
        "use server";
        const username=formData.get("username");
        const title=formData.get("title");
        const content=formData.get("content");
        await sql`INSERT INTO posts (username, title, content) VALUES (${username},${title},${content})`;
        revalidatePath("/Posts");
        redirect("/Posts")}
    return(
        <div>
            <h2>Add Post</h2>
            <form action={handleAddPost}>
            <label htmlFor="username">Username</label>
            <input name="username" id="username" placeholder="Username" />
            
            <label htmlFor="title">Name</label>
            <input name="title" id="title" placeholder="Title" />
            
            <label htmlFor="content">Content</label>
            <input name="content" id="content" placeholder="Content" />
            <SavePostButton />
            </form>
            </div>);
}