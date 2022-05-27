import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
    query AnimeList {
        Page(page: 1, perPage: 10) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            media(type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                    userPreferred
                }
                type
                genres
            }
        }
    }
`;

export const GET_ANIME = gql`
    query {
        Media(search: "shingeki", type: ANIME, sort: POPULARITY_DESC) {
            id
            title {
                romaji
                english
                native
                userPreferred
            }
        }
    }
`;
