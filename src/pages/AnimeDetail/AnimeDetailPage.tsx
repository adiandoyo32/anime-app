import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ANIME } from "../../graphql/Queries";
import Anime from "../../models/Anime";

const AnimeDetailPage = () => {
    const { id } = useParams()
    const { error, loading, data } = useQuery(GET_ANIME, {
        variables: { id: id },
    });
    const [anime, setAnime] = useState<Anime | null>(null);

    useEffect(() => {
      if (data) {
          setAnime(data.Media);
      }
  }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>Error</div>;
    if (anime === null) return <div>Anime not found</div>;

    return <>
        <h1>{anime.title.romaji}</h1>
    </>
    
};

export default AnimeDetailPage;
