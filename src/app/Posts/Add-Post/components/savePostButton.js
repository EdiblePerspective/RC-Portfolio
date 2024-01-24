"use client";
import {useFormStatus} from "react-dom";

export default function savePostButton(){
    const {pending} = useFormStatus();
    return(
        <button disabled={pending} className={pending? "disabled":""}>
            {pending ? "Saving Post": "Add Post"}
        </button>);
}