/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { ItemButton } from '../ThreadsList/ThreadItem/ThreadItem.styled'

/* eslint-disable react/react-in-jsx-scope */
function Categories ({ categoriesList }) {
  return (
    <div>
      {categoriesList.map((category) => (
            <ItemButton key={category}>{category}</ItemButton>
      ))
       }
    </div>
  )
}
export default Categories
