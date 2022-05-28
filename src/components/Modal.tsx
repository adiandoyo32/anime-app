import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import ReactDOM from "react-dom";

interface ModalInterface {
    children?: React.ReactNode;
    onIsShowModalChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalInterface> = ({ onIsShowModalChange }) => {
    // const closeModal = useCallback(() => {
    //     onIsShowModalChange(false);
    // }, [onIsShowModalChange]);
    const closeModal = () => {
        onIsShowModalChange(false);
    }

    const [collectionName, setCollectionName] = useState("");
    const [isError, setIsError] = useState(false);

    const onChange = (e: any) => {
        console.log(e.target.value);
        setCollectionName(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log("submited");
    };

    const ModalBase = styled.div`
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

    const ModalContainer = styled.div`
        background-color: #fff;
        width: 50%;
        height: 50%;
        border-radius: 0.375rem;
        padding: 2.5rem;
    `;

    const ModalHeader = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const ModalTitle = styled.div`
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 500;
    `;

    const ModalCloseButton = styled.button`
        padding: 0.75rem 1.25rem;
        display: flex;
        algin-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        color: white;
        background: #3b82f6;
        border: 0;
        transition-duration: 200ms;
        &:hover {
            cursor: pointer;
            background: #2563eb;
        }
    `;

    const ModalBody = styled.div``;

    const Form = styled.form`
        margin-top: 1rem;
    `;

    const FormGroup = styled.div`
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
    `;

    const FormLabel = styled.label`
        margin-bottom: 0.5rem;
    `;

    const FormControl = styled.input`
        border: 1px solid #e1e1e1;
        padding: 0.75rem 1.25rem;
        border-radius: 0.375rem;
    `;

    const inputError = css`
        border: 1px solid #f43f5e;
    `;

    const SubmitButton = styled.button`
        padding: 0.75rem 1.25rem;
        display: flex;
        algin-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        color: white;
        background: #3b82f6;
        border: 0;
        transition-duration: 200ms;
        width: 20%;
        &:hover {
            cursor: pointer;
            background: #2563eb;
        }
    `;

    return ReactDOM.createPortal(
        <ModalBase>
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle>Add Collection</ModalTitle>
                    <ModalCloseButton onClick={closeModal}>close</ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <FormLabel htmlFor="#collection-name">Collection Name</FormLabel>
                            <input type="text" value={collectionName} onChange={onChange} />
                            {/* <FormControl
                                id="collection-name"
                                placeholder="E.g Kimetsu No Yaiba"
                                autoComplete="off"
                                // css={isError && inputError}
                                onChange={onChange}
                                value={collectionName}
                                type="text"
                            /> */}
                        </FormGroup>

                        <FormGroup>
                            <SubmitButton type="submit">Submit</SubmitButton>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </ModalContainer>
        </ModalBase>,
        document.body
    );
};

export default Modal;
