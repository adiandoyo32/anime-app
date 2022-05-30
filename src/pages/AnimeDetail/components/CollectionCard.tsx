/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Button from "../../../components/Button";
import { PlaceHolder } from "../../../images";

interface CollectionCardProps {
  collection: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <div
      css={css`
        display: flex;
        margin-top: 0.5rem;
      `}
    >
      <div
        css={css`
          width: 6rem;
          height: 6rem;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 100%;
          `}
          src={PlaceHolder}
        />
      </div>
      <div
        css={css`
          padding: 1rem;
        `}
      >
        <h5>{collection}</h5>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          1 anime
        </p>
        <Button size="small">Detail</Button>
      </div>
    </div>
  );
};

export default CollectionCard;
