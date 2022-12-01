import { postedAt } from '../../utils'
import { ItemProfileSub } from '../ThreadsList/ThreadItem/ThreadItem.styled'
import { ItemBodyComment, ItemContainerComment } from './Comment.styles'

/* eslint-disable react/react-in-jsx-scope */
function Comments (threadDetail) {
  return (
    <>
      {threadDetail.comments.map((comment) => (
        <ItemContainerComment key={comment.id}>
          <ItemProfileSub>
            <img src={comment.owner.avatar} />
            <p>{comment.owner.name}</p>
          </ItemProfileSub>
          <ItemBodyComment>
            {comment.content}<br /><br />
            {postedAt(comment.createdAt)}
          </ItemBodyComment>
        </ItemContainerComment>
      ))}
    </>
  )
}

export default Comments
