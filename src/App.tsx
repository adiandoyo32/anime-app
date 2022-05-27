import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import HomePage from "./pages/HomePage";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.anilist.co",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <HomePage />
            </div>
        </ApolloProvider>
    );
}

export default App;
