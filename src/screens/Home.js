import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";

export const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      isMine
      comments
      createdAt
      likeNumber
      isLiked
    }
  }
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
