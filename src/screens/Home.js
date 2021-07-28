import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

export const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      isMine
      createdAt
      comments {
        ...CommentFragment
      }
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  const history = useHistory();
  return (
    <div>
      <PageTitle title="Home" />
      {data?.seeFeed?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
      {/* <button onClick={() => LogUserOut(history)}>Log out now</button> */}
    </div>
  );
}
export default Home;
