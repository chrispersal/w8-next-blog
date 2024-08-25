export default async function SinglePost({ params }) {
  const response = await fetch(
    `https://jsonplaceholer.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return (
    <div class="h-screen w-screen flex justify-center items-center">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <footer>{post.id}</footer>
    </div>
  );
}
