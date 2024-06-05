import styled from "styled-components";

const TodoTemplateBox = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
  
  .app-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background: #22b8cf; 
    color: white;
    font-size: 1.5rem;
  }
  
  .content {
    background: white;
  }

  .signup-link {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
    a {
      color: #22b8cf;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function TodoTemplate({ children }) {
  return (
    <TodoTemplateBox>
      <div className="app-title">일정 관리</div>
      <div className="signup-link">
        <a href="/signup">회원가입</a>
      </div>
      <div className="content">{children}</div>
    </TodoTemplateBox>
  );
}
