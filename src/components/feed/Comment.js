import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";
import React from "react";
import { gql, useMutation } from "@apollo/client";

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
    }
  }
`;

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

function Comment({ author, payload, id, isMine, photoId }) {
  const updateDeleteComment = (cache, result) => {
    const {
      data: {
        deleteComment: { ok },
      },
    } = result;
    if (ok) {
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber(prev) {
            return prev - 1;
          },
        },
      });
    }
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id,
    },
    update: updateDeleteComment,
  });
  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  return (
    <CommentContainer>
      <Link to={`users/${author}`}>
        <FatText>{author}</FatText>
      </Link>
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
      {isMine ? <button onClick={onDeleteClick}>x</button> : null}
    </CommentContainer>
  );
}

Comment.propTypes = {
  isMine: PropTypes.bool,
  id: PropTypes.number,
  photoId: PropTypes.number,
  author: PropTypes.string.isRequired,
  payload: PropTypes.string,
};

export default Comment;
