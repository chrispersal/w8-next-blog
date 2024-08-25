import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json;

  return (
    <div class="h-screen w-screen flex justify-center items-center">
      <h2>Post-posts</h2>
      <div className="posts">
        {posts.map(function (post) {
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
