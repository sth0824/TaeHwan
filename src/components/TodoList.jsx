import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListBox = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

export default function TodoList() {
  return (
    <TodoListBox>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListBox>
  );
}