import styled from "@emotion/styled";
import React from "react";

interface ErrorTextProps {
    error: string;
}

const Text = styled.p`
    color: #ef144a;
    font-size: 12px;
    line-height: 18px;
    margin: 4px 0px 0px;
`;

const ErrorText: React.FC<ErrorTextProps> = ({ error }) => {
    return <Text>{error}</Text>;
};

export default ErrorText;
