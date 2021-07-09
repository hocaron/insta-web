import styled from "styled-components";
import Header from "./Header";

const Content = styled.main``;

function Layout({ children }) {
  <>
    <Header />
    <div>{children}</div>
  </>;
}
