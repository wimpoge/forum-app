import styled from 'styled-components'

export const ItemContainer = styled.form`
text-align: center;
padding: 10px;
margin: 20% 5%;
`
export const ContainerInput = styled.div`
  padding: 10px;
  margin: 10px;
`
export const Input = styled.input`
box-shadow: 5px 10px #888888;
margin: 2% auto;
width: 50%;
text-align: center;
display: flex;
padding: 20px;
`
export const InputTextArea = styled.textarea`
box-shadow: 5px 10px #888888;
margin: auto;
width: 50%;
text-align: center;
display: flex;
padding: 20px;
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
