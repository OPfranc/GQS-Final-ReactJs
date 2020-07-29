import styled from 'styled-components'


export const Container = styled.div`

margin: 25px;
border-radius: 8px;
padding: 25px;
width: 350px;
height: 320px;
background-color: #F5F4F6;
border: 1px solid #ffffff;


input{
    width: 100%;
    height: 35px;
    border: 0px;
    padding: 0 13px;
    margin-top: 19px;
}
h2{
    color: #141216;
    justify-self: auto;

}
p{
    margin: 3px;
    position: absolute;
    color: red;
    font-size: 14px;
}

box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
          0 4px 2px rgba(0,0,0,0.09), 
          0 8px 4px rgba(0,0,0,0.09), 
          0 16px 8px rgba(0,0,0,0.09),
          0 32px 16px rgba(0,0,0,0.09);
`
export const Button = styled.button`

    margin-top: 12px;
    background-color: #1F1C22;
    color: #F5F4F6;
    border: transparent;
    border-radius: 8px;
    height: 35px;
    min-width: 100%;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;

`