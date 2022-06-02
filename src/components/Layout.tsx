import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = styled.main`
    // margin-top: 4rem;
    min-height: calc(100vh - 4rem);
    background-color: #fff;
    // background-color: #f1f1f1;
    // @media (min-width: 1091px) {
    //     margin: auto;
    //     max-width: 64rem;
    // }
`;

const Layout = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default Layout;
