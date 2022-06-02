/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Button from "./Button";
import { Empty } from "../images";

interface EmptyStateProps {
    title: string;
    description: string;
    action?: () => void;
    actionText: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description, action, actionText }) => {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: calc(100vh - 10rem);
            `}
        >
            <div>
                <img
                    css={css`
                        width: auto;
                        height: 100px;
                    `}
                    src={Empty}
                />
            </div>
            <h2
                css={css`
                    margin: 1rem 0;
                    line-height: 1;
                `}
            >
                {title}
            </h2>
            <p
                css={css`
                    margin-bottom: 1rem;
                    font-size: 0.875rem;
                    color: #8a8a8a;
                    text-align: center;
                `}
            >
                {description}
            </p>
            <Button onClick={action}>{actionText}</Button>
        </div>
    );
};

export default EmptyState;
