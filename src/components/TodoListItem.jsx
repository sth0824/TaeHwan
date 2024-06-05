import styled, { css } from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItemBox = styled.div`
  display: flex;
  align-items: center; 
  padding: 1rem;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  .checkbox {
    display: flex;
    flex: 1;
    align-items: center;
    cursor: pointer;
    svg {
      
      font-size: 1.5rem;
    }
    .text {
      flex: 1; 
      margin-left: 0.5rem;
    }

    ${(props) =>
      props.checked &&
      css`
        svg {
          color: #22b8cf;
        }
        .text {
          color: #adb5bd;
          text-decoration: line-through;
        }
      `};
  }
  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }

 
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

export default function TodoListItem() {
  return (
    <TodoListItemBox checked={false}>
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </TodoListItemBox>
  );
}