import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = styled.main`
    margin: 0 auto;
    margin-top: 4rem;
    padding: 1.5rem;
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
