import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = styled.main`
    margin-top: 4rem;
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    min-height: 100vh;
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
