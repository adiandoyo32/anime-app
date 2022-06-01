import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
    query AnimeList($page: Int) {
        Page(page: $page, perPage: 10) {
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
                genres
                season
                seasonYear
                averageScore
                coverImage {
                    large
                }
            }
        }
    }
`;

export const GET_ANIME = gql`
    query AnimeDetail($id: Int) {
        Media(id: $id, type: ANIME) {
            id
            description
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            title {
                romaji
                english
                native
                userPreferred
            }
            coverImage {
                color
                medium
                large
            }
            bannerImage
            averageScore
            seasonYear
            status
            duration
            episodes
            genres
            season
        }
    }
`;
