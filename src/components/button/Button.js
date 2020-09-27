import styled from "styled-components";

const Button = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.4px;
  font-size: 1.5rem;
  padding: 0 3.5rem 0 3.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: rgba(51, 51, 51, 0.918);
  }
`;

export default Button;
