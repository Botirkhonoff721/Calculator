import React, { useState } from "react";
import { Container, Title, Input, Wrapper } from "./style";
import GenericButton from "../GenericButton";
const Todolist = () => {
  const [value, setValue] = useState();
  const onClick = () => {};
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <>
      <Title>TodoList</Title>
      <Container>
        <Wrapper>
          <Input onChange={onChange} />
          <GenericButton
            bgc={"red"}
            border
            onClick={onClick}
            ml={"20"}
            width={"60"}
            height={"50"}
          >
            Submit
          </GenericButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default Todolist;
