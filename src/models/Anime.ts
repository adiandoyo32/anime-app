export default interface Anime {
    id: number;
    title: {
        english: string;
        native: string;
        romaji: string;
        userPreferred: string;
    };
    genres: string;
    season: string;
    averageScore: number;
    coverImage: {
        color: string;
        medium: string;
        large: string;
    }
}