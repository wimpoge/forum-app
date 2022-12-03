/* eslint-disable react/prop-types */

import ThreadItem from './ThreadItem/ThreadItem'

/* eslint-disable react/react-in-jsx-scope */
function ThreadsList ({ threads }) {
  return (
        <div>
           {threads.map((thread) => (
            <ThreadItem key={thread.id} {...thread}/>
           ))}
        </div>
  )
}

export default ThreadsList
