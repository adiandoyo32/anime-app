/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface CoverImageProps {
    imageUrl: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ imageUrl }) => {
    return (
        <div css={css`
            margin: auto;
            width: 80%;
            @media (min-width: 400px) {
                margin: 0;
                width: 100%;
            }
        `}>
            <img css={css`
                width: 100%;
                object-fit: cover;
            `} src={imageUrl} />
        </div>
    );
};

export default CoverImage;
