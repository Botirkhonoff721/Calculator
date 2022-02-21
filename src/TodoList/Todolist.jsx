import {
  Container,
  Input,
  Title,
  Button,
  Wrapper,
  Wrapperxon,
  Deletebutton,
} from "./style";
import React, { useState } from "react";
const Todolist = () => {
  const [count, setCount] = useState([]);
  const [change, setChange] = useState("");
  const [color, setColor] = useState(false);

  const onChange = (e) => {
    const product = {
      id: count.length + 2,
      name: e.target.value,
    };
    setChange(product);
  };
  const onAdd = () => {
    if (change.name.length > 0) {
      setCount([...count, change], " ");
    } else {
      alert("pls fill the input");
    }
  };
  const onClick = (id) => {
    let res = count.filter((value) => value.id !== id);
    setCount(res);
  };
  const colorChange=()=>{
      setColor(!color)
  }
  return (
    <Container>
      <Title>TODOS: {count.length}</Title>
      <Wrapper>
        <Input onChange={onChange} placeholder="name" />
        <Button onClick={onAdd}>ADD</Button>
      </Wrapper>
      {count.map(({ id, name }) => (
        <Wrapperxon onClick={colorChange} color={color} key={id}>
          <Title color="true">{name} </Title>
          <Deletebutton onClick={() => onClick(id)}>DELETE</Deletebutton>
        </Wrapperxon>
      ))}
    </Container>
  );
};
export default Todolist;
