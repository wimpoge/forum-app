import styled from 'styled-components'

export const ItemContainer = styled.div`
    margin: 10%;
    border: 1px solid;
    padding: 10%;
    box-shadow: 5px 10px #888888;
    background-color: #546867;
    

  p {
    text-align: center;
    padding: 2%;
    width: 95%;
    margin: 2%;
}

    button {
        border: none;
        border-bottom: 1px solid grey;
        text-align: center;
        margin: 2%;
        padding: 2%;
        width: 99%;

        :hover {
            cursor: pointer;
        }
    } 

`

export const Input = styled.input`
    color: black;
    font-size: 18px;
    padding: 2%;
    display: flex;
    text-align: center;
    width: 95%;
    border: none;
    border-bottom: 1px solid grey;
    margin: 2%;

`
