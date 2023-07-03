import ReactDOM from "react-dom/client";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Routes from "./routes";

import { GlobalStyle } from "./globalStyles";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: import.meta.env.VITE_GRAPHQL_URL,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ApolloProvider client={client}>
        <Routes />
        <GlobalStyle />
    </ApolloProvider>
);
