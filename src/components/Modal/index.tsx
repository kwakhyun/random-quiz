import React from 'react';
import styled from '@emotion/styled';

interface ModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ opened, children, setOpened }) => {
  return (
    <>
      {opened && (
        <StyledModal onClick={() => setOpened(false)}>
          <div id="modal" className="modal-content" onClick={() => setOpened(false)}>
            {children}
          </div>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .modal-content {
    background-color: ${({ theme }) => theme.colors.white};
    width: 60%;
    height: 100%;
    border-radius: 8px;
    padding: 2rem;
    margin-top: 2rem;
    overflow-y: auto;
  }
`;
