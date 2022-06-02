import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ANIME_LIST } from "../../graphql/Queries";
import Anime from "../../models/Anime";
import Page from "../../models/Page";
import AnimeList from "./components/AnimeList";
import HomeWrapper from "./components/HomeWrapper";
import ReactPaginate from "react-paginate";
import Loading from "../../components/Loading";

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
      {loading && <Loading />}
      {error && <div>Error</div>}
      {data && <AnimeList animeList={animeList} />}
      <ReactPaginate
        pageRangeDisplayed={2}
        breakLabel={"..."}
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
