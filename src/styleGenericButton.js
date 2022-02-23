import styled from "styled-components";

export const Container = styled.button`
  display: block;
  width: ${({ width }) => (width ? `${width}px` : "100px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  color: ${({ color }) => (color ? `${color}` : "white")};
  border: ${({ border }) => (border ? `${border}` : "2px solid gray")};
  background-color: ${({ bgc }) => (bgc ? `${bgc}` : "white")};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  border-radius: ${({brs})=> brs ? `${brs}px` : '5px' };
  cursor: pointer;
`;
