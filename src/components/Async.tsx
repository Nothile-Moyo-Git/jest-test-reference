/**
 * Async function to test unit tests
 */

import { useEffect, useState } from 'react';

const Async = (props : any) => {

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => 
      { 
        return response.json(); 
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );

};

export default Async;