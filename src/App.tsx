import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeDetailPage from "./pages/AnimeDetail/AnimeDetailPage";
import CollectionProvider from "./context/CollectionContext";
import CollectionPage from "./pages/Collection/CollectionPage";
import Layout from "./components/Layout";
import CollectionDetailPage from "./pages/CollectionDetail/CollectionDetailPage";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <CollectionProvider>
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
            </CollectionProvider>
        </ApolloProvider>
    );
}

export default App;
