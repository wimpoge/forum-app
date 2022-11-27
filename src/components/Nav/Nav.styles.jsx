import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: grey;

    h1 {
        color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin-left: 10px;
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 1.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 22% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
    }
`
export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const NavLink = styled(Link)`
    color: black;
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
`
export const Button = styled.button`
  border: 1px solid black;
  padding: 10px;
  height: 100%;

  :hover {
    background-color: black;
    color: white;
    cursor: pointer
  }
`
