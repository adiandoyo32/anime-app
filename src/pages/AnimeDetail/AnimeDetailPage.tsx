/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Modal2 from "../../components/Modal2";
import { useCollectionContext } from "../../context/CollectionContext";
import { GET_ANIME } from "../../graphql/Queries";
import { useModal } from "../../hooks/useModal";
import Anime from "../../models/Anime";
import Collection from "../../models/Collection";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import CoverImage from "./components/CoverImage";
import Description from "./components/Description";

const AnimeDetailPage = () => {
    const { id } = useParams();
    const { error, loading, data } = useQuery(GET_ANIME, {
        variables: { id: id },
    });
    const { collections, saveAnimeToCollection } = useCollectionContext();
    const [anime, setAnime] = useState<Anime | null>(null);
    const [selectedCollection, setSelectedCollection] = useState<string[]>([]);
    const [storedCollection, setStoredCollection] = useState<string[]>([]);
    const { visible, toggle } = useModal();

    useEffect(() => {
        if (data) {
            setAnime(data.Media);
        }
    }, [data]);

    useEffect(() => {
        if (anime) resolveCollectionInfo(anime);
    }, [collections, anime]);

    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>Error</div>;
    if (anime === null) return <div>Anime not found</div>;

    const onCollectionCheck = (collection: Collection, e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedCollection([...selectedCollection, collection.name]);
        } else {
            const arr = [...selectedCollection];
            const index = arr.indexOf(collection.name);
            arr.splice(index, 1);
            setSelectedCollection(arr);
        }
    };

    const resolveCollectionInfo = (anime: Anime) => {
        setStoredCollection([]);
        collections.forEach((collection) => {
            collection.animes.forEach((item) => {
                if (item.id === anime.id) {
                    setSelectedCollection((state) => [...state, collection.name]);
                    setStoredCollection((state) => [...state, collection.name]);
                }
            });
        });
    };

    const resolveCheckboxValue = (name: string): boolean => {
        if (selectedCollection.includes(name)) return true;
        return false;
    };

    const save = () => {
        saveAnimeToCollection!(anime, selectedCollection);
        toggle();
    };

    return (
        <>
            {/* <Banner>
                <BannerImage src={anime.bannerImage} />
            </Banner> */}

            <div
                className=""
                css={css`
                    display: flex;
                    // grid-gap: 1rem;
                    // @media (min-width: 560px) {
                    //     grid-template-columns: repeat(2, max-content);
                    // }
                `}
            >
                <CoverImage imageUrl={anime.coverImage.large} />
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        border: 1px solid black;
                        padding: 1rem;
                    `}
                >
                    <h3>{anime.title.romaji}</h3>
                    <Description>{anime.description}</Description>
                </div>
            </div>

            <div>
                <Button onClick={toggle}>Add to Collection</Button>
                <Modal2 show={visible} close={toggle} title="Add to Collection">
                    {collections?.map((collection, index) => {
                        return (
                            <Checkbox
                                key={index}
                                checked={resolveCheckboxValue(collection.name)}
                                label={collection.name}
                                onChange={(e) => onCollectionCheck(collection, e)}
                            />
                        );
                    })}
                    <Button onClick={save}>Save</Button>
                </Modal2>
            </div>
            <h4>Collection info</h4>
            {storedCollection.map((collection, index) => {
                return <div key={index}>{collection}</div>;
            })}
        </>
    );
};

export default AnimeDetailPage;
