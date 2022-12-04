/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { ItemButton } from './Categories.styles'

/* eslint-disable react/react-in-jsx-scope */
function Categories ({ categoriesList, changeCategoryHandler }) {
  return (
    <div>
      {categoriesList.map((category) => (
            <ItemButton key={category} onClick={() => { changeCategoryHandler(category) }}>#{category}</ItemButton>
      ))
       }
    </div>
  )
}
export default Categories
