import React, { useState } from 'react';
import axios from 'axios';

export const PostCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('http://posts.com/posts/create', {
        title
      });
      setTitle('');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            className='form-control'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}
