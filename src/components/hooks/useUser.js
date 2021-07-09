import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../../apollo";

const SEEMYPROFILE_QUERY = gql`
  query seeMyProfile {
    seeMyProfile {
      username
      avatar
    }
  }
`;

function useUser() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(SEEMYPROFILE_QUERY, {
    skip: !isLoggedIn,
  });
  console.log(data, error);
  return;
}
export default useUser;
