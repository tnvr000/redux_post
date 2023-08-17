import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import PropTypes from 'prop-types';

const reactionEmoji = {
  thumbsUp: 'T',
  wow: 'W',
  heart: 'H',
  rocket: 'R',
  coffee: 'C',
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="reactionButton" onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}>
        {emoji} {post.reactions[name]}
      </button>
    )
  })
  return (
    <div>{reactionButtons}</div>
  )
}

ReactionButtons.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    reactions: PropTypes.shape({
      thumbsUp: PropTypes.number,
      wow: PropTypes.number,
      heart: PropTypes.number,
      rocket: PropTypes.number,
      coffee: PropTypes.number,
    })
  })
}

export default ReactionButtons