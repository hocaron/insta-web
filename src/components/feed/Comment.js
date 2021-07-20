import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";
import React from "react";

const CommentContainer = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.blue};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/;

function Comment({ author, payload }) {
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>
        {payload
          ? payload.split(" ").map((word, index) =>
              /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/.test(word) ? (
                <React.Fragment key={index}>
                  <Link key={index} to={`/hashtags/${word}`}>
                    {word}
                  </Link>{" "}
                </React.Fragment>
              ) : (
                <React.Fragment key={index}>{word} </React.Fragment>
              )
            )
          : null}
      </CommentCaption>
    </CommentContainer>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string,
};

export default Comment;
