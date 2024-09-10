import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  createdAt: string;
  content: any; // Adjust based on actual content structure
}

function YourJournals({ userId }: { userId: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/journals?userId=${userId}`);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch journals:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-sm text-gray-500">
            Created on: {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <pre className="mt-2">
            {JSON.stringify(post.content, null, 2)} {/* Displaying content */}
          </pre>
        </div>
      ))}
    </div>
  );
}

export default YourJournals;
