
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 350px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 350px;
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  bottom: 20px;
  font-size: 14px;
`;

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Nav>
          <NavItem>뉴스</NavItem>
          <NavItem>교과서</NavItem>
        </Nav>
        <SearchBar>
          <SearchInput type="text" placeholder="Search..." />
        </SearchBar>
      </Header>
      <Main>
        <Title>회원가입</Title>
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호 재입력"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>회원가입</Button>
      </Main>
      <Footer>
        <div>이용약관</div>
        <div>개인정보처리방침</div>
        <div>고객센터</div>
        <div>사업자 정보확인</div>
      </Footer>
    </Container>
  );
};

export default SignUpPage;
