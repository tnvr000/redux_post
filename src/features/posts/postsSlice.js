import  { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {id: 1, title: 'Learning Redux toolkit', content: "I've heard good things."},
  {id: 1, title: 'Slices...', content: "The more I say slice, the more I want pizza."},
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          }
        };
      },
    },
  }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer
