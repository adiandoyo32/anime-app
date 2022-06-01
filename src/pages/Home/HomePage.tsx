import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ANIME_LIST } from "../../graphql/Queries";
import Anime from "../../models/Anime";
import Page from "../../models/Page";
import AnimeList from "./components/AnimeList";
import HomeWrapper from "./components/HomeWrapper";
import ReactPaginate from "react-paginate";

const HomePage = () => {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const { error, loading, data, refetch } = useQuery<Page<Anime>>(GET_ANIME_LIST, {
        variables: { page: pageNumber },
    });

    useEffect(() => {
        if (data) {
            setPageCount(data.Page.pageInfo.lastPage);
            setAnimeList(data.Page.media);
        }
    }, [data]);

    useEffect(() => {
        refetch({ page: pageNumber });
        console.log(pageNumber)
    }, [pageNumber]);

    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>Error</div>;

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(() => selected);
    };

    return (
        <HomeWrapper>
            <AnimeList animeList={animeList} />
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </HomeWrapper>
    );
};

export default HomePage;
