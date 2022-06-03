import React, { useContext } from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import CollectionPage from "../pages/Collection/CollectionPage";
import CollectionProvider from "../context/CollectionContext";
import { act } from "react-dom/test-utils";

const renderCollection = () =>
    render(
        <CollectionProvider>
            <CollectionPage />
        </CollectionProvider>
    );

afterEach(() => {
    cleanup();
});

test("render collection page without collection data", () => {
    renderCollection()
    expect(screen.getByRole("button")).toHaveTextContent('New Collection');
    expect(screen.getByText("Collection is Empty")).toBeInTheDocument();
});
