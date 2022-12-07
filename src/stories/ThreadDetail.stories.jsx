/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ThreadDetail from '../components/ThreadsList/ThreadDetail/ThreadDetail'
import store from '../store'

const story = {
  title: 'Thread Detail',
  component: ThreadDetail
}

export default story

const TemplateStory = (args) => (
      <Provider store={store}>
      <BrowserRouter>
        <ThreadDetail {...args} />
      </BrowserRouter>
    </Provider>
)
const ThreadDetails = TemplateStory.bind({})
ThreadDetails.args = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg'
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: []
    }
  ]
}

export {
  ThreadDetails
}
