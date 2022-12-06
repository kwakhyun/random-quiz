import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ handleClick, className, children }) => {
  return (
    <StyledButton className={className} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: ${({ className }) => (className !== 'next-button' ? '60px' : '40px')};
  display: ${({ className }) => (className !== 'next-button' ? '' : 'block')};
  margin: ${({ className }) => (className !== 'next-button' ? '' : '0 auto')};
  font-size: ${({ className }) => (className !== 'next-button' ? '20px' : '18px')};
  font-weight: 700;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
