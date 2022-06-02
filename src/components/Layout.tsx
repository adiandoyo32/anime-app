import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = styled.main`
    min-height: calc(100vh - 4rem);
    background-color: #fff;
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
