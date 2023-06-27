import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CommentCreate } from './CommentCreate';
import { CommentList } from './CommentList';

export const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://posts.com/posts');
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  const renderedPosts = Object.values(posts).map(post => (
    <div
      className='card'
      style={{ width: '30%', marginBottom: '20px' }}
      key={post.id}
    >
      <div className='card-body'>
        <h3>{post.title}</h3>
        <CommentList
          comments={post.comments}
        />
        <CommentCreate
          postId={post.id}
        />
      </div>
    </div>
  ));

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  )
}
