import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ANIME_LIST } from "../../graphql/Queries";
import Anime from "../../models/Anime";
import Page from "../../models/Page";
import AnimeList from "./components/AnimeList";

const HomePage = () => {
    const { error, loading, data } = useQuery<Page<Anime>>(GET_ANIME_LIST);
    const [animeList, setAnimeList] = useState<Anime[]>([]);

    useEffect(() => {
        if (data) {
            setAnimeList(data.Page.media);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>Error</div>;

    return (
        <div>
            <p>Anime List</p>
            <AnimeList animeList={animeList} />
        </div>
    );
};

export default HomePage;
