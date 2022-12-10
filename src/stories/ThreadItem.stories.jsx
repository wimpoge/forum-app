import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ThreadItem from '../components/ThreadsList/ThreadItem/ThreadItem'
import store from '../store'

export default {
  title: 'Thread Item',
  component: ThreadItem
}

const TemplateStory = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThreadItem {...args} />
    </BrowserRouter>
  </Provider>
)

export const ThreadItemCard = TemplateStory.bind({})
ThreadItemCard.args = {
  id: 'thread-1',
  title: 'Lorem Ipsum',
  body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus doloribus 
  repudiandae maxime adipisci quibusdam hic consequuntur, quae quia laboriosam magni quis 
  explicabo eius neque facere animi provident non vero ipsa vitae ad earum fugiat ea. 
  Laborum ipsa qui praesentium explicabo placeat ab, eum at, voluptatum minus 
  deserunt dignissimos! Blanditiis?`,
  category: 'test',
  totalComments: 0,
  user: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://ui-avatars.com/api/?name=jhondoe&background=random'
  }
}
