import { useRouter } from "next/router";
import { useState } from "react";

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    router.push('/');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-10">Create New Post</h1>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="mb-5">
          <label className="block text-xl font-bold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-5">
          <label className="block text-xl font-bold">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Create Post
        </button>
      </form>
    </div>
  );
}
