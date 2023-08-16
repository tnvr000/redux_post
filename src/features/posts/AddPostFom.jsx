import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostFom = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavedPostClicked = () => {
    if(title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle('');
      setContent('');
    }
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <div>
          <label htmlFor="postTitle">Post Title:</label>
          <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
        </div>
        <div>
          <label htmlFor="postAuthor">Author:</label>
          <select type="text" id="postAuthor" name="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div>
          <label htmlFor="postContent">Content:</label>
          <input type="text" id="postContent" name="postContent" value={content} onChange={onContentChanged} />
        </div>
        <button type="button" onClick={onSavedPostClicked} disabled={!canSave}>Save Post</button>
      </form>
    </section>
  )
}

export default AddPostFom;