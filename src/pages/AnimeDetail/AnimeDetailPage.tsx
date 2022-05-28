import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Modal2 from "../../components/Modal2";
import { GET_ANIME } from "../../graphql/Queries";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useModal } from "../../hooks/useModal";
import Anime from "../../models/Anime";
import Collection from "../../models/Collection";
import { ButtonStyles } from "../../styles/Button";

const AnimeDetailPage = () => {
    const { id } = useParams();
    const { error, loading, data } = useQuery(GET_ANIME, {
        variables: { id: id },
    });
    const [anime, setAnime] = useState<Anime | null>(null);
    const [isShowModal, setIsShowModal] = useState(false);
    const { visible, toggle } = useModal()
    const [name, setName] = useLocalStorage<Collection[]>("collections", []);

    useEffect(() => {
        if (data) {
            setAnime(data.Media);
        }
    }, [data]);

    // const Button = styled.button`
    //     padding: 0.75rem 1.25rem;
    //     display: flex;
    //     algin-items: center;
    //     justify-content: center;
    //     border-radius: 0.375rem;
    //     color: white;
    //     background: #3b82f6;
    //     border: 0;
    //     transition-duration: 200ms;
    //     &:hover {
    //         cursor: pointer;
    //         background: #2563eb;
    //     }
    // `;

    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>Error</div>;
    if (anime === null) return <div>Anime not found</div>;

    const setLocal = () => {
        setName([]);
    };

    return (
        <>
            <h1>{anime.title.romaji}</h1>
            <div>
                <Button color="primary">asd</Button>
                <Modal2 show={visible} close={toggle} title="ASD" />
                {isShowModal && <Modal onIsShowModalChange={setIsShowModal} />}
                <Button onClick={setLocal}>Add to Collection</Button>
                <Button onClick={() => setIsShowModal(true)}>Open Modal</Button>
                <Button onClick={() => toggle()}>Open Modal 2</Button>
            </div>
        </>
    );
};

export default AnimeDetailPage;
