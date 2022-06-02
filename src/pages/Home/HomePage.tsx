import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ANIME_LIST } from "../../graphql/Queries";
import Anime from "../../models/Anime";
import Page from "../../models/Page";
import AnimeList from "./components/AnimeList";
import HomeWrapper from "./components/HomeWrapper";
import ReactPaginate from "react-paginate";
import Button from "../../components/Button";

const HomePage = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [getAnimeList, { data, error, loading }] = useLazyQuery<Page<Anime>>(
    GET_ANIME_LIST,
    {
      variables: { page: pageNumber + 1 },
    }
  );

  useEffect(() => {
    getAnimeList();
  }, []);

  useEffect(() => {
    if (data) {
      setAnimeList(data.Page.media);
      setPageCount(() => data.Page.pageInfo.lastPage);
    }
  }, [data]);

  useEffect(() => {
    getAnimeList();
  }, [pageNumber]);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(() => selected);
  };

  return (
    <HomeWrapper>
      {loading && <div className="asd">Loading...2</div>}
      {error && <div>Error</div>}
      {data && <AnimeList animeList={animeList} />}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </HomeWrapper>
  );
};

export default HomePage;
