import React from "react";
import { Container } from "react-bootstrap";
import CreateTodo from "../components/CreateTodo";

const TaskPage = () => {
  return (
    <Container className="pt-3">
      <span className="text-white fs-5">Todo Using Redux</span>
      <CreateTodo />
    </Container>
  );
};

export default TaskPage;
