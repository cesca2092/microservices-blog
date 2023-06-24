import axios from "axios";
import { useState } from "react";

export const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://posts.com:4001/posts/${postId}/comments`, {
        content
      });

      setContent('');
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Comment</label>
          <input
            className='form-control'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}