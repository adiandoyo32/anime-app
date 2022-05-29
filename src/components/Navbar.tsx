import { Link } from "react-router-dom";
import { NavbarContent, NavbarHeader, NavbarList, NavbarListItem, NavbarNav } from "../styles/Navbar";

const Navbar = () => {
    return (
        <NavbarHeader>
            <NavbarContent>
                <NavbarNav>
                    <NavbarList>
                        <NavbarListItem>
                            <Link to="/">Home</Link>
                        </NavbarListItem>
                        <NavbarListItem>
                            <Link to="/collections">Collection</Link>
                        </NavbarListItem>
                    </NavbarList>
                </NavbarNav>
            </NavbarContent>
        </NavbarHeader>
    );
};

export default Navbar;
