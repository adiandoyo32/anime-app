import Anime from "./Anime";

export default interface Collection {
    name: string;
    animes: Anime[] | null;
}