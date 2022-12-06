import React from 'react';
import styled from '@emotion/styled';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const Radio: React.FC<RadioButtonProps> = ({ id, name, value, checked, handleChange, className }) => {
  return (
    <StyledRadio className="quiz-label">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        // 한 번 선택하면 답안지를 보여주기 때문에 conditional
        onChange={handleChange}
      />
      <span className={className} dangerouslySetInnerHTML={{ __html: `${value}` }} />
    </StyledRadio>
  );
};

export default Radio;

const StyledRadio = styled.label`
  display: flex;
  align-items: center;

  input[type='radio'] {
    height: 1rem;
    width: 1rem;
    appearance: none;
    -webkit-appearance: none;
    border: 0.2rem solid #fff;
    background-color: ${({ theme }) => theme.colors.green[100]};
    border-radius: 50%;

    outline: 1px solid ${({ theme }) => theme.colors.gray};

    &:hover {
      outline-color: ${({ theme }) => theme.colors.black};
    }

    &:checked {
      outline-color: ${({ theme }) => theme.colors.green[500]};
      background-color: ${({ theme }) => theme.colors.green[500]};

      animation: outline-checked;
      animation-duration: 0.1s;
      animation-iteration-count: 4;
      animation-direction: alternate;
      animation-timing-function: linear;
    }

    @keyframes outline-hovered {
      0% {
        outline-offset: 0;
      }

      100% {
        outline-offset: -0.1rem;
      }
    }

    @keyframes outline-checked {
      0% {
        outline-offset: 0;
      }

      100% {
        outline-offset: -0.2rem;
      }
    }
  }

  span {
    margin-left: 0.75rem;
  }

  .correct {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green[500]};
  }

  .real-answer {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.red[400]};
  }
`;
