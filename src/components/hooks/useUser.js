import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isLoggedInVar, LogUserOut } from "../../apollo";

const SEEMYPROFILE_QUERY = gql`
  query seeMyProfile {
    seeMyProfile {
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const history = useHistory();
  const { data } = useQuery(SEEMYPROFILE_QUERY, {
    skip: !hasToken,
  });
  useEffect(() => {
    if (data?.seeMyProfile === null) {
      LogUserOut(history);
    }
  }, [data]);
  return;
}
export default useUser;
