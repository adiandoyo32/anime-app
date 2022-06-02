/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface CoverImageProps {
    imageUrl: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ imageUrl }) => {
    return (
        <div css={css`
            margin-top: -140px;
        `}>
            <img css={css`
                width: 100%;
                object-fit: cover;
            `} src={imageUrl} alt="" />
        </div>
    );
};

export default CoverImage;
