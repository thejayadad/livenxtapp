'use server'
import prisma from "../prisma"
import { revalidatePath } from "next/cache"

export default async function createPost(formData: FormData){
    const title = formData.get('title') as string;
    await prisma.post.create({
        data:{
            title
        }
    })
    revalidatePath('/')
}