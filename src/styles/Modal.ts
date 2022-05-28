import styled from "@emotion/styled";

export const ModalBase = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 50;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    width: 50%;
    border-radius: 0.375rem;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e5e5e5;
`;

export const ModalTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    border-top: 1px solid #e5e5e5;
    & > button:first-of-type {
        margin-right: .5rem;
    }
`;
