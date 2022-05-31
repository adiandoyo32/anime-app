import styled from "@emotion/styled";

interface FormControlProps {
    isInvalid?: boolean;
}

const resolveIsInvalid = (isInvalid?: boolean) => {
    if (isInvalid) {
        return `border: 1px solid red; 
            &:focus {
                outline: none;
            }`;
    }
    return "";
};

const FormControl = styled.input<FormControlProps & React.InputHTMLAttributes<HTMLInputElement>>`
    border: 1px solid #e1e1e1;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    transition-duration: 200ms;
    &:focus {
        outline: none;
    }
    ${({ isInvalid }) => resolveIsInvalid(isInvalid)}
`;

export default FormControl;
