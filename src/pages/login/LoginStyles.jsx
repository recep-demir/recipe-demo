import styled from "styled-components";

export const LoginContainer = styled.div`
  background: linear-gradient(to right, #1e3c72, #2a5298);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 400px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  outline: none;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  
  &::placeholder {
    color: white;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 8px;
  background: #ff9800;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #e68900;
  }
`;

export const StyledImg = styled.img`
  width: 100px;
  margin-bottom: 1rem;
`;
