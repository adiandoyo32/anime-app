export default interface Anime {
    id: number;
    description: string;
    title: {
        english: string;
        native: string;
        romaji: string;
        userPreferred: string;
    };
    coverImage: {
        color: string;
        medium: string;
        large: string;
    }
    bannerImage: string;
    averageScore: number;
    seasonYear: string;
    status: string;
    duration: number;
    episodes: number;
    genres: string[]
    season: string;
}