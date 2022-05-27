export default interface Anime {
    id: number;
    title: {
        english: string;
        native: string;
        romaji: string;
        userPreferred: string;
    };
    type: string;
}