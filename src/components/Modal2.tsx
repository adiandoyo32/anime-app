import styled from "@emotion/styled";
import React, { useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    show: boolean;
    close: () => void;
    title: string;
    children?: React.ReactNode;
}

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

const Modal2: React.FC<ModalProps> = ({ show, close, title, children }) => {
    const [collectionName, setCollectionName] = useState<string>("");

    if (!show) return null;

    const onChange = (e: any) => {
        console.log(e.target.value);
        setCollectionName(e.target.value);
    };

    return ReactDOM.createPortal(
        <>
            <ModalBase className="modalContainer" onClick={() => close()}>
                <ModalContainer className="modal" onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <h2 className="modal_header-title"> {title} </h2>
                        <button className="close" onClick={() => close()}>
                            close
                        </button>
                    </header>
                    <main className="modal_content">
                        {" "}
                        {children}
                        <input type="text" value={collectionName} onChange={onChange} />{" "}
                    </main>
                    <footer className="modal_footer">
                        <button className="modal-close" onClick={() => close()}>
                            Cancel
                        </button>

                        <button className="submit">Submit</button>
                    </footer>
                </ModalContainer>
            </ModalBase>
        </>,
        document.body
    );
};

export default Modal2;
