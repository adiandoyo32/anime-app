import styled from "@emotion/styled";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const CardPoster = styled.div`
    wdit: 100%;
    height: 80%;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
        transform: scale(1.1);
    }
    transition: all .2s ease-in-out;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`;

export const CardTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    word-break: break-all;
    margin-bottom: 0.3rem;
`;

export const Rate = styled.span`
    font-size: 0.85rem;
    color: #ffc400;
    margin-bottom: 0.2rem;
    font-weight: 500;
`;
