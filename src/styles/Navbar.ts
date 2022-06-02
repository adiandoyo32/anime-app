import styled from "@emotion/styled";

export const NavbarHeader = styled.header`
    background-color: rgba(12, 12, 12, 0.7);
    backdrop-filter: blur(5px);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
`;

export const NavbarContent = styled.div`
    padding: 1.2rem;
    overflow: hidden;
    color: #fff;
    margin: 0 auto;
    max-width: 1920px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavbarNav = styled.nav`
    display: flex;
    align-items: center;
    transform: none;
    flex-direction: row;
    width: auto;
    height: 100%;
`;

export const NavbarList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    list-style: none;
`;
export const NavbarListItem = styled.li`
    a {
        font-weight: 500;
        text-decoration: none;
        color: inherit;
        margin: 0 1.25rem;
        transition: 0.3s ease all;
        font-size: 0.875rem;
    }
    @media (min-width: 600px) {
        a {
            font-size: 1rem;
        }
    }
`;
