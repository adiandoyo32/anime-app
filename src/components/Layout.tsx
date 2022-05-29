import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = styled.main`
    margin: 0 auto;
    margin-top: 4rem;
    padding: 1.5rem;
    // @media (min-width: 1091px) {
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
