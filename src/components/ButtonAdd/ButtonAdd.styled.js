import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  min-width: 193px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: 8px;
  background: #7b61ff;

  border: transparent;

  color: #fff;
  font-size: 16px;
  font-weight: 500;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  &:hover,
  &:focus {
    background: #6243ff;
  }
`;
