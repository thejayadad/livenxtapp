import prisma from "@/lib/prisma";
import { Suspense } from "react";
import createPost from "@/lib/action/create-post";

export default function HomePage(){
  return (
    <div>
     <div className="px-4 py-2">
       <h1>All Posts</h1>
     <Suspense fallback={'loading....'}>
        <PostList />
     </Suspense>
     <div className="mt-4">
      <h1>Create Post</h1>
      <form action={createPost} className="flex flex-col space-y-2">
        <input className="input input-sm"
        placeholder="title..."
        id="title" name="title" />
        <button type="submit" className="btn btn-sm">Add Post</button>
      </form>
     </div>
     </div>
    </div>
  )
}
async function PostList(){
  
  const posts = await prisma.post.findMany();
  if(posts.length === 0){
    return (
      <div className="text-ceter">
        <p className="mt-1 text-sm text-gray-500">No Posts created</p>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      {posts.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  )
}