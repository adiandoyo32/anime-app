import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeDetailPage from "./pages/AnimeDetail/AnimeDetailPage";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/anime/:id" element={<AnimeDetailPage />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
