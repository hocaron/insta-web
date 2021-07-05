import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  blue: "#0195f7",
  borderColor: "rgb(219, 219, 219);",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "black",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        background-color: #FAFAFA;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color:rgb(38,38,38);
    }
    a {
      text-decoration: none;
    }
`;
