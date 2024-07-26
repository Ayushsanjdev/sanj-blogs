'use client';
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  console.log(posts)

  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-10">My blogs</h1>
      <section>
        {posts.map(({ id, title, content }) => (
          <div key={id}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
