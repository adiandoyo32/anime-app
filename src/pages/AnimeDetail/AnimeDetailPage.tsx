/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import { StarIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Modal from "../../components/Modal";
import { useCollectionContext } from "../../context/CollectionContext";
import { GET_ANIME } from "../../graphql/Queries";
import useModal from "../../hooks/useModal";
import Anime from "../../models/Anime";
import Collection from "../../models/Collection";
import AnimeDetailWrapper from "./components/AnimeDetailWrapper";
import AnimeTitle from "./components/AnimeTitle";
import Chip from "./components/Chip";
import CollectionCard from "../../components/CollectionCard";
import CoverImage from "./components/CoverImage";
import Description from "./components/Description";
import Dot from "./components/Dot";
import { Rate } from "./components/Rate";
import FormControl from "../../components/FormControl";
import TextButton from "../../components/TextButton";
import ErrorText from "../../components/ErrorText";
import CollectionGrid from "./components/CollectionGrid";
import { validateCollectionName } from "../../utils/utils";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import { Empty, PlaceHolder } from "../../images";

const AnimeDetailPage = () => {
    const { id } = useParams();
    const { error, loading, data } = useQuery(GET_ANIME, {
        variables: { id: id },
    });
    const { collections, saveAnimeToCollection, findExistingCollection, addCollection } = useCollectionContext();
    const { visible, toggle } = useModal();
    const [anime, setAnime] = useState<Anime | null>(null);
    const [selectedCollection, setSelectedCollection] = useState<string[]>([]);
    const [storedCollection, setStoredCollection] = useState<Collection[]>([]);
    const [isAddCollection, setIsAddCollection] = useState<boolean>(false);
    const [collectionName, setCollectionName] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

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
                    setStoredCollection((state) => [...state, collection]);
                }
            });
        });
    };

    const resolveCheckboxValue = (name: string): boolean => {
        if (selectedCollection.includes(name)) return true;
        return false;
    };

    const onCollectionNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCollectionName(() => e.target.value);
        if (collectionName) setErrorMessage("");
    };

    const toggleIsAddCollection = () => {
        setIsAddCollection(!isAddCollection);
        setCollectionName("");
    };

    const createNewCollection = () => {
        try {
            const isValid = validateCollectionName(collectionName, findExistingCollection);
            if (isValid) {
                addCollection(collectionName);
                toggleIsAddCollection();
            }
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    const onSaveAnimeToCollections = (values: boolean) => {
        if (!values) return;
        saveAnimeToCollection(anime, selectedCollection);
        toggle();
    };

    return (
        <>
            <Banner>
                <BannerImage src={anime.bannerImage ?? PlaceHolder} />
            </Banner>
            <AnimeDetailWrapper>
                <div
                    css={css`
                        position: relative;
                        grid-gap: 1rem;
                        padding: 2rem;
                        display: grid;
                        grid-template-columns: 215px auto;
                        @media (max-width: 800px) {
                            display: block;
                        }
                    `}
                >
                    <div
                        css={css`
                            @media (max-width: 800px) {
                                display: grid;
                                grid-gap: 1rem;
                                grid-template-columns: 100px auto;
                                align-items: end;
                            }
                        `}
                    >
                        <CoverImage imageUrl={anime.coverImage.large} />
                        <div
                            css={css`
                                margin: 0.5rem 0;
                            `}
                        >
                            <Button onClick={toggle}>Add to Collection</Button>
                        </div>
                    </div>
                    <div
                        css={css`
                            display: flex;
                            flex-direction: column;
                            flex-wrap: wrap;
                        `}
                    >
                        <AnimeTitle>{anime.title.romaji}</AnimeTitle>
                        <div
                            css={css`
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                margin: 0.3rem 0;
                                @media (max-width: 400px) {
                                    font-size: 0.875rem;
                                }
                            `}
                        >
                            <Rate>
                                <StarIcon
                                    css={css`
                                        width: 1rem;
                                        height: 1rem;
                                    `}
                                />
                                {anime.averageScore}
                            </Rate>
                            <Dot />
                            <span>{anime.seasonYear}</span>
                            <Dot />
                            <span>{anime.episodes} Episodes</span>
                        </div>
                        <div
                            css={css`
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                padding: 0.5rem 0;
                                flex-wrap: wrap;
                            `}
                        >
                            {anime.genres.map((genre) => (
                                <Chip key={genre}>{genre}</Chip>
                            ))}
                        </div>

                        <Description dangerouslySetInnerHTML={{ __html: anime.description }} />
                    </div>

                    <div
                        css={css`
                            margin-top: 1rem;
                        `}
                    >
                        <h3>Collection info</h3>
                        <CollectionGrid>
                            {storedCollection.length > 0 ? (
                                storedCollection.map((collection, index) => {
                                    return <CollectionCard key={index} collection={collection} />;
                                })
                            ) : (
                                <div>No collection found</div>
                            )}
                        </CollectionGrid>
                    </div>
                </div>

                <div>
                    <Modal
                        show={visible}
                        close={toggle}
                        title="Add to Collection"
                        confirm={onSaveAnimeToCollections}
                        confirmText="Save"
                    >
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
                        {isAddCollection && (
                            <>
                                <FormControl
                                    css={{ marginTop: "1rem" }}
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Collection name"
                                    value={collectionName}
                                    onChange={onCollectionNameInputChange}
                                    isInvalid={errorMessage ? true : false}
                                />
                                <ErrorText error={errorMessage} />
                                <div css={{ marginTop: "0.5rem" }}>
                                    <TextButton size="small" onClick={toggleIsAddCollection}>
                                        Cancel
                                    </TextButton>
                                    <TextButton size="small" onClick={createNewCollection}>
                                        Save
                                    </TextButton>
                                </div>
                            </>
                        )}
                        {!isAddCollection && (
                            <>
                                <span css={{ marginTop: "0.5rem" }}></span>
                                <TextButton size="small" onClick={toggleIsAddCollection}>
                                    New collection
                                </TextButton>
                            </>
                        )}
                    </Modal>
                </div>
            </AnimeDetailWrapper>
        </>
    );
};

export default AnimeDetailPage;
