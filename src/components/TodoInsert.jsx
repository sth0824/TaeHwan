import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsertFrom = styled.form`
  display: flex;
  background: #495057;
  input {
    
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    
    flex: 1;
  }

  button {
    
    background: none;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    background: #868e96;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

export default function TodoInsert() {
  return (
    <TodoInsertFrom>
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </TodoInsertFrom>
  );
}