import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #005646;
  padding: 20px;
  width: 40vw;
  height: 70vh;
  margin: auto;
  margin-top: 50px;
  background-color: aliceblue;
  overflow-x: hidden;

`;
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  
  /* border: ${({color})=> color === 'true' && '1px solid black'}; */
`;
export const Input = styled.input`
  width: 80%;
  height: 30px;
  font-size: 25px;
  display: inline;
`;
export const Button = styled.button`
width: 20%;
  height: 35px;
  display: inline;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const Wrapperxon = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items:center;
   flex-wrap: nowrap;
   margin-top: 5px;
   background-color: ${({color})=> color === false? 'coral': 'lightgreen'};
`;
export const Deletebutton = styled.button`
   width: 20%;
   height: 35px;
   background-color: red;
   border: none;
   outline: none;
   color: #fff;
   border-radius: 5px;
`;
