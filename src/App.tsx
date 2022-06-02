import React, { lazy, Suspense } from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CollectionProvider from "./context/CollectionContext";
// import Layout from "./components/Layout";
const Layout = lazy(() => import("./components/Layout"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CollectionDetailPage = lazy(() => import("./pages/CollectionDetail/CollectionDetailPage"));
const AnimeDetailPage = lazy(() => import("./pages/AnimeDetail/AnimeDetailPage"));
const CollectionPage = lazy(() => import("./pages/Collection/CollectionPage"));

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <CollectionProvider>
                <Suspense fallback={<div className="asd">Loading...1</div>}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/anime/:id" element={<AnimeDetailPage />} />
                                <Route path="/collections" element={<CollectionPage />} />
                                <Route path="/collections/:name" element={<CollectionDetailPage />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </CollectionProvider>
        </ApolloProvider>
    );
}

export default App;
