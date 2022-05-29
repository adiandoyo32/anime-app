import React from "react";

interface CheckboxProps {
    checked: boolean;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    return (
        <>
            <label>
                <input type="checkbox" checked={props.checked} onChange={props.onChange} />
                {props.label}
            </label>
        </>
    );
};

export default Checkbox;
