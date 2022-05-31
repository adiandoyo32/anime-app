/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface CheckboxProps {
    checked: boolean;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    return (
        <>
            <label
                css={css`
                    display: flex;
                    align-items: center;
                    width: max-content;
                `}
            >
                <input css={css`
                    margin: 0.5rem 0.5rem 0.5rem 0;
                    width: 1.2rem;
                    height: 1.2rem;
                `} type="checkbox" checked={props.checked} onChange={props.onChange} />
                <span>{props.label}</span>
            </label>
        </>
    );
};

export default Checkbox;
