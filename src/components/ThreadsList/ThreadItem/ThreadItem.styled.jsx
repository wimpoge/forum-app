import styled from 'styled-components'

export const ItemContainer = styled.div`
margin: 10%;
border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;
`
export const ItemTitle = styled.h1`
padding: 5px;

    :hover {
        cursor: pointer;
        text-decoration: underline
    }
`
export const ItemTitleDetail = styled.h1`
padding: 5px;

`
export const ItemBody = styled.div`
text-align: center

`
export const ItemCreatedAt = styled.div`
text-align: right;
margin-right: 10px;
font-size: 12px

`
export const ItemComment = styled.div`
text-align: right;
margin-right: 10px;
font-size: 12px

`
export const ItemOwner = styled.p`
padding: 5px

`
export const ItemName = styled.div`
padding: 5px;
font-weight: bold

`
export const ItemProfile = styled.div`
display: flex;
padding: 5px

`
export const ItemProfileSub = styled.div`
display: grid;
padding: 5px

`
export const ItemButton = styled.button`
margin: 10px;
border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;

  :hover {
    background-color: #3f543e;
    color: white;
    box-shadow: 5px 10px #ace0ab;

  }

`
