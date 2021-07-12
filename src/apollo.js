import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import routes from "./routes";

const TOKEN = "token";
const DARK_MODE = "DARK_MODE";
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const LogUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const LogUserOut = (history) => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  history.replace(routes.home, null);
  window.location.reload();
};

export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});